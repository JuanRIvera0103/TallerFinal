using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models.Entities
{
    public class Cliente
    {
        [Key]
        public int NumeroCasillero { get; set; }
        [DisplayName("Nombre Completo")]
        [Column("NombreCliente", TypeName = "varchar(50)")]
        [Required]
        public string Nombre { get; set; }

        [DisplayName("Dirección de Entrega")]
        [Column("DireccionEntrega", TypeName = "varchar(50)")]
        [Required]
        public string Direccion { get; set; }
    }
}
