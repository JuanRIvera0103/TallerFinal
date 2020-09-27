using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace APITallerFinal.Migrations
{
    public partial class DbInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "clientes",
                columns: table => new
                {
                    NumeroCasillero = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NombreCliente = table.Column<string>(type: "varchar(50)", nullable: false),
                    DireccionEntrega = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clientes", x => x.NumeroCasillero);
                });

            migrationBuilder.CreateTable(
                name: "estados",
                columns: table => new
                {
                    IdEstado = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NombreEstado = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_estados", x => x.IdEstado);
                });

            migrationBuilder.CreateTable(
                name: "libras",
                columns: table => new
                {
                    IdLibra = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ValorLibra = table.Column<int>(nullable: false),
                    FechaInicio = table.Column<string>(type: "varchar(50)", nullable: true),
                    FechaFinalizacion = table.Column<string>(type: "varchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_libras", x => x.IdLibra);
                });

            migrationBuilder.CreateTable(
                name: "paquetes",
                columns: table => new
                {
                    Codigo = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Peso = table.Column<float>(nullable: false),
                    CasilleroCliente = table.Column<int>(type: "int", nullable: false),
                    Estado = table.Column<int>(nullable: false),
                    Tracking = table.Column<string>(nullable: false),
                    EmpresaTransportadora = table.Column<int>(type: "int", nullable: false),
                    Tipo = table.Column<int>(nullable: false),
                    GuiaColombia = table.Column<string>(type: "varchar(50)", nullable: false),
                    Valor = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_paquetes", x => x.Codigo);
                });

            migrationBuilder.CreateTable(
                name: "tipoMercancias",
                columns: table => new
                {
                    IdTipoMercancia = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TipoMercancia = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tipoMercancias", x => x.IdTipoMercancia);
                });

            migrationBuilder.CreateTable(
                name: "transportadoras",
                columns: table => new
                {
                    IdTransportadora = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NombreTransportadora = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_transportadoras", x => x.IdTransportadora);
                });

            migrationBuilder.CreateTable(
                name: "usuarios",
                columns: table => new
                {
                    IdUsuario = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Correo = table.Column<string>(type: "varchar(50)", nullable: false),
                    Contraseña = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usuarios", x => x.IdUsuario);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "clientes");

            migrationBuilder.DropTable(
                name: "estados");

            migrationBuilder.DropTable(
                name: "libras");

            migrationBuilder.DropTable(
                name: "paquetes");

            migrationBuilder.DropTable(
                name: "tipoMercancias");

            migrationBuilder.DropTable(
                name: "transportadoras");

            migrationBuilder.DropTable(
                name: "usuarios");
        }
    }
}
