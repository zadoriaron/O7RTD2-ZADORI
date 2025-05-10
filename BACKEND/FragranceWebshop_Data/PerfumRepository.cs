using FragranceWebshop_Entities.Entity_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Data
{
    public class PerfumRepository
    {
        FragranceWebshopDbContext ctx;

        public PerfumRepository(FragranceWebshopDbContext ctx)
        {
            this.ctx = ctx;
        }

        //ide jönnek majd a repository metódusok amik a logic ad majd át 

        public void Create(Perfum perfum)
        {
            ctx.perfums.Add(perfum);
            ctx.SaveChanges();
        }

        public Perfum FindById(string id)
        { 
            return ctx.perfums.FirstOrDefault(p => p.PerfumId == id);
        }

        public void DeleteById(string id)
        {
            Perfum perfum = FindById(id);
            ctx.perfums.Remove(perfum);
            ctx.SaveChanges();
        }

        public IQueryable<Perfum> GetAll()
        {
            return ctx.perfums;
        }

        public void UpdatePerfum(Perfum old)
        {
            ctx.perfums.Update(old);
            ctx.SaveChanges();
        }
    }
}
