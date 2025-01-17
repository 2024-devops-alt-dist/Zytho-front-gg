export default interface BeerInterface {
  id_beer: number;
  id_brewerie: number;
  id_category: number;
  id_picture: number;
  name: string;
  abv: number;
  color: string;
  description: string;
  price: number;
  type: "beer";
  created_at: Date;
  updated_at: Date;
}
