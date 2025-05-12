using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Dtos.PerfumDto
{
    public class PerfumViewDto
    {
        public string PerfumId { get; set; }
        public string PerfumName {  get; set; }
        public string RecommendedSeason { get; set; }
        public int Price { get; set; }
        public int PurchaseCount { get; set; }

        public string ImageUrl { get; set; }
    }
}
