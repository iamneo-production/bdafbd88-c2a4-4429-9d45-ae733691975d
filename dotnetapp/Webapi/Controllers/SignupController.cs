using Microsoft.AspNetCore.Mvc;
<<<<<<< HEAD
=======
using System.Collections.Generic;
using Webapi.Models;
>>>>>>> 0513a3a89e6c690334ddbdf1194ceaf93f20df15

namespace Webapi.Controllers
{
    
    [ApiController]
    public class SignupController : ControllerBase
    {
        [HttpPost]
        [Route("user/signup")]
        public IActionResult SaveUser([FromBody] UserModel user)
        {
            BusinessLayer dal = new BusinessLayer();
            return Created("",dal.SaveUser(user));

        }

        BusinessLayer dal = new BusinessLayer();
        [HttpGet]
        [Route("jobseeker/getJobs")]
        public List<UserModel> getJobs()
        { 
            return(dal.getJobs());
        }

        [HttpGet]
        [Route("jobseeker/getAppliedJobs")]
        public List<UserModel> getAppliedJobs()
        { 
            return(dal.getAppliedJobs());
        }

        [HttpGet]
        [Route("admin/getAlljobs")]
        public List<UserModel> getAlljobs()
        { 
            return(dal.getAlljobs());
        }

        [HttpGet]
        [Route("admin/Profile")]
        public List<UserModel> getProfile()
        { 
            return(dal.getProfile());
        }

        [HttpGet]
        [Route("user/dashboard")]
        public List<UserModel> dashboard()
        { 
            return(dal.dashboard());
        }

    }
}