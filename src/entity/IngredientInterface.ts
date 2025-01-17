export interface IngredientInterface {
  id_ingredient: number;
  name: string;
  description: string;
  type: "beer" | "brewerie" | "category";
  created_at: Date;
  updated_at: Date;
}
