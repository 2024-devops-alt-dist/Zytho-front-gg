import CardBeer from "./component/CardBeer";
import { useParams } from "react-router-dom";
import { useBeerStore } from "../../store/useBeerStore";

const DetailBeer = () => {
  const { id } = useParams();
  const { getBeerById, fetchBeerById } = useBeerStore();

  const beerFilter = getBeerById(Number(id))
    ? getBeerById(Number(id))
    : fetchBeerById(Number(id));

  return beerFilter && <CardBeer beer={beerFilter} element="detail" />;
};
export default DetailBeer;
