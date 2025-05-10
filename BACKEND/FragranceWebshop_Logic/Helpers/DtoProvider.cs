using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FragranceWebshop_Data;
using FragranceWebshop_Entities.Dtos.PerfumDto;
using FragranceWebshop_Entities.Dtos.PurchaseDto;
using FragranceWebshop_Entities.Dtos.UserDto;
using FragranceWebshop_Entities.Entity_Models;
using Microsoft.AspNetCore.Identity;

namespace FragranceWebshop_Logic.Helpers
{
    public class DtoProvider
    {
        public Mapper Mapper { get; }

        public DtoProvider(UserManager<AppUser> userManager)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<AppUser, UserViewDto>()
                .AfterMap((src,dest) =>
                {
                    dest.IsAdmin = userManager.IsInRoleAsync(src, "Admin").Result;
                });

                cfg.CreateMap<PerfumCreateDto, Perfum>();
                cfg.CreateMap<Perfum, PerfumViewDto>()
                .AfterMap((src, dest) =>
                {

                    dest.PurchaseCount = src.Purchases?.Count > 0 ? src.Purchases.Count() : 0;
                });

                cfg.CreateMap<Purchase, PurchaseViewDto>()
                .AfterMap((src, dest) =>
                {
                    dest.PurchasedPerfum = src.PurchasedPerfums?.FirstOrDefault()?.PerfumName;

                });

            });


            Mapper = new Mapper(config);
        }

    }
}
