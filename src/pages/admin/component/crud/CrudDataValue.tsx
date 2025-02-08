import { useEffect, useState } from "react";
import BeerInterface from "../../../../entity/BeerInterface";
import ModalCrud from "./form/ModalCrud";
import { ServiceInterface } from "../../../../entity/ServiceInterface";
import BrewerieInterface from "../../../../entity/BrewerieInterface";
import { CategoryInterface } from "../../../../entity/CategoryInterface";
import FormCrud from "./form/FormCrud";
import { returnIdObjectType } from "../../../../utils/utils";

interface CrudDataValueProps<T> {
  label: "brasserie" | "bières" | "categorie";
  service: new () => ServiceInterface<T>;
  objects: T[];
  changeObjects: (objects: T[]) => void;
}

const CrudDataValue = <
  T extends BeerInterface | BrewerieInterface | CategoryInterface
>({
  label,
  service,
  objects,
  changeObjects,
}: CrudDataValueProps<T>) => {
  const [instanceService] = useState(new service());

  const [selectedObject, setSelectedObject] = useState<T | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "add" | "edit" | "delete" | undefined
  >(undefined);

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

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedObject(null);
  };

  const openModal = (type: "add" | "edit" | "delete", obj: T | null = null) => {
    setModalType(type);
    setSelectedObject(obj);
    setIsModalOpen(true);
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
      .update(returnIdObjectType(updatedObject), updatedObject)
      .then(() => {
        // Mettre à jour les objets dans la liste
        changeObjects(
          objects.map((obj) => {
            return returnIdObjectType(obj) === returnIdObjectType(updatedObject)
              ? updatedObject
              : obj;
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
          objects.filter((obj) => returnIdObjectType(obj) !== id_object)
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
          <FormCrud objects={objects} openModal={openModal} />
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
