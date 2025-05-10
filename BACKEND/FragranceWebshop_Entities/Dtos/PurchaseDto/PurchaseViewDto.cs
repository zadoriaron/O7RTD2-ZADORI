using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Dtos.PurchaseDto
{
    public class PurchaseViewDto
    {
        public string purchaseId { get; set; }
        public string PurchasedPerfum { get; set; }
        public DateTime PurchaseDate { get; set; }



    }
}
