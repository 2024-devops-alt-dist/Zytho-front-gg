export default interface BeerInterface {
  id_beer: number;
  id_brewerie: number;
  id_category: number;
  category_name: string;
  brewery_name: string;
  id_picture: number;
  name: string;
  abv: number;
  color: string;
  description: string;
  price: number;
  category: string;
  type: "beer";
  created_at: Date;
  updated_at: Date;
}
