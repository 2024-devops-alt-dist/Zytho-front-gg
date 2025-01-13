export default interface BeerInterface {
  id_beer: number;
  id_brewerie: number;
  id_category: number;
  id_picture: number;
  abv: number;
  color: string;
  created_at: Date;
  description: string;
  name: string;
  price: number;
  updated_at: Date;
}
