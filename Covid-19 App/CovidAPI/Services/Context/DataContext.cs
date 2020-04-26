using CovidAPI.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System;

namespace CovidAPI.Services.Context
{
    public class DataContext:DbContext
    {
        public DbSet<loginInfo> LoginInfoSql {get; set;}
        public DbSet<updateInfo> UpdateInfoSql {get; set;}

        public DataContext(DbContextOptions<DataContext> options): base(options) {}

        protected override void OnModelCreating(ModelBuilder builder){
            base.OnModelCreating(builder);
            SeedData(builder);
        }

        private void SeedData(ModelBuilder builder){
            
            var loginData = new List<loginInfo> {
                new loginInfo(1,"Tedward","password")
            };

            var updateData = new List<updateInfo> {
                new updateInfo("Covid-19 patients recovering quickly after getting experimental drug remdesivir",
                "Covid-19 patients who are getting an experimental drug called remdesivir have been recovering quickly, with most going home in days, STAT News reported Thursday after it obtained a video of a conversation about the trial.",
                DateTime.Now.Date)
            };
            builder.Entity<loginInfo>().HasData(loginData);
            builder.Entity<loginInfo>().HasData(updateData);
        }
    }
}