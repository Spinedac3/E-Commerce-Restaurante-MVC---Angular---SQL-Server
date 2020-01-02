using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeCafe.Data.Entities
{
    public class Cajero : IdentityUser
    {
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string Role { get; set; }

    }
}
