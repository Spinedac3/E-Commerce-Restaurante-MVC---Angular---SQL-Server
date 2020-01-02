using LeCafe.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeCafe.DataModels
{
    public class OrderModel
    {
        public int Id { get; set; }
        public string numeroOrden { get; set; }
        public DateTime fechaEmision { get; set; }
        public Cajero cajero { get; set; }
        public string nombre { get; set; }
        public string nit { get; set; }
        public string apellido { get; set; }
        public ICollection<OrderItem> items { get; set; }
            = new List<OrderItem>();
        public string tipoPago { get; set; }
        public int tarjetaId { get; set; } = 1;
        public double subTotal { get; set; }
    }
}
