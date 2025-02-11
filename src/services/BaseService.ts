import axios from "axios";

class BaseService {
  private apiUrl: string;
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
  public async findAll<T>(): Promise<T[]> {
    try {
      const resp = await axios.get(this.apiUrl);
      return resp.data as T[];
    } catch {
      throw new Error("Erreur lors de la récupération de la ressource.");
    }
  }

  public async findById<T>(id: number): Promise<T> {
    try {
      const resp = await axios.get(this.apiUrl + id);
      return resp.data as T;
    } catch {
      throw new Error("Erreur lors de la récupération des ressources.");
    }
  }

  public async update<T>(id: number, updateObject: Partial<T>): Promise<T> {
    try {
      const resp = await axios.patch(this.apiUrl + id, updateObject);
      return resp.data as T;
    } catch {
      throw new Error("Erreur lors de la mise à jour de la ressource.");
    }
  }

  public async create<T>(newObject: T): Promise<T> {
    try {
      const resp = await axios.post(this.apiUrl, newObject);
      return resp.data as T;
    } catch {
      throw new Error("Erreur lors de la création de la ressource.");
    }
  }

  public async deleteById<T>(id: number): Promise<T> {
    try {
      const resp = await axios.delete(this.apiUrl + id);
      return resp.data as T;
    } catch {
      throw new Error("Erreur lors de la récupération des ressources.");
    }
  }
}

export default BaseService;
