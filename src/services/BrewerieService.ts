import BaseService from "./BaseService";
import { API_BASE_URL } from "../config";
class BrewerieService extends BaseService {
  constructor() {
    super(API_BASE_URL + "/api/brewerie/");
  }
}

export default BrewerieService;
