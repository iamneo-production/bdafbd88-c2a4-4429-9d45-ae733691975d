<<<<<<< HEAD
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.Extensions.Hosting;
=======
var builder = WebApplication.CreateBuilder(args);
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f

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

<<<<<<< HEAD
app.Run();

=======
app.Run();
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
