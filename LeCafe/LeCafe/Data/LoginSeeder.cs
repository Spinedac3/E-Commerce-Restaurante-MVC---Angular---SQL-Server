using LeCafe.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace LeCafe.Data
{
    public class LoginSeeder
    {
        private readonly RestauranteContext ctx;
        private readonly UserManager<Cajero> userManager;
  

        public LoginSeeder(RestauranteContext ctx, UserManager<Cajero> UserManager) //admin todos los usuarios
        {
            this.ctx = ctx;
            userManager = UserManager;
        }

        public async Task LoginsAsync()
        {
            ctx.Database.EnsureCreated();     //indica que la bd esta creada y se ejecuta cuando la bd esta up

            //inserta usuario con la BD esta lista y levantada.
            Cajero user = await userManager.FindByEmailAsync("wluna@lecafe.com");        //await se usa por la operacion asincrona, este metodo espera que todos los datos lleguen

            if (user == null)
            {
                user = new Cajero()
                {
                    apellido = "Luna",
                    nombre = "Wilson",
                    Email = "wluna@lecafe.com",
                    UserName = "Wluna",
                    Role = "Admin"
                    
                };


                var result = await userManager.CreateAsync(user, "P@ssw0rd");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("No se creo correctamente el usuario");
                }
                
            }
        }

    }
}
