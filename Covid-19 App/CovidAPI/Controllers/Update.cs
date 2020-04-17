using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CovidAPI.Models;
using CovidAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CovidAPI.Controllers
{
    [ApiController]
    [Route("update")]

    public class UpdateController : ControllerBase
    {
        private readonly DataService _fixedUpdate;
        // private readonly DataServiceSql _sqlUpdate;

        public UpdateController(DataService fixedUpdate)
        {
            _fixedUpdate = fixedUpdate;
            // _sqlUpdate = sqlUpdate;
        }

        [HttpGet]
        public IEnumerable<updateInfo> Get(){
            return _fixedUpdate.GetUpdate();
        }

    }
}