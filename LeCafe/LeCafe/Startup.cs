using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using LeCafe.Data;
using LeCafe.Data.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace LeCafe
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        private async Task CreateUserRoles(IServiceProvider serviceProvider)
        {
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var UserManager = serviceProvider.GetRequiredService<UserManager<Cajero>>();

            IdentityResult roleResult;
            //Adding Admin Role
            var roleCheck = await RoleManager.RoleExistsAsync("Admin");
            if (!roleCheck)
            {
                //create the roles and seed them to the database
                roleResult = await RoleManager.CreateAsync(new IdentityRole("Admin"));
            }
            //Assign Admin role to the main User here we have given our newly registered 
            //login id for Admin management
            Cajero user = await UserManager.FindByEmailAsync("wluna@lecafe.com");
            var User = new Cajero();
            await UserManager.AddToRoleAsync(user, "Cajero");
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            //1er servicio
            services.AddIdentity<Cajero, IdentityRole>(cfg => { //administra la identidad y se envia RestarurantConxte
                cfg.User.RequireUniqueEmail = true;
                
            })
              .AddEntityFrameworkStores<RestauranteContext>();   //se aplican los cambio al servicio en nuestra BD que esta en RestauranteContext.cs
            //2do servicio  
            services.AddTransient<LoginSeeder>();   //insertar o llamado del servicio de login, se utilizo AddTransient por que solo se invoca cuando se necesita luego muere el servicio.
            //3er servicio  
            services.AddScoped<IRestauranteRepositorio,RestauranteRepositorio>();  //IR es la interfaz que se representa nivel general y en Respo se representan los metodos especificos o la impelementacion de la interfaz.
            //4to servicio 
            services.AddAuthentication()  //que tipo de inicio de sesion admitimos, por AddCookie (sesio de memoria) y toquen AddJwBearer(Llave)
             .AddCookie()
             .AddJwtBearer(cfg => {
                 cfg.TokenValidationParameters = new TokenValidationParameters()
                 {
                     ValidIssuer = Configuration["Tokens:Issuer"],
                     ValidAudience = Configuration["Tokens:Audience"],
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
                 };
             });
   
            services.AddDbContext<RestauranteContext>(cfg =>   //se indica que archivo se usara para definir la BD.
            {
                cfg.UseSqlServer(Configuration.GetConnectionString("ConnectionString"));  //define que se usara SQL, se define la cadena de conexion que se realizara ConnectionString (Config.jason)
                

            });
          
            services.AddControllers()
      .AddNewtonsoftJson(options =>  //AddNewtonsoft se utiliza para quita la serializacion (falsa) este metodo se utilizo para las ordenes incluyeran los item seleccionados. sino da error por el tipo de serializacion. 
      {
          options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
      });
            services.AddAutoMapper(Assembly.GetEntryAssembly());
            services.AddMvc();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider services)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseNodeModules(); //para crear adicionar como una carpeta segura para jalar todo tipo de librerias. wwwroot estandar.
            app.UseAuthorization();
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

           CreateUserRoles(services).Wait();
        }
    }
}
