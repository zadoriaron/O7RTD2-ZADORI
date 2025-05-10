using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Dtos.PerfumDto
{
    public class PerfumCreateDto
    {
        public string PerfumName { get; set; }
        public string RecommendedSeason { get; set; }
        public int Price { get; set; }
    }
}
