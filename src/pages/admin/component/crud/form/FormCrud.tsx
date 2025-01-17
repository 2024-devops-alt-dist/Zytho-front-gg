import BeerInterface from "../../../../../entity/BeerInterface";
import BrewerieInterface from "../../../../../entity/BrewerieInterface";
import { CategoryInterface } from "../../../../../entity/CategoryInterface";
import { returnTypeObjects } from "../../../../../utils/utils";

interface FormCrudProps<T> {
  objects: T[];
  openModal: (type: "add" | "edit" | "delete", obj: T) => void;
}
const FormCrud = <
  T extends BeerInterface | BrewerieInterface | CategoryInterface
>({
  objects,
  openModal,
}: FormCrudProps<T>) => {
  const type = returnTypeObjects(objects);

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          {type.has("beer") && (
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
          )}
          {type.has("brewerie") && (
            <th className="border border-gray-300 px-4 py-2 text-left">Pays</th>
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
                <td className="border border-gray-300 px-4 py-2">{obj.name}</td>
                {obj.type === "beer" && (
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
                )}
                {obj.type === "brewerie" && (
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
  );
};

export default FormCrud;
