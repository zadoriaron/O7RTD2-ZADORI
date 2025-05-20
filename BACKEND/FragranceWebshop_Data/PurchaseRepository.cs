using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FragranceWebshop_Entities.Entity_Models;

namespace FragranceWebshop_Data
{
    public class PurchaseRepository
    {
        FragranceWebshopDbContext ctx;

        public PurchaseRepository(FragranceWebshopDbContext ctx)
        {
            this.ctx = ctx;
        }

        public void Create(Purchase purchase)
        {
            ctx.purchases.Add(purchase);
            ctx.SaveChanges();
        }

        public IQueryable<Purchase> GetAll()
        {
            return ctx.purchases;
        }

        public Purchase FindById(string id)
        {
            return ctx.purchases.FirstOrDefault(x => x.PurchaseId == id);
        }

        public void DeleteById(string id)
        {
            Purchase purchase = FindById(id);
            if (purchase != null)
            {
                ctx.purchases.Remove(purchase);
                ctx.SaveChanges();
            }
        }

    }
}
