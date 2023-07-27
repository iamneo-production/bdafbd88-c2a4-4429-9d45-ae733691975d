using Microsoft.AspNetCore.Mvc;
<<<<<<< HEAD
using System.Data.SqlClient;
using Webapi.Models;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
=======
>>>>>>> db1ab22e0e29af77503a4c9295263d196fec9cb9

namespace Webapi.Controllers
{
    
    [ApiController]
    public class UserController : ControllerBase
    {
        BusinessLayer dal = new BusinessLayer();
        [HttpGet]
        [Route("user/dashboard")]
        public List<UserModel> dashboard()
        { 
            return(dal.dashboard());
        }
    }
}