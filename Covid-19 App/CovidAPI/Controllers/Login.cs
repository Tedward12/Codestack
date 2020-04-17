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
    [Route("login")]

    public class LoginController : ControllerBase
    {
        private readonly DataService _fixedLogin;
        // private readonly DataServiceSql _sqlLogin;

        public LoginController(DataService fixedLogin)
        {
            _fixedLogin = fixedLogin;
            // _sqlLogin = sqlLogin;
        }

        [HttpGet]
        public IEnumerable<loginInfo> Get(){
            return _fixedLogin.GetLogin();
        }
    }
}