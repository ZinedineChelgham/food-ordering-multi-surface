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

app.get("/items/menus", (req, res) => {
  res.json(foodItems.menus);
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
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },
    {
      id: 1,
      name: "Classic Smash Burger",
      price: 10,
      type: "burger",
      url:
        "https://i.pinimg.com/736x/32/03/40/3203400cabe243a1d7fea0be683dfe4e.jpg",
    },

    {
      id: 2,
      name: "Spicy Texan Burger",
      price: 15,
      type: "burger",
      url:
        "https://embed.widencdn.net/img/mccormick/tusx7ezwnh/840x840px/Spicy-Texas-Burgers?crop=true&q=80&u=o2hyef",
    },
    // ... continue for other burgers ...
    {
      id: 20,
      name: "Ultimate Burger Deluxe",
      price: 20,
      type: "burger",
      url:
        "https://prairiemeats.ca/wp-content/uploads/2019/12/Burger-Stock3.jpg",
    },
  ],
  menus: [
    {
      id: 21,
      name: "Menu enfant",
      price: 10,
      type: "menu",
      url:
        "https://clichy-lamarron.foodify.fr/wp-content/uploads/2022/12/mkids-copie.png",
    },
    {
      id: 22,
      name: "Veggie Delight Menu",
      price: 15,
      type: "menu",
      url:
        "https://onsefaitunebouffe.fr/wp-content/uploads/2018/07/MCDO_RECETTE_VEGGIE_AUTOPROMO_1000x554_200ko.jpg",
    },
    // ... continue for other menus ...
    {
      id: 40,
      name: "Gourmet Feast",
      price: 50,
      type: "menu",
      url:
        "https://pg1.b5z.net/get/ob5z/s300-*/zirw/1/i/u/6084076/i/ec/Gourmet_Lover_s_Feast_360.jpg",
    },
  ],
  desserts: [
    {
      id: 41,
      name: "Glace",
      price: 5,
      type: "dessert",
      url:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/34F77344-5BD2-47B8-9213-2932E58C75FA/Derivates/D64A6A85-3934-4C3C-8DD4-7D54A4CA5A4F.jpg",
    },
    {
      id: 42,
      name: "Cheesecake framboise",
      price: 15,
      type: "dessert",
      url:
        "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg",
    },
    // ... continue for other desserts ...
    {
      id: 60,
      name: "Fondant au chocolat",
      price: 105,
      type: "dessert",
      url:
        "https://empreintesucree.fr/wp-content/uploads/2018/02/1-fondant-chocolat-recette-patisserie-empreinte-sucree-1.jpg",
    },
  ],
  boissons: [
    {
      id: 61,
      name: "Classic Cola",
      price: 10,
      type: "boisson",
      url:
        "https://as1.ftcdn.net/v2/jpg/04/28/81/06/1000_F_428810646_VxVPQbjUmDTt55DZra55HHdZMC0AFsna.jpg",
    },
    {
      id: 62,
      name: "Iced Lemon Tea",
      price: 15,
      type: "boisson",
      url:
        "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg",
    },
    // ... continue for other boissons ...
    {
      id: 80,
      name: "Premium Coffee Blend",
      price: 105,
      type: "boisson",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0IJ5A1kKbcbusSCGesM_bz2JIghkdK9bzCvkBd_U63eUw9Dq2azJinEIme8wKFxn1B4&usqp=CAU",
    },
  ],
};

const supplements = [
  {
    id: 200,
    name: "Nom du produit 1",
    type: "Fromage",
    price: "1.50",
    urlImage:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc",
  },
  {
    id: 2001,
    name: "Nom du produit 1",
    type: "Fromage",
    price: "20",
    urlImage:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc",
  },
  {
    id: 3,
    name: "Nom du produit 1",
    type: "Fromage",
    price: "20",
    urlImage:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc",
  },
  {
    id: 4,
    name: "Nom du produit 1",
    type: "Fromage",
    price: "20",
    urlImage:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc",
  },
  {
    id: 5,
    name: "Nom du produit 1",
    type: "Viande",
    price: "20",
    urlImage:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg",
  },
  {
    id: 6,
    name: "Nom du produit 1",
    type: "Fromage",
    price: "20",
    urlImage:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc",
  },
  {
    id: 7,
    name: "Nom du produit 1",
    type: "Viande",
    price: "20",
    urlImage:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg",
  },
  {
    id: 8,
    name: "Nom du produit 1",
    type: "Fromage",
    price: "20",
    urlImage:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc",
  },
  {
    id: 9,
    name: "Nom du produit 1",
    type: "Viande",
    price: "20",
    urlImage:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg",
  },
  {
    id: 10,
    name: "Nom du produit 2",
    type: "Fromage",
    price: "20",
    urlImage:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc",
  },
  {
    id: 11,
    name: "Nom du produit 1",
    type: "Viande",
    price: "20",
    urlImage:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg",
  },
  {
    id: 12,
    name: "Nom du produit 1",
    type: "Viande",
    price: "20",
    urlImage:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg",
  },
  {
    id: 13,
    name: "Nom du produit 1",
    type: "Viande",
    price: "50",
    urlImage:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg",
  },

  // ...d'autres produits
];
