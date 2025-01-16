import React, { useEffect, useState } from "react";
import BeerInterface from "../../../entity/BeerInterface";
import BeerService from "../../../services/BeerService";

const CrudBeer = () => {
  const [beers, setBeers] = useState<BeerInterface[]>([]);
  const [beerService] = useState(new BeerService());

  const [selectedBeer, setSelectedBeer] = useState<BeerInterface | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "add" | "edit" | "delete" | undefined
  >(undefined); // Limite les valeurs à "add", "edit" ou "delete"

  useEffect(() => {
    beerService
      .findAllBeers()
      .then((data: BeerInterface[]) => {
        setBeers(data);
      })
      .catch((error) => {
        console.error("Error fetching beers:", error);
      });
  }, [beerService]);

  const openModal = (
    type: "add" | "edit" | "delete",
    beer: BeerInterface | null = null
  ) => {
    setModalType(type);
    setSelectedBeer(beer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBeer(null);
  };

  const handleAddBeer = (beer: BeerInterface) => {
    setBeers([...beers, beer]);
    closeModal();
  };

  const handleEditBeer = (updatedBeer: BeerInterface) => {
    beerService
      .updateBeer(updatedBeer.id_beer, updatedBeer)
      .then(() => {
        setBeers(
          beers.map((beer) =>
            beer.id_beer === updatedBeer.id_beer ? updatedBeer : beer
          )
        );
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteBeer = (id_beer: number) => {
    setBeers(beers.filter((beer) => beer.id_beer !== id_beer));
    closeModal();
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Manage Beers</h2>
          <button
            onClick={() => openModal("add")}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Beer
          </button>
        </div>
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                ABV
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Color
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {beers.map((beer) => (
              <tr key={beer.id_beer} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {beer.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {beer.abv}%
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {beer.color}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {beer.description}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => openModal("edit", beer)}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openModal("delete", beer)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && modalType && (
        <Modal
          type={modalType}
          beer={selectedBeer}
          onClose={closeModal}
          onAdd={handleAddBeer}
          onEdit={handleEditBeer}
          onDelete={handleDeleteBeer}
        />
      )}
    </div>
  );
};

const Modal = ({
  type,
  beer,
  onClose,
  onAdd,
  onEdit,
  onDelete,
}: {
  type: "add" | "edit" | "delete";
  beer: BeerInterface | null;
  onClose: () => void;
  onAdd: (beer: BeerInterface) => void;
  onEdit: (beer: BeerInterface) => void;
  onDelete: (id_beer: number) => void;
}) => {
  const [form, setForm] = useState<BeerInterface>(
    beer || {
      id_beer: 0,
      id_brewerie: 0,
      id_category: 0,
      id_picture: 0,
      abv: 0,
      color: "",
      created_at: new Date(),
      description: "",
      name: "",
      price: 0,
      updated_at: new Date(),
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "add") {
      onAdd(form);
    } else if (type === "edit") {
      onEdit(form);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-1/3">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">
            {type === "add" && "Add Beer"}
            {type === "edit" && "Edit Beer"}
            {type === "delete" && "Delete Beer"}
          </h3>
        </div>
        {type !== "delete" ? (
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
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
                Color
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
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                {type === "add" ? "Add" : "Save"}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-4">
            <p>Are you sure you want to delete this beer?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => beer && onDelete(beer.id_beer)}
                className="px-4 py-2 text-white bg-red-500 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudBeer;
