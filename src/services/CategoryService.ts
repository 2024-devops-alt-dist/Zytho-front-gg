import BaseService from "./BaseService";

class CategoryService extends BaseService {
  constructor() {
    super("/api/categories/");
  }
}

export default CategoryService;
