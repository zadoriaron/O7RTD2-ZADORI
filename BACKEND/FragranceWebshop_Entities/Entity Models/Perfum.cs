using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Entity_Models
{
    public class Perfum
    {
        public string PerfumId { get; set; }
        public string PerfumName { get; set; }
        public string RecommendedSeason { get; set; }
        public int Price { get; set; }

        public virtual ICollection<Purchase>? Purchases { get; set; }

        public Perfum(string perfumName, string recommendedSeason, int price)
        {
            PerfumId = Guid.NewGuid().ToString();
            PerfumName = perfumName;
            RecommendedSeason = recommendedSeason;
            Price = price;

        }

        public Perfum()
        {
            
        }
    }
}
