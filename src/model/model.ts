import { DataResource } from "../services/DataResource";

export interface PizzaModel {
  id: number;
  title: string;
  price: number;
  description: string;
  toppings: string[];
}

export const Pizza = new DataResource<PizzaModel>(
  "http://localhost:3000/pizzas"
);
