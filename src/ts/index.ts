import { PizzaModel, Pizza } from "../model/model";

const root = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaModel): string {
  return `
    <div class="pizza">
      <h2 class="title">${pizza.title}</h2>
      <p class="description">${pizza.description}</p>
      <span>$${pizza.price}</span>
      <div class="toppings">
        ${pizza.description.toString()}
      </div>
    </div>
  `;
}

function renderTemplate(createdPizza: string[], root: Element) {
  const template = document.createElement("template") as HTMLTemplateElement;
  template.innerHTML = createdPizza.join("");
  root.append(template.content);
}

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();
  const createdPizza = pizzas.map(createPizzaTemplate);
  renderTemplate(createdPizza, root);
});
