using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Dtos.UserDto
{
    public class LoginResultDto
    {
        public string Token { get; set; } = "";

        public DateTime Expiration { get; set; }
    }
}
