using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Api.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UserManager<UsuarioIdentity> _userManager;
        private readonly SignInManager<UsuarioIdentity> _signinManager;
        public UsuariosController(UserManager<UsuarioIdentity> userManager, SignInManager<UsuarioIdentity> signinManager)
        {
            _userManager = userManager;
            _signinManager = signinManager;
        }
        [HttpPost]
        [Route("Registro")]
        public async Task<Object> PostUsuario(UsuarioModel usuarioModel)
        {
            UsuarioIdentity usuario = new UsuarioIdentity()
            {
                UserName = usuarioModel.NombreUsuario,
                Email = usuarioModel.Email
                
            };
            try
            {
                var result = await _userManager.CreateAsync(usuario, usuarioModel.Password).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception)
            {

                throw;
            }
            

        }
    }
}
