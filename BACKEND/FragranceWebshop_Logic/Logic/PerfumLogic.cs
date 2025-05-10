using FragranceWebshop_Data;
using FragranceWebshop_Entities.Entity_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FragranceWebshop_Logic.Helpers;
using FragranceWebshop_Entities.Dtos.PerfumDto;
using AutoMapper;

namespace FragranceWebshop_Logic.Logic
{
    public class PerfumLogic
    {
        PerfumRepository repo;
        DtoProvider dtoProvider;


        public PerfumLogic(PerfumRepository repo, DtoProvider dtoProvider)
        {
            this.repo = repo;
            this.dtoProvider = dtoProvider;
        }

        public void AddPerfum(PerfumCreateDto perfum)
        {
            Perfum Newperfum = dtoProvider.Mapper.Map<Perfum>(perfum);

            if (repo.GetAll().FirstOrDefault(x => x.PerfumName == Newperfum.PerfumName) == null)
            {
                repo.Create(Newperfum);
            }
            else
            {
                throw new Exception("Perfum already exists");
            }
            
        }

        public void DeletePerfumById(string id)
        {
            repo.DeleteById(id);
        }

        public IEnumerable<PerfumViewDto> GetAllPerfum()
        {
            return repo.GetAll().Select(x =>
            dtoProvider.Mapper.Map<PerfumViewDto>(x));
        }

        public void UpdatePerfum(string id, int price)
        { 
            Perfum oldPerfum = repo.FindById(id);
            oldPerfum.Price = price;
            repo.UpdatePerfum(oldPerfum);

        }

        public IEnumerable<PerfumViewDto> GetPerfumesBySeason(string season)
        {
            return repo.GetAll().Where(x => x.RecommendedSeason == season).Select(x =>
            dtoProvider.Mapper.Map<PerfumViewDto>(x));
        }

        public IEnumerable<PerfumViewDto> GetPerfumesByPriceRange(int min, int max)
        {
           return repo.GetAll().Where(x => x.Price >= min && x.Price <= max).Select(x =>
           dtoProvider.Mapper.Map<PerfumViewDto>(x));
        }


    }
}
