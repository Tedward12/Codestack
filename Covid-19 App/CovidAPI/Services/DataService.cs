using System;
using System.Collections.Generic;
using System.Linq;
using CovidAPI.Models;

namespace CovidAPI.Services
{
    public class DataService
    {
        public List<updateInfo> fixedUpdateData = new List<updateInfo>{
            new updateInfo{
                title = "Covid-19 patients recovering quickly after getting experimental drug remdesivir",
                body = "Covid-19 patients who are getting an experimental drug called remdesivir have been recovering quickly, with most going home in days, STAT News reported Thursday after it obtained a video of a conversation about the trial.",
                date = DateTime.Now.Date
            }
        };

        public List<loginInfo> fixedLoginData = new List<loginInfo>{
            new loginInfo{
            id=1,
            username = "Tedward",
            password = "password"
            }
        };

        public IEnumerable<updateInfo> GetUpdate(){
            return fixedUpdateData;
        }

        public IEnumerable<loginInfo> GetLogin(){
            return fixedLoginData;
        }
    }
}