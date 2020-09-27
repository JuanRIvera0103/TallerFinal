

using APITallerFinal.Models.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APITallerFinal.Model.DAL
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)    
        {
            
        }
        public DbSet<Cliente> clientes { get; set; }
        public DbSet<Estado> estados{ get; set; }
        public DbSet<Libra> libras { get; set; }
        public DbSet<Paquete> paquetes { get; set; }
        public DbSet<Usuario> usuarios { get; set; }
        public DbSet<TipoMercancia> tipoMercancias { get; set; }
        public DbSet<Transportadora> transportadoras { get; set; }
    }
}
