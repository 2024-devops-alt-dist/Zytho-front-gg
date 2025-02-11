import axios from "axios";

class AuthService {
  private apiUrl: string = "/api/auth/";

  public async login<T>(newObject: T): Promise<T> {
    try {
      const resp = await axios.post(this.apiUrl + "login", newObject);
      console.log(resp);

      return resp.data as T;
    } catch {
      throw new Error("Erreur lors de la connexion.");
    }
  }
}
export default AuthService;
