using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FragranceWebshop_Entities.Entity_Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace FragranceWebshop_Data
{
    public class FragranceWebshopDbContext: IdentityDbContext
    {
        public DbSet<Perfum> perfums { get; set; }
        public DbSet<Purchase> purchases { get; set; }

        public DbSet<AppUser> appUsers { get; set; }

        public FragranceWebshopDbContext(DbContextOptions<FragranceWebshopDbContext> ctx) :base(ctx)
        {
            
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Perfum>()
                .HasMany(p => p.Purchases)
                .WithMany(e => e.PurchasedPerfums);

            base.OnModelCreating(modelBuilder);
        }

    }
}
