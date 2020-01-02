using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using AutoMapper;
using LeCafe.Data;
using LeCafe.Data.Entities;
using LeCafe.DataModels;
using LeCafe.ViewsModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LeCafe.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme,Roles = "Cajero")]
    public class OrderController : Controller
    {
        private readonly IRestauranteRepositorio restauranteRepositorio;
        private readonly ILogger<OrderController> logger;
        private readonly IMapper mapper;
        private readonly UserManager<Cajero> userManager;
        public OrderController(IRestauranteRepositorio restauranteRepositorio, ILogger<OrderController> logger,
            IMapper mapper, UserManager<Cajero> userManager)
        {
            this.restauranteRepositorio = restauranteRepositorio;
            this.logger = logger;
            this.mapper = mapper;
            this.userManager = userManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(restauranteRepositorio.GetAllOrders());
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Orden model)
        {
            try
            {
                var currentUser = await userManager.FindByNameAsync(User.Identity.Name);
                var Newmodel = new Orden() {
                    Id = model.Id,
                    numeroOrden = model.numeroOrden,
                    nombre = model.nombre,
                    nit = model.nit,
                    apellido = model.apellido,
                    items = new List<OrderItem>(),
                    cajero = currentUser,   //usuario logeado
                    fechaEmision = DateTime.UtcNow, //fecha hoy
                    tipoPago = model.tipoPago,
                    tarjetaId= model.tarjetaId,
                    subTotal= model.subTotal
                };
                Newmodel.items = model.items;
                restauranteRepositorio.AddOrder(Newmodel);
                if (restauranteRepositorio.SaveAll())
                {
                    /*   return Created($"/api/order/{Newmodel.Id}", Newmodel);*/
                    var results = new
                    {
                        ruta = $"{Newmodel.Id}"
                    };
                    return Created("",results);
                }
            }
            catch (Exception ex) {
                logger.LogError($"Fallo al Guardar Orden:{ex}");
            }

            return BadRequest("Failed to save new order");
        }
    }
}
