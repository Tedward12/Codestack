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

        public loginInfo() {}

        public loginInfo(int id, string username, string password){
            this.id = id;
            this.username = username;
            this.password = password;
        }
    }
}