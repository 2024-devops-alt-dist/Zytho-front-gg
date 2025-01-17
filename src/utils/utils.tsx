import BeerInterface from "../entity/BeerInterface";
import BrewerieInterface from "../entity/BrewerieInterface";
import { CategoryInterface } from "../entity/CategoryInterface";

export const returnTypeObjects = <
  T extends BeerInterface | BrewerieInterface | CategoryInterface
>(
  objects: T[]
) => {
  return new Set(objects.map((obj: T) => obj.type));
};

export const returnTypeObject = <
  T extends BeerInterface | BrewerieInterface | CategoryInterface
>(
  object: T
) => {
  return new Set(object.type);
};

export const returnIdObjectType = <
  T extends BeerInterface | BrewerieInterface | CategoryInterface
>(
  object: T
) => {
  switch (object.type) {
    case "beer":
      return object.id_beer;
    case "brewerie":
      return object.id_brewerie;
    case "category":
      return object.id_category;
    default:
      return 0;
  }
};
