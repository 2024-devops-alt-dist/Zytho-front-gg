import axios from "axios";
import BeerInterface from "../entity/BeerInterface";

class BeerService {
  public async findAllBeers(): Promise<BeerInterface[]> {
    try {
      const resp = await axios.get("/api/beers");
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }
}

export default BeerService;
