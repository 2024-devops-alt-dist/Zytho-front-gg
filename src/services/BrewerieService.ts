import axios from "axios";
import BrewerieInterface from "../entity/BrewerieInterface";

class BrewerieService {
  public async findAllBreweries(): Promise<BrewerieInterface[]> {
    try {
      const resp = await axios.get("/api/brewerie");
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }

  public async findByIdBrewerie(
    idBrewerie: number
  ): Promise<BrewerieInterface> {
    try {
      const resp = await axios.get("/api/brewerie/" + idBrewerie);
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }
}

export default BrewerieService;
