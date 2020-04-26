using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CovidAPI.Models
{
    public class updateInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public string title {get; set;}
        public string body {get; set;}
        public DateTime date {get; set;}

        public updateInfo() {}

        public updateInfo(string title, string body, DateTime date){
            this.title = title;
            this.body = body;
            this.date = date;
        }
    }
}