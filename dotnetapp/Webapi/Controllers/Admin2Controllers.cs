using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class Admin2Controller : ControllerBase
    {
        BusinessLayer dal = new BusinessLayer();
        [HttpGet]
        [Route("admin/getAlljobs")]
        public List<UserModel> getAlljobs()
        { 
            return(dal.getAlljobs());
        }
    }
}