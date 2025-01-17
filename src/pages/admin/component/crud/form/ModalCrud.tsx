import { useState } from "react";
import BeerInterface from "../../../../../entity/BeerInterface";
import BrewerieInterface from "../../../../../entity/BrewerieInterface";
import BrewerieService from "../../../../../services/BrewerieService";
import MultiSelect from "./MultiSelect";
import { CategoryInterface } from "../../../../../entity/CategoryInterface";
import CategoryService from "../../../../../services/CategoryService";
import { returnIdObjectType } from "../../../../../utils/utils";

interface ModalCrudProps<T> {
  type: "add" | "edit" | "delete";
  object: T | null;
  label: string;
  onClose: () => void;
  onAdd: (object: T) => void;
  onEdit: (object: T) => void;
  onDelete: (id_brewerie: number) => void;
}

const ModalCrud = <
  T extends BeerInterface | BrewerieInterface | CategoryInterface
>({
  type,
  object: object,
  label,
  onClose,
  onAdd,
  onEdit,
  onDelete,
}: ModalCrudProps<T>) => {
  const [form, setForm] = useState<T>(() => {
    if (object) {
      return object;
    } else if (type === "add") {
      if (label === "bières") {
        return {
          id_beer: 0,
          id_brewerie: 0,
          id_category: 0,
          id_picture: 1,
          abv: 0,
          color: "",
          created_at: new Date(),
          description: "",
          name: "",
          price: 0,
          updated_at: new Date(),
          type: "beer",
        } as T;
      } else if (label === "brasserie") {
        return {
          name: "",
          country: "",
          type: "brewerie",
          created_at: new Date(),
          updated_at: new Date(),
        } as T;
      }
    }
    return {} as T;
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "add") {
      onAdd(form as T);
    } else if (type === "edit") {
      onEdit(form as T);
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-1/3">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">
            {type === "add" && "Ajouter " + label}
            {type === "edit" && "Mettre à jour " + label}
            {type === "delete" && "Supprimer " + label}
          </h3>
        </div>
        {type !== "delete" ? (
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            {form.type === "beer" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    ABV
                  </label>
                  <input
                    type="number"
                    name="abv"
                    value={form.abv}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Couleur de la bière
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
              </>
            )}
            {form.type === "brewerie" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Pays
                </label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
            )}
            <div>
              {type === "add" && form.type === "beer" && (
                <>
                  <MultiSelect<BrewerieInterface>
                    service={BrewerieService}
                    sendId={(id_brewerie) => {
                      if (id_brewerie) {
                        setForm((prevForm) => ({
                          ...prevForm,
                          id_brewerie: id_brewerie,
                        }));
                      }
                    }}
                    label="Selectionner une brasserie"
                  />
                  <MultiSelect<CategoryInterface>
                    service={CategoryService}
                    sendId={(id_category) => {
                      if (id_category) {
                        setForm((prevForm) => ({
                          ...prevForm,
                          id_category: id_category,
                        }));
                      }
                    }}
                    label="Selectionner une catégorie"
                  />
                </>
              )}
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
              >
                Retour
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                {type === "add" ? "Ajouter" : "Sauvegarder"}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-4">
            <p>Etes vous sûre de vouloir supprimer {label} ?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
              >
                Anuler
              </button>
              <button
                type="button"
                onClick={() => {
                  if (object) onDelete(returnIdObjectType(object));
                }}
                className="px-4 py-2 text-white bg-red-500 rounded-md"
              >
                Supprimer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCrud;
