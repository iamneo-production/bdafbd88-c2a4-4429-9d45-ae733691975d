<<<<<<< HEAD
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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

=======
>>>>>>> db1ab22e0e29af77503a4c9295263d196fec9cb9
