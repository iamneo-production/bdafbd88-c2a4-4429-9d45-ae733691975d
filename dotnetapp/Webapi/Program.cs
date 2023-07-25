<<<<<<< HEAD
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
=======
<<<<<<< HEAD
>>>>>>> 7159bf44cc39b8d8af92fc9321edd24026ad0a45
>>>>>>> bbe57bd1ad16e79675a8a6fa883f3d3f5fd9b9e8
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyOrigin() ;
        });
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 42a1df4aa7e60bdeac85759d215b4ca7fd16040d
>>>>>>> 7159bf44cc39b8d8af92fc9321edd24026ad0a45
>>>>>>> bbe57bd1ad16e79675a8a6fa883f3d3f5fd9b9e8

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

app.MapControllers();

app.Run();
=======
>>>>>>> 7159bf44cc39b8d8af92fc9321edd24026ad0a45
>>>>>>> bbe57bd1ad16e79675a8a6fa883f3d3f5fd9b9e8
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.MapControllers();

<<<<<<< HEAD
app.Run();
=======
<<<<<<< HEAD
app.Run();
=======
=======
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyOrigin() ;
        });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.MapControllers();

app.Run();


>>>>>>> 68c33ef6a8d67ca4dd708c1bbe958082c80ab738
app.Run();
>>>>>>> 42a1df4aa7e60bdeac85759d215b4ca7fd16040d
>>>>>>> 7159bf44cc39b8d8af92fc9321edd24026ad0a45
>>>>>>> bbe57bd1ad16e79675a8a6fa883f3d3f5fd9b9e8
