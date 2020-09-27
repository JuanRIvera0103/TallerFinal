using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APITallerFinal.Models.Entities
{
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }
        [DisplayName("Correo")]
        [Column("Correo", TypeName = "varchar(50)")]
        [Required]
        public string Correo { get; set; }
        [DisplayName("Contraseña")]
        [Column("Contraseña", TypeName = "varchar(50)")]
        [Required]
        public string Contraseña { get; set; }
    }
}
