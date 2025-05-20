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
            var userid = "0";
            logic.CreatePurchase(perfumId, userid);
        }

        [HttpGet("GetAllPurchases")]
        public IEnumerable<PurchaseViewDto> GetAllPurchases()
        {
            return logic.GetAllPurchases();
        }

        [HttpDelete("DeletePurchase")]
        public async Task DeletePurchase(string id)
        {
            var purchase = logic.GetAllPurchases().FirstOrDefault(x => x.purchaseId == id);
            if (purchase != null)
            {
                logic.DeletePurchaseById(id);
            }
            else
            {
                throw new Exception("Purchase not found");
            }
        }
    }
}
