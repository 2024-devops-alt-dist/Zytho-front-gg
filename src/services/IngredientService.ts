import axios from "axios";
import BaseService from "./BaseService";

class IngredientService extends BaseService {
  constructor() {
    super("/api/ingredients/");
  }
  public async findByBeerIngerdient(id: number) {
    try {
      const resp = await axios.get("/api/ingredients/" + id);
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }
}

export default IngredientService;
