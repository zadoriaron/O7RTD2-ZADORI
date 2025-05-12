using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FragranceWebshop_Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateImg : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "perfums",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "perfums");
        }
    }
}
