using Microsoft.AspNetCore.Mvc;

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