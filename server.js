const express = require('express');
const readline = require('readline');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let isRushMode = false; // Un booléen pour déterminer si nous sommes en mode rush
const RUSH_THRESHOLD = 50; // Seuil pour passer en mode rush, ajustez selon vos besoins

// Définir un point d'API pour vérifier le mode rush
app.get('/mode-rush', (req, res) => {
  res.json({ isRushMode });
});

// Fonction pour lire l'entrée depuis la console et définir le mode rush
function lireConsole() {
  rl.question('Entrez le nombre de personnes dans l’établissement : ', (input) => {
    const number = parseInt(input);
    if (!isNaN(number)) {
      isRushMode = number > RUSH_THRESHOLD;
      console.log(`Mode rush ${isRushMode ? 'activé' : 'désactivé'}.`);
    } else {
      console.log('Veuillez entrer un nombre valide.');
    }
    lireConsole(); // Continue à lire l'entrée
  });
}

// Lancer le serveur Express
const server = app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
  lireConsole(); // Déplacez l'appel de lireConsole() ici pour éviter l'appel avant que le serveur ne soit prêt
});
