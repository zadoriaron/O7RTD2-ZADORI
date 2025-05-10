using Microsoft.AspNetCore.Mvc;
using FragranceWebshop_Entities.Entity_Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using FragranceWebshop_Logic.Logic;
using FragranceWebshop_Data;
using FragranceWebshop_Entities.Dtos.PurchaseDto;


namespace FragranceWebshop_Endpoint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseController: ControllerBase
    {
        PurchaseLogic logic;
        UserManager<AppUser> userManager;

        public PurchaseController(PurchaseLogic logic, UserManager<AppUser> userManager)
        {
            this.logic = logic;
            this.userManager = userManager;
        }

        [HttpPost("CreatePurchase")]
        public async Task CreatePurchase(string perfumId)
        {
            var userid = await userManager.GetUserAsync(User);
            logic.CreatePurchase(perfumId, userid.Id);
        }

        [HttpGet("GetAllPurchases")]
        public IEnumerable<PurchaseViewDto> GetAllPurchases()
        {
            return logic.GetAllPurchases();
        }
    }
}
