using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MiniRestaurantApp.API.Models;
using Newtonsoft.Json;

namespace MiniRestaurantApp.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var data = System.IO.File.ReadAllText(@"Data/Data.json");
            var dataToReturn = JsonConvert.DeserializeObject<IEnumerable<RestaurantData>>(data);
            return Ok(dataToReturn);
        }
    }
}