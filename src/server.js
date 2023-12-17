const express = require("express");
//add cors
const cors = require("cors");
const readline = require("readline");
const app = express();
app.use(cors());
const port = 3001;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isRushMode = false; // Un booléen pour déterminer si nous sommes en mode rush
const RUSH_THRESHOLD = 50; // Seuil pour passer en mode rush, ajustez selon vos besoins

// Définir un point d'API pour vérifier le mode rush
app.get("/mode-rush", (req, res) => {
  res.json({ isRushMode });
});

app.get("/supplements/divers", (req, res) => {
  res.json(
    supplements.filter(
      (supplement) => supplement.type.toLocaleLowerCase() === "divers"
    )
  );
});

app.get("/supplements/fromage", (req, res) => {
  res.json(
    supplements.filter(
      (supplement) => supplement.type.toLocaleLowerCase() === "fromage"
    )
  );
});

app.get("/supplements/viande", (req, res) => {
  res.json(
    supplements.filter(
      (supplement) => supplement.type.toLocaleLowerCase() === "viande"
    )
  );
});

app.get("/items/burgers", (req, res) => {
  res.json(foodItems.burgers);
});

app.get("/items/pizzas", (req, res) => {
  res.json(foodItems.pizzas);
});

app.get("/items/desserts", (req, res) => {
  res.json(foodItems.desserts);
});

app.get("/items/boissons", (req, res) => {
  res.json(foodItems.boissons);
});

// Fonction pour lire l'entrée depuis la console et définir le mode rush
function lireConsole() {
  rl.question(
    "Entrez le nombre de personnes dans l’établissement : ",
    (input) => {
      const number = parseInt(input);
      if (!isNaN(number)) {
        isRushMode = number > RUSH_THRESHOLD;
        console.log(`Mode rush ${isRushMode ? "activé" : "désactivé"}.`);
      } else {
        console.log("Veuillez entrer un nombre valide.");
      }
      lireConsole(); // Continue à lire l'entrée
    }
  );
}

// Lancer le serveur Express
const server = app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
  lireConsole(); // Déplacez l'appel de lireConsole() ici pour éviter l'appel avant que le serveur ne soit prêt
});

const foodItems = {
  burgers: [
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      recipe: ["mayo","tomate","cornichon","steak","tomate","salade", "chedar","ketchup"],
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 11,
      name: "Spicy Texan Burger",
      price: 15,
      type: "burger",
      recipe: ["sauce spicy","oignon","tomate","steak","salade"],
      url:
        "https://embed.widencdn.net/img/mccormick/tusx7ezwnh/840x840px/Spicy-Texas-Burgers?crop=true&q=80&u=o2hyef",
    },
    // ... continue for other burgers ...
    {
      id: 20,
      name: "Ultimate Burger Deluxe",
      price: 20,
      type: "burger",
      recipe: ["mayo","oignon","tomate","steak","tomate","cornichon","salade", "oignon"],
      url:
        "https://prairiemeats.ca/wp-content/uploads/2019/12/Burger-Stock3.jpg",
    },

  ],
  pizzas: [
    {
      id: 21,
      name: "Margherita",
      price: 7,
      type: "pizza",
      recipe: ["tomate","mozzarella","basilic"],
      url:
        "https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-margherita_1500x.png?v=1656423819",
    },
    {
      id: 22,
      name: "Royale",
      price: 9,
      type: "pizza",
      recipe: ["tomate","mozzarella","jambon","champignon"],
      url:
        "https://tb-static.uber.com/prod/image-proc/processed_images/bad4f535e2666917e204c1f9ba91bbb7/97ef7458dde62fa918635bc21265d9f5.jpeg",
    },
    // ... continue for other menus ...
    {
      id: 40,
      name: "Tonnarella",
      price: 7.5,
      type: "pizza",
      recipe: ["tomate","mozzarella","thon","oignon"],
      url:
        "https://as2.ftcdn.net/v2/jpg/02/45/43/03/1000_F_245430300_jlX8s1IaH0pUD4lQKz4ApMZ32jjsPfHz.jpg",
    },
    {
      id: 400,
      name: "Neptune",
      price: 8,
      type: "pizza",
      recipe: ["tomate","mozzarella","thon","crevette","oignon"],
      url:
        "https://www.herta.fr/sites/default/files/styles/scale_crop_720_500/public/2022-04/DSCF1765.JPG.webp?itok=QDGQKE1r",
    },

    {
      id: 401,
      name: "Americaine",
      price: 8.5,
      type: "pizza",
      recipe: ["tomate","mozzarella","jambon","champignon","oeuf"],
      url:
        "https://www.pariszigzag.fr/wp-content/uploads/2019/12/Capture-d%E2%80%99e%CC%81cran-2019-12-16-a%CC%80-18.03.37.png",
    },

    {
      id: 402,
      name: "Norvegienne",
      price: 8.2,
      type: "pizza",
      recipe: ["tomate","mozzarella","saumon","crevette","oignon"],
      url:
        "https://cdn.pizzamatch.com/1/28/1371560084-pizza-saumon-630.JPG?1371560096",
    },
  ],
  desserts: [
    {
      id: 41,
      name: "Tarte au pommes",
      price: 5,
      type: "dessert",
      recipe: [],
      url:
        "https://odelices.ouest-france.fr/images/recettes/tarte-pommes-normande-861x1250.jpg",
    },
    {
      id: 42,
      name: "Cheesecake framboise",
      price: 15,
      type: "dessert",
      recipe: [],
      url:
        "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg",
    },
    {
      id: 60,
      name: "Fondant au chocolat",
      price: 105,
      type: "dessert",
      recipe: [],
      url:
        "https://empreintesucree.fr/wp-content/uploads/2018/02/1-fondant-chocolat-recette-patisserie-empreinte-sucree-1.jpg",
    },
  ],
  boissons: [
    {
      id: 61,
      name: "Classic Cola",
      price: 2,
      type: "boisson",
      recipe: [],
      url:
        "https://as1.ftcdn.net/v2/jpg/04/28/81/06/1000_F_428810646_VxVPQbjUmDTt55DZra55HHdZMC0AFsna.jpg",
    },
    {
      id: 62,
      name: "Iced Lemon Tea",
      price: 1.5,
      type: "boisson",
      recipe: [],
      url:
        "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg",
    },
    // ... continue for other boissons ...
    {
      id: 80,
      name: "Premium Coffee Blend",
      price: 4.5,
      type: "boisson",
      recipe: [],
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0IJ5A1kKbcbusSCGesM_bz2JIghkdK9bzCvkBd_U63eUw9Dq2azJinEIme8wKFxn1B4&usqp=CAU",
    },
  ],
};

const supplements = [
  {
    id: 200,
    name: "Emmental",
    type: "Fromage",
    price: "1",
    url:
      "https://www.tonpanier.fr/1936-home_default/emmental-tranches-500-gr.jpg",
  },
  {
    id: 201,
    name: "Cheddar",
    type: "Fromage",
    price: "0.5",
    url:
      "https://www.tonpanier.fr/1931-home_default/tranche-cheddar-fondu-1082-kg.jpg",
  },
  {
    id: 202,
    name: "Comté",
    type: "Fromage",
    price: "1.99",
    url:
      "https://assets.afcdn.com/story/20190219/1333702_w6016h3384c1cx3018cy1999cxt1830cyt0cxb6016cyb3999.jpg",
  },
  {
    id: 203,
    name: "Raclette",
    type: "Fromage",
    price: "1.5",
    url:
      "https://fridg-front.s3.amazonaws.com/media/CACHE/images/products/raclette-copy_KhTEWtZ/da2939608f873624cc321a4d07a6c03c.jpg",
  },
  {
    id: 204,
    name: "Kebab",
    type: "Viande",
    price: "2",
    url:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg",
  },
  {
    id: 206,
    name: "Chorizo",
    type: "Viande",
    price: "1.50",
    url:
      "https://www.jbfrance.fr/wp-content/uploads/2020/09/15-Chorizo-scaled.jpg",
  },
  {
    id: 208,
    name: "Bacon",
    type: "Viande",
    price: "1.50",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3c-wgU4nsEityWXshj7lGL_6xLqqLOJWIAQ&usqp=CAU",
  },
  {
    id: 210,
    name: "Cordon bleu",
    type: "Viande",
    price: "1",
    url:
      "https://www.distram.com/7983-large_default/cordon-bleu-de-dinde-halal-cuit-125g-colis-de-51-kg-surg-iqf.jpg",
  },
  {
    id: 211,
    name: "Tenders",
    type: "Viande",
    price: "1",
    url: "https://staffpizza.fr/193-product_default/tenders.jpg",
  },
  {
    id: 300,
    name: "Poulet spicy",
    type: "Viande",
    price: "1",
    url:
      "https://static.youmiam.com/images/recipe/1500x1000/spicy-chicken-wings-rice-with-yogourt-22090?placeholder=web_recipe&sig=0a754086421c5988501c5b41da859249ee170df3&v3",
  },

  {
    id: 212,
    name: "Onion rings",
    type: "Divers",
    price: "1.5",
    url:
      "https://grandbaby-cakes.com/wp-content/uploads/2015/06/fried-onion-rings-recipe.jpg",
  },

  // ...d'autres produits
];
