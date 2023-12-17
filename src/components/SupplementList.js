import React from "react";
import Grid from "@mui/material/Grid";
import IconWithLabelCard from "./common/IconWithLabelCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SupplementItem from "./common/Supplement";
import Button from '@mui/material/Button';


function SupplementList({type, index, setIndex}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const supplements = [
    { id: 1, name: "Nom du produit 1",type:"Fromage", price: "1.50",urlImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc"},
    { id: 2, name: "Nom du produit 1",type:"Fromage", price: "20" ,urlImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc"},
    { id: 3, name: "Nom du produit 1",type:"Fromage",price: "20",urlImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc" },
    { id: 4, name: "Nom du produit 1",type:"Fromage", price: "20",urlImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc" },
    { id: 5, name: "Nom du produit 1",type:"Viande", price: "20",urlImage:"https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg" },
    { id: 6, name: "Nom du produit 1",type:"Fromage", price: "20",urlImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc" },
    { id: 7, name: "Nom du produit 1",type:"Viande", price: "20",urlImage:"https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg" },
    { id: 8, name: "Nom du produit 1",type:"Fromage", price: "20",urlImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc" },
    { id: 9, name: "Nom du produit 1",type:"Viande", price: "20",urlImage:"https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg" },
    { id: 10, name: "Nom du produit 2",type:"Fromage", price: "20",urlImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc" },
    { id: 11, name: "Nom du produit 1",type:"Viande", price: "20" ,urlImage:"https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg"},
    { id: 12, name: "Nom du produit 1",type:"Viande", price: "20",urlImage:"https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg" },
    { id: 13, name: "Nom du produit 1",type:"Viande", price: "50",urlImage:"https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XXGRF3PB5RBT5CMHODHTA4LMQI.jpg" },

    // ...d'autres produits
  ];

  // Filter supplements based on the type passed to the component
  const filteredSupplements = supplements.filter(supplement => supplement.type === type);

  return (
      <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
      >
        <div style={{ height: "auto", fontSize:isLandscape? '3vw':'3vh',marginBottom:isLandscape? '1vw':'1vh' }}>
          <p>{type}</p>
        </div>
        <div style={{ height:isLandscape?'45%': '52%', overflow: "auto" }}>
          {filteredSupplements.map((supplement) => (
              <SupplementItem
                  key={supplement.id}
                  name={supplement.name}
                  price={supplement.price}
                  url={supplement.urlImage}
              />
          ))}
        </div>
        <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '2vh' ,fontSize:isLandscape? '2vw':'2vh'}}
            // Add an onClick handler if needed
            onClick={() =>{
              console.log("Clicked");
              setIndex(index + 1)}}
        >
          Passer à la suite
        </Button>
      </div>
  );
}

export default SupplementList;
