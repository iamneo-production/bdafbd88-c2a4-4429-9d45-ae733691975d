using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class JobseekerController : ControllerBase
    {
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
    }
}