import BaseService from "./BaseService";

class BrewerieService extends BaseService {
  constructor() {
    super("/api/brewerie/");
  }
}

export default BrewerieService;
