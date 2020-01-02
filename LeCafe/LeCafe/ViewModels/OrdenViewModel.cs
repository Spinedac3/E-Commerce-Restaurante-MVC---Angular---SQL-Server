using LeCafe.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LeCafe.ViewsModels
{
    public class OrdenViewModel
    {
        public int Id { get; set; }
        public string numeroOrden { get; set; }
        public DateTime fechaEmision { get; set; }
        public string nombre { get; set; }
        public string nit { get; set; }
        public string apellido { get; set; }
        public ICollection<OrderItemViewModel> items { get; set; }
            = new List<OrderItemViewModel>();
        public string tipoPago { get; set; }
        public TarjetaViewModel? tarjeta { get; set; }
        public double subTotal { get; set; }
    }
}
