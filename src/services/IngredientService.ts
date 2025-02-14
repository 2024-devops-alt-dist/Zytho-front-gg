import axios from "axios";
import BaseService from "./BaseService";
import { API_BASE_URL } from "../config";
class IngredientService extends BaseService {
  constructor() {
    super(API_BASE_URL + "/api/ingredients/");
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
