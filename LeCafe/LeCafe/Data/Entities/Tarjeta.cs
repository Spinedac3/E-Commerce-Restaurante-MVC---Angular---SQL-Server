using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeCafe.Data.Entities
{
    public class Tarjeta
{
        public int Id { get; set; }
        public int numeroTarjeta { get; set; }
        public string nombre { get; set; }
        public DateTime fechaVencimiento { get; set; }
        public int ccv { get; set; }
        public double saldo { get; set; }


}
}
