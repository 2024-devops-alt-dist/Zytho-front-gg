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

  public async findByIdBeer(idBeer: number): Promise<BeerInterface> {
    try {
      const resp = await axios.get("/api/beers/" + idBeer);
      console.log(resp.data);

      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }
}

export default BeerService;
