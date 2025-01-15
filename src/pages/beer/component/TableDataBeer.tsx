import BeerInterface from "../../../entity/BeerInterface";

interface TableDataBeerProps {
  beer: BeerInterface;
  element?: "card" | "detail";
}

const TableDataBeer = ({ beer }: TableDataBeerProps) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-md">
          <tbody>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700 border-b border-gray-300">
                Color
              </td>
              <td className="px-4 py-2 text-gray-600 border-b">{beer.color}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700 border-b border-gray-300">
                Abv
              </td>
              <td className="px-4 py-2 text-gray-600 border-b">{beer.abv}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-gray-700 border-b border-gray-300">
                Type
              </td>
              <td className="px-4 py-2 text-gray-600 border-b">
                {beer.id_category}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDataBeer;
