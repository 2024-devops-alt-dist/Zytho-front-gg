import { useEffect, useState } from "react";
import BeerInterface from "../../../../entity/BeerInterface";
import ModalCrud from "./ModalCrud";
import { ServiceInterface } from "../../../../entity/ServiceInterface";
import BrewerieInterface from "../../../../entity/BrewerieInterface";

interface CrudBeerProps<T> {
  label: string;
  service: new () => ServiceInterface<T>;
  objects: T[];
  changeObjects: (objects: T[]) => void;
}

const CrudDataValue = <T extends BeerInterface | BrewerieInterface>({
  label,
  service,
  objects,
  changeObjects,
}: CrudBeerProps<T>) => {
  const [selectedObject, setSelectedObject] = useState<T | null>(null);
  const [instanceService] = useState(new service());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "add" | "edit" | "delete" | undefined
  >(undefined); // Limite les valeurs à "add", "edit" ou "delete"

  useEffect(() => {
    instanceService
      .findAll()
      .then((data) => {
        changeObjects(data as T[]);
      })
      .catch((error) => {
        console.error("Error fetching objects:", error);
      });
  }, [instanceService]);

  function isBeerInterface(obj: any): obj is BeerInterface {
    return "id_beer" in obj; // Vérifie si "id_beer" existe
  }

  const openModal = (type: "add" | "edit" | "delete", obj: T | null = null) => {
    setModalType(type);
    setSelectedObject(obj);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedObject(null);
  };

  const handleAddBeer = (obj: T) => {
    console.log(obj);

    instanceService
      .create(obj)
      .then(() => {
        changeObjects([...objects, obj]);
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditBeer = (updatedObject: T) => {
    instanceService
      .update(
        isBeerInterface(updatedObject)
          ? updatedObject.id_beer
          : updatedObject.id_brewerie,
        updatedObject
      )
      .then(() => {
        // Mettre à jour les objets dans la liste
        changeObjects(
          objects.map((obj) => {
            if (isBeerInterface(obj) && isBeerInterface(updatedObject)) {
              return obj.id_beer === updatedObject.id_beer
                ? updatedObject
                : obj;
            } else {
              return obj.id_brewerie === updatedObject.id_brewerie
                ? updatedObject
                : obj;
            }
          })
        );
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteBeer = (id_object: number) => {
    instanceService
      .deleteById(id_object)
      .then(() => {
        changeObjects(
          objects.filter((obj) =>
            isBeerInterface(obj)
              ? obj.id_beer !== id_object
              : obj.id_brewerie !== id_object
          )
        );
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">CRUD {label}</h2>
          <button
            onClick={() => openModal("add")}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Ajouter {label}
          </button>
        </div>
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              {label === "bières" ? (
                <>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    ABV
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Color
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Description
                  </th>
                </>
              ) : (
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Pays
                </th>
              )}
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {objects.map((obj) => {
              return (
                <>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {obj.name}
                    </td>
                    {isBeerInterface(obj) ? (
                      <>
                        <td className="border border-gray-300 px-4 py-2">
                          {obj.abv}%
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {obj.color}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {obj.description}
                        </td>
                      </>
                    ) : (
                      <td className="border border-gray-300 px-4 py-2">
                        {obj.country}
                      </td>
                    )}
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button
                        onClick={() => openModal("edit", obj)}
                        className="text-blue-500 hover:underline mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal("delete", obj)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {isModalOpen && modalType && (
        <ModalCrud
          type={modalType}
          object={selectedObject}
          onClose={closeModal}
          onAdd={handleAddBeer}
          onEdit={handleEditBeer}
          onDelete={handleDeleteBeer}
          label={label}
        />
      )}
    </div>
  );
};

export default CrudDataValue;
