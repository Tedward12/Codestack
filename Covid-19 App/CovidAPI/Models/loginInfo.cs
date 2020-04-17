using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CovidAPI.Models
{
    public class loginInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        
        public int id {get; set;}
        public string username {get; set;}
        public string password {get; set;}
    }
}