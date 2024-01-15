const API = "http://localhost:9500";

export async function getMenuFromCategory(category) {
  const categoriesMapper = {
    entrées: "STARTER",
    plats: "MAIN",
    boissons: "BEVERAGE",
    desserts: "DESSERT",
    supplements: "SUPPLEMENTS",
  };

  return fetch(`${API}/menu/menus`)
    .then((res) => res.json())
    .then((data) =>
      data.filter((item) => item.category === categoriesMapper[category])
    )
    .catch((err) => console.log(err));
}

/**
 *
 * @param {String} category
 * @returns
 */
export async function getSupplementsFromCategory(category) {
  const categoriesMapper = {
    divers: "DIVERS",
    fromage: "CHEESE",
    viande: "MEAT",
  };

  return fetch(`${API}/menu/menus`)
    .then((res) => res.json())
    .then((data) =>
      data.filter(
        (item) =>
          item.category === categoriesMapper[category.toLocaleLowerCase()]
      )
    )
    .catch((err) => console.log(err));
}
