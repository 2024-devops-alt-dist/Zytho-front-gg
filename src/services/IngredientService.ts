import axios from "axios";

class IngredientService {
  public async findByBeerIngerdient(idBeer: number) {
    try {
      const resp = await axios.get("/api/ingredients/" + idBeer);
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }
}

export default IngredientService;
