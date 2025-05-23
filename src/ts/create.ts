const form = document.querySelector(".create") as HTMLFormElement;
import { Pizza } from "../model/model";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const title = formData.get("title");
  const description = formData.get("description");
  const toppings = formData.getAll("toppings");
  const price = formData.get("price");

  Pizza.create({
    title,
    description,
    toppings,
    price,
  });
});
