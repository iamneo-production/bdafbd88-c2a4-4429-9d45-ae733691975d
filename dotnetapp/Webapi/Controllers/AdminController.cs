using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class AdminController : ControllerBase
    {
        BusinessLayer dal = new BusinessLayer();
        [HttpGet]
        [Route("admin/Profile")]
        public List<UserModel> getProfile()
        { 
            return(dal.getProfile());
        }
    }
}
