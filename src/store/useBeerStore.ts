import { create } from "zustand";
import BeerInterface from "../entity/BeerInterface";
import BeerService from "../services/BeerService";

interface BeerStoreInterface {
  beersStore: BeerInterface[];
  fetchBeers: () => void;
  fetchBeerById: (id: number) => void;
  getBeerById: (id: number) => BeerInterface | null;
}
const beerService = new BeerService();

export const useBeerStore = create<BeerStoreInterface>((set, get) => ({
  beersStore: [],
  /**
   * Récupère toute les bière depuis le service et set le store
   */
  fetchBeers: () => {
    try {
      beerService
        .findAll()
        .then((data) => set({ beersStore: data as BeerInterface[] }));
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Récupère une bière spécifique avec sont ID depuis le service et set le store
   * @param id de la bière
   */
  fetchBeerById: (id: number) => {
    try {
      beerService.findById(id).then((res) => {
        set((state) => ({
          beersStore: [...state.beersStore, res as BeerInterface],
        }));
      });
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * Cette fonction vérifie si une bière éxiste déja dans le store et la retourne
   * @param id de la bière
   * @returns une bière spécifique avec sont ID
   */
  getBeerById: (id: number): BeerInterface | null => {
    return (
      get().beersStore.find((b: BeerInterface) => b.id_beer === id) || null
    );
  },
}));
