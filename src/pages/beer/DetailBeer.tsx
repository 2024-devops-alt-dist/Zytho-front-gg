import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerInterface from "../../entity/BeerInterface";
import BeerService from "../../services/BeerService";
import { Button } from "primereact/button";

const DetailBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<BeerInterface>();
  const [beersService] = useState(new BeerService());

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const beer = await beersService.findByIdBeer(Number(id));
        setBeer(beer);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBeer();
  }, [beersService, id]);

  return (
    beer && (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="w-full bg-gray-200 flex items-center justify-center p-4">
              <img
                className="w-auto object-contain"
                src="/public/assets/picture_big/beer-1.jpg"
                alt={beer.name}
              />
            </div>
            {/* Details Section */}
            <div className="md:w-2/3 p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {beer.name}
              </h1>
              <p className="text-gray-600 mb-4">{beer.description}</p>

              {/* Beer Attributes */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h2 className="text-gray-700 font-semibold">Categorie</h2>
                  <p className="text-gray-600">{beer.id_category}</p>
                </div>
                <div>
                  <h2 className="text-gray-700 font-semibold">Type</h2>
                  <p className="text-gray-600">{beer.color}</p>
                </div>
                <div>
                  <h2 className="text-gray-700 font-semibold">ABV</h2>
                  <p className="text-gray-600">{beer.abv}%</p>
                </div>
                <div>
                  <h2 className="text-gray-700 font-semibold">Brasserie</h2>
                  <p className="text-gray-600">{beer.id_brewerie}</p>
                </div>
                <div>
                  <h2 className="text-gray-700 font-semibold">Prix</h2>
                  <p className="text-gray-600">{beer.price}</p>
                </div>
                <div>
                  <h2 className="text-gray-700 font-semibold">Ingredient</h2>
                  <p className="text-gray-600">Ingredients</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-around space-x-4">
                <Button type="button">Acheter</Button>
                <Button type="button" outlined>
                  Partager
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default DetailBeer;
