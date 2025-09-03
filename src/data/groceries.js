import tomatoes from "../assets/christy-hinko-fmsfEGvZh9I-unsplash.jpg";
import carrots from "../assets/alghozy-3ABmbDIiVn0-unsplash.jpg";
import bananas from "../assets/banana.webp";
import apples from "../assets/appl2.avif";
import ovacados from "../assets/ova.webp";
import danias from "../assets/dania.webp";
import hohos from "../assets/vino-li-v7H-fV9Ydkk-unsplash.jpg";
import cucumber from "../assets/wanasanan-phonnaun-puMz26-ub30-unsplash.jpg";

const groceries = [
  { name: "Tomatoes", desc: "Fresh, ripe tomatoes. Price per kg.", img: tomatoes, price: 120 }, // per kg
  { name: "Carrots", desc: "Crunchy, sweet carrots packed with vitamins.", img: carrots, price: 80 }, // per kg
  { name: "Bananas", desc: "Sweet, ripe bananas perfect for snacking.", img: bananas, price: 15 }, // per piece
  { name: "Apples", desc: "Juicy, crisp apples for a healthy treat.", img: apples, price: 40 }, // per piece
  { name: "Avocados", desc: "Creamy avocados, great for salads and toast.", img: ovacados, price: 30 }, // per piece
  { name: "Danias", desc: "Fresh coriander (dania) for flavoring dishes.", img: danias, price: 10 }, // per bunch
  { name: "Hohos", desc: "Green bell peppers (hohos), crisp and flavorful.", img: hohos, price: 25 }, // per piece
  { name: "Cucumber", desc: "Cool, refreshing cucumbers for salads.", img: cucumber, price: 40 } // per piece
];


export default groceries; 