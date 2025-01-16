import BaseService from "./BaseService";

class BeerService extends BaseService {
  constructor() {
    super("/api/beers/");
  }
}

export default BeerService;
