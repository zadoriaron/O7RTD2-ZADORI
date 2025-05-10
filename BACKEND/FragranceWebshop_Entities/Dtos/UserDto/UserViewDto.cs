﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FragranceWebshop_Entities.Dtos.UserDto
{
    public class UserViewDto
    {
        public string Id { get; set; } = "";

        public string UserName { get; set; } = "";

        public bool IsAdmin { get; set; }

        public string FirstName { get; set; } = "";

        public string LastName { get; set; } = "";
    }
}
