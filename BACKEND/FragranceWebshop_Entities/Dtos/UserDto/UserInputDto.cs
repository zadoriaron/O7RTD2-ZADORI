using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Dtos.UserDto
{
    public class UserInputDto
    {
        [MinLength(6)]
        public required string UserName { get; set; } = "";

        [MinLength(6)]
        public required string Password { get; set; } = "";


        public required string FirstName { get; set; } = "";


        public required string LastName { get; set; } = "";

    }
}
