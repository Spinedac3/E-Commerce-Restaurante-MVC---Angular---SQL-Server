using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeCafe.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LeCafe.Controllers
{
    [Route("api/[Controller]")]
    public class ProductoController : Controller
    {
        private readonly IRestauranteRepositorio restauranteRepositorio;
        private readonly ILogger<OrderController> logger;

        public ProductoController(IRestauranteRepositorio restauranteRepositorio, ILogger<OrderController> logger)
        {
            this.restauranteRepositorio = restauranteRepositorio;
            this.logger = logger;
        }


        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(restauranteRepositorio.GetProducts(id));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }
        }
}
