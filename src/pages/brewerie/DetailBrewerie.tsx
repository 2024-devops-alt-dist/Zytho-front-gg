import { useEffect, useState } from "react";
import BrewerieInterface from "../../entity/BrewerieInterface";
import BrewerieService from "../../services/BrewerieService";
import { useParams } from "react-router-dom";
import ListBeers from "../beer/ListBeers";

const DetailBrewerie = () => {
  const [brewerie, setBrewerie] = useState<BrewerieInterface>();
  const [brewerieService] = useState(new BrewerieService());
  const { id } = useParams();

  useEffect(() => {
    const fetchBrewerie = async () => {
      try {
        const brewerie = await brewerieService.findByIdBrewerie(Number(id));
        console.log(brewerie);
        setBrewerie(brewerie);
      } catch (error) {
        console.error("Error fetching brewerie:", error);
      }
    };
    fetchBrewerie();
  }, [brewerieService]);

  return (
    brewerie && (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div>
            {/* Image Section */}
            <div className="w-full bg-gray-200 flex items-center justify-center p-4">
              <img
                className="w-auto object-contain"
                src="/public/assets/picture_big/brewerie-1.jpg"
                alt={brewerie.name}
              />
            </div>
            {/* Details Section */}
            <div className="md:w-2/3 p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {brewerie.name}
              </h1>
              <p className="text-gray-600 mb-4">{brewerie.country}</p>

              {/* brewerie Attributes */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h2 className="text-gray-700 font-semibold">Categorie</h2>
                  <ListBeers idBrewerie={brewerie.id_brewerie} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default DetailBrewerie;
