using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Entity_Models
{
    public class Purchase
    {
        public string PurchaseId { get; set; }
        public string CustomerId { get; set; }
        public DateTime PurchaseDate { get; set; }

        public virtual ICollection<Perfum>? PurchasedPerfums { get; set; }

        public Purchase(string customerid, Perfum purchasedPerfum)
        {
            PurchaseId = Guid.NewGuid().ToString();
            CustomerId = customerid;
            PurchaseDate = DateTime.Now;
            PurchasedPerfums = new List<Perfum>();
            PurchasedPerfums.Add(purchasedPerfum);

        }

        public Purchase()
        {
            
        }

    }
}
