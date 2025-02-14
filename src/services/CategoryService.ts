import BaseService from "./BaseService";
import { API_BASE_URL } from "../config";
class CategoryService extends BaseService {
  constructor() {
    super(API_BASE_URL + "/api/categories/");
  }
}

export default CategoryService;
