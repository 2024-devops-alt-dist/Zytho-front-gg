import axios from "axios";
import BaseService from "./BaseService";
import { API_BASE_URL } from "../config";
class FilterSearchService extends BaseService {
  constructor() {
    super(API_BASE_URL + "/api/search/");
  }

  public async findByBeerByType(id_types: number[], type: string) {
    try {
      const resp = await axios.post("/api/search/", { id_types, type });
      console.log(resp);

      return resp.data.beers;
    } catch {
      throw new Error("Erreur lors de la récupération des bières.");
    }
  }
}

export default FilterSearchService;
