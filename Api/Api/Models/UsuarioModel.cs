using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class UsuarioModel
    {
        [Column(TypeName = "varchar(20)")]
        public string NombreUsuario { get; set;}
        [Column(TypeName = "varchar(40)")]
        public string Email { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Password { get; set; }
    }
}
