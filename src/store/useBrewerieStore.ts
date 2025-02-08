import { create } from "zustand";
import {
  BrewerieInterface,
  BrewerieStoreInterface,
} from "../entity/BrewerieInterface";
import BrewerieService from "../services/BrewerieService";

const brewerieService = new BrewerieService();

export const useBrewerieStore = create<BrewerieStoreInterface>((set, get) => ({
  breweries: [],
  /**
   * Récupère toute les brasserie depuis le service et set le store
   */
  fetchBreweries: () => {
    try {
      brewerieService
        .findAll()
        .then((data) => set({ breweries: data as BrewerieInterface[] }));
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Récupère une brasserie spécifique avec sont ID depuis le service et set le store
   * @param id de la brasserie
   */
  fetchBrewerieById: (id: number) => {
    try {
      brewerieService.findById(id).then((res) => {
        set((state) => ({
          breweries: [...state.breweries, res as BrewerieInterface],
        }));
      });
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * Cette fonction vérifie si une brasserie éxiste déja dans le store et la retourne
   * @param id de la brasserie
   * @returns une brasserie spécifique avec sont ID
   */
  getBrewerieById: (id: number): BrewerieInterface | null => {
    return (
      get().breweries.find((b: BrewerieInterface) => b.id_brewerie === id) ||
      null
    );
  },
}));
