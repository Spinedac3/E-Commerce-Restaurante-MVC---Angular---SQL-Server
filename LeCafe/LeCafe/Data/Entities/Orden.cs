using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LeCafe.Data.Entities
{
    public class Orden
    {
        public int Id { get; set; }
        public string numeroOrden { get; set; }
        public DateTime fechaEmision { get; set; }
        public Cajero cajero { get; set; }  //es llave foreane por que hace referencia a otra tabla
        public string nombre { get; set; }
        public string nit { get;set; }
        public string apellido { get; set; }
        public ICollection<OrderItem> items { get; set; }
            = new List<OrderItem>();
        public string tipoPago { get; set; }
        public int? tarjetaId { get; set; } 
        public double subTotal { get; set; }
}
}
