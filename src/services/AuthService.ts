import axios from "axios";
import { API_BASE_URL } from "../config";
class AuthService {
  private apiUrl: string = API_BASE_URL + "/api/auth/";

  public async login<T>(newObject: T): Promise<T> {
    try {
      const resp = await axios.post(
        API_BASE_URL + this.apiUrl + "login",
        newObject
      );
      console.log(resp);

      return resp.data as T;
    } catch {
      throw new Error("Erreur lors de la connexion.");
    }
  }
}
export default AuthService;
