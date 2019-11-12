namespace MiniRestaurantApp.API.Models
{
    public class RestaurantData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FiscalName { get; set; }
        public string BasicUnit { get; set; }
        public string SalesCategory { get; set; }
        public string SalesDept { get; set; }
        public int Vat { get; set; }
        public int BasicPrice { get; set; }
    }
}