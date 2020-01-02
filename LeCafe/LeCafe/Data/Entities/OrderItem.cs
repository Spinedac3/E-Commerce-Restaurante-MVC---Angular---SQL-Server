using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeCafe.Data.Entities
{
    public class OrderItem
    {
        public int Id { get; set; }
        public Producto producto { get; set; }
        public int cantidad { get; set; }
        public Orden orden { get; set; }
    }
}
