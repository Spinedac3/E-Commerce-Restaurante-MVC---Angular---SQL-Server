using LeCafe.DataModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeCafe.Data.Entities
{
    public class RestauranteRepositorio : IRestauranteRepositorio
    {
        private readonly RestauranteContext ctx;
        private readonly ILogger<RestauranteContext> logger;

        public RestauranteRepositorio(RestauranteContext ctx, ILogger<RestauranteContext> logger)
        {
            this.ctx = ctx;
            this.logger = logger;
        }

        public void AddEntity(object model)
        {
            ctx.Add(model);
        }

        public void AddOrder(Orden newOrden)
        {
            foreach (var item in newOrden.items)
            {
                item.producto = ctx.Productos.Find(item.producto.Id);
            }
        
            AddEntity(newOrden);
        }

        public IEnumerable<Orden> GetAllOrders()
        {
            return ctx.Orden.
                Include(o=>o.cajero).
                Include(o => o.items)
                .ThenInclude(p => p.producto)
                .ToList();
        }

        public IEnumerable<Tarjeta> GetAllTarjetas()
        {
            return ctx.Tarjeta.ToList();
        }

        public IEnumerable<Producto> GetProducts(int tipoProducto)
        {
            string[] tipo = new string[] { "", "entrada","cafe","jugo","vino", "licor","desayuno","pancakes"
            ,"sandwiche","pasta","hamburguesa","ensalada"};
            return ctx.Productos.Where(o => o.tipoProducto == tipo[tipoProducto])
                .ToList();
        }

        public Tarjeta GetTarjetaById(int id)
        {
            return ctx.Tarjeta.Where(o=> o.Id == id).FirstOrDefault();
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }

    
    }
}
