import { API_BASE_URL } from "../config";
import BaseService from "./BaseService";

class BeerService extends BaseService {
  constructor() {
    super(API_BASE_URL + "/api/beers/");
  }
}

export default BeerService;
