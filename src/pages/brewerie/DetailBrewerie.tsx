import { useParams } from "react-router-dom";
import ListBeers from "../beer/ListBeers";
import CardBrewerie from "./CardBrewerie";
import { useBrewerieStore } from "../../store/useBrewerieStore";

const DetailBrewerie = () => {
  const { id } = useParams();
  const { getBrewerieById, fetchBrewerieById } = useBrewerieStore();

  const brewerieFilter = getBrewerieById(Number(id))
    ? getBrewerieById(Number(id))
    : fetchBrewerieById(Number(id));

  return (
    brewerieFilter && (
      <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <CardBrewerie brewerie={brewerieFilter} element="detail" />
        <ListBeers idBrewerie={brewerieFilter?.id_brewerie} />
      </div>
    )
  );
};
export default DetailBrewerie;
