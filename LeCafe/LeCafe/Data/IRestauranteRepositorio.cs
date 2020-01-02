using LeCafe.Data.Entities;
using LeCafe.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeCafe.Data
{
   public interface IRestauranteRepositorio
    {
        IEnumerable<Tarjeta> GetAllTarjetas();
        IEnumerable<Producto> GetProducts(int tipoProducto);
        IEnumerable<Orden> GetAllOrders();
        void AddOrder(Orden newOrden);
        bool SaveAll();
        void AddEntity(object model);
        Tarjeta GetTarjetaById(int id);
    }
}
