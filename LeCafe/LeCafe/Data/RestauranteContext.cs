using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using LeCafe.Data.Entities;
using LeCafe.DataModels;

namespace LeCafe.Data
{
    public class RestauranteContext : IdentityDbContext<Cajero> // define que se utilizara identidad usurio, roles, privilegios, por medio del archivo de Cajero
    {
        public RestauranteContext(DbContextOptions<RestauranteContext> options) : base(options)
        {
        }
        //se crean la tablas y las descripciones de solicitan en la carpeta Entities (Cajero, orden)
        //se define todos los DbSet de una vez para realizar insersion y consulta de datos.
        public DbSet<Cajero> Cajeros { get; set; }  
        public DbSet<Orden> Orden { get; set; }
        public DbSet<OrderItem> OrderItem{get;set;}
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Tarjeta> Tarjeta { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

        }
    }
}
