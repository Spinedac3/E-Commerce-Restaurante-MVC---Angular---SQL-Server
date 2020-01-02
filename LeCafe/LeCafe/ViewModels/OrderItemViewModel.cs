using LeCafe.Data.Entities;

namespace LeCafe.ViewsModels
{
    public class OrderItemViewModel
    {
        public class OrderItem
        {
            public int Id { get; set; }
            public Producto producto { get; set; }
            public int cantidad { get; set; }
            public Orden orden { get; set; }

        }
    }
}