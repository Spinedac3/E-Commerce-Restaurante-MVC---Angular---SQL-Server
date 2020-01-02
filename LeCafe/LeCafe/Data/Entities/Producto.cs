using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeCafe.Data.Entities
{
    public class Producto
    {
        public int Id { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public string tipoProducto { get; set; }
        public double precio { get; set; }

    }
}
