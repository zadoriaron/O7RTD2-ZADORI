using FragranceWebshop_Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FragranceWebshop_Entities.Entity_Models;
using FragranceWebshop_Entities.Dtos.PurchaseDto;
using FragranceWebshop_Logic.Helpers;
using FragranceWebshop_Entities.Dtos.PerfumDto;

namespace FragranceWebshop_Logic.Logic
{
    public class PurchaseLogic
    {
        PurchaseRepository repo;
        PerfumRepository perfumRepo;
        DtoProvider dtoProvider;

        public PurchaseLogic(PurchaseRepository repo, PerfumRepository perfumRepo, DtoProvider dtoProvider)
        {
            this.repo = repo;
            this.perfumRepo = perfumRepo;
            this.dtoProvider = dtoProvider;
        }

        public void CreatePurchase(string perfumId, string userid)
        {
            Perfum perfum = perfumRepo.FindById(perfumId);
            Purchase purchase = new Purchase(userid, perfum);
            repo.Create(purchase);
        }

        public IEnumerable<PurchaseViewDto> GetAllPurchases()
        {
            return repo.GetAll().Select(x => dtoProvider.Mapper.Map<PurchaseViewDto>(x));

        }


    }
}
