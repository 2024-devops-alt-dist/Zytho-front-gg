import axios from "axios";
import BeerInterface from "../entity/BeerInterface";

class BeerService {
  public async findAll(): Promise<BeerInterface[]> {
    try {
      const resp = await axios.get("/api/beers");
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }

  public async findById(idBeer: number): Promise<BeerInterface> {
    try {
      const resp = await axios.get("/api/beers/" + idBeer);
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }

  public async update(
    idBeer: number,
    updateBeer: Partial<BeerInterface>
  ): Promise<BeerInterface> {
    try {
      const resp = await axios.patch("/api/beers/" + idBeer, updateBeer);
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la mise à jour de la bière.");
    }
  }
  public async create(newBeer: BeerInterface): Promise<BeerInterface> {
    console.log("Envoi de la requête à /api/beers avec le payload :", newBeer);
    try {
      const resp = await axios.post("/api/beers/", newBeer);
      return resp.data;
    } catch (error) {
      console.log(error);

      throw new Error("Erreur lors de la création de la bière.");
    }
  }

  public async deleteById(idBeer: number): Promise<BeerInterface> {
    try {
      const resp = await axios.delete("/api/beers/" + idBeer);
      return resp.data;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }
}

export default BeerService;
