using System.Collections.Generic;
using CovidAPI.Models;
using CovidAPI.Services.Context;

namespace CovidAPI.Services
{
    public class DataServiceSql
    {
         private readonly DataContext _context;

        public DataServiceSql(DataContext context){
            _context = context;
        }

         //Create
        public int InsertLoginInfo(loginInfo login){
            var loginItem = _context.Add(login);
            _context.SaveChanges();
            return loginItem.Entity.id;
        }

        //Read
        public IEnumerable<loginInfo> GetLoginInfo(){
            return _context.LoginInfoSql;
        }
    }
}