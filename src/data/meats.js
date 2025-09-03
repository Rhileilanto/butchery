import lambShank from "../assets/Lamb shank.webp";
import mincedMutton from "../assets/Minced mutton.webp";
import muttonRibs from "../assets/Mutton ribs.webp";
import muttonLeg from "../assets/Mutton leg.webp";
import chickenFeet from "../assets/Chicken feet.webp";
import chickenLiver from "../assets/Chicken liver.webp";
import chickenGizzard from "../assets/Chicken gizzard.webp";
import chickenDrumsticks from "../assets/Chicken drumsticks.webp";
import chickenWings from "../assets/Chicken wings.webp";
import chickenThighs from "../assets/Chicken thighs.webp";
import chickenBreast from "../assets/Chicken breast.webp";
import wholeChicken from "../assets/Whole chicken.webp";
import goatIntestines from "../assets/Goat intestines (matumbo ya mbuzi).webp";
import goatHead from "../assets/Goat head (used for soup).webp";
import goatLiver from "../assets/Goat liver.webp";
import goatRibs from "../assets/Goat ribs.avif";
import goatLeg from "../assets/Goat leg (whole or half).webp";
import goatStewPieces from "../assets/goat stew pieces.webp";
import goatChops from "../assets/goat chops.webp";
import beefKidney from "../assets/beef kidney.webp";
import beefLiver from "../assets/beef liver.webp";
import beefRibs from "../assets/beef ribs.avif";
import beefSteek from "../assets/beef steek.avif";
import mincedBeef from "../assets/minced beef.webp";

const meats = [
  // Beef
  { name: "Beef Steek", type: "Beef", desc: "Classic beef steak, juicy and full of flavor.", img: beefSteek, price: 950, pricePerKg: true, weight: "1 kg", badges: ["Best Seller"], nutrition: { protein: 26, fat: 18, calories: 250 } },
  { name: "Beef Ribs", type: "Beef", desc: "Succulent beef ribs, ideal for grilling and roasting.", img: beefRibs, price: 850, pricePerKg: true, weight: "1 kg", badges: ["BBQ Favorite"], nutrition: { protein: 24, fat: 20, calories: 280 } },
  { name: "Minced Beef", type: "Beef", desc: "Premium minced beef, 85% lean. Perfect for meatballs, lasagna, and bolognese.", img: mincedBeef, price: 720, pricePerKg: true, weight: "1 kg", badges: ["Lean"], nutrition: { protein: 22, fat: 12, calories: 210 } },
  { name: "Beef Liver", type: "Beef", desc: "Fresh beef liver, rich in nutrients and flavor.", img: beefLiver, price: 400, pricePerKg: true, weight: "1 kg", badges: ["Nutrient Dense"], nutrition: { protein: 20, fat: 4, calories: 135 } },
  { name: "Beef Kidney", type: "Beef", desc: "Tender beef kidney, great for traditional dishes.", img: beefKidney, price: 350, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 17, fat: 3, calories: 120 } },

  // Goat
  { name: "Goat Chops", type: "Goat", desc: "Juicy goat chops, perfect for grilling or frying.", img: goatChops, price: 950, pricePerKg: true, weight: "1 kg", badges: ["Organic"], nutrition: { protein: 25, fat: 8, calories: 180 } },
  { name: "Goat Stew Pieces", type: "Goat", desc: "Boneless goat pieces, ideal for hearty stews.", img: goatStewPieces, price: 870, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 23, fat: 7, calories: 170 } },
  { name: "Goat Leg (Whole or Half)", type: "Goat", desc: "Whole or half goat leg, great for roasting.", img: goatLeg, price: 990, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 24, fat: 9, calories: 190 } },
  { name: "Goat Ribs", type: "Goat", desc: "Tender goat ribs, perfect for grilling.", img: goatRibs, price: 880, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 22, fat: 10, calories: 200 } },
  { name: "Goat Liver", type: "Goat", desc: "Fresh goat liver, rich in iron and flavor.", img: goatLiver, price: 450, pricePerKg: true, weight: "1 kg", badges: ["Nutrient Dense"], nutrition: { protein: 19, fat: 4, calories: 130 } },
  { name: "Goat Head (used for soup)", type: "Goat", desc: "Goat head, commonly used for making flavorful soup.", img: goatHead, price: 700, pricePerKg: false, weight: "1 head", badges: [], nutrition: { protein: 18, fat: 8, calories: 160 } },
  { name: "Goat Intestines (matumbo ya mbuzi)", type: "Goat", desc: "Goat intestines, a delicacy for traditional dishes.", img: goatIntestines, price: 300, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 14, fat: 12, calories: 170 } },

  // Lamb & Mutton
  { name: "Lamb Chops", type: "Lamb", desc: "Tender and juicy lamb chops, perfect for grilling or roasting.", img: lambShank, price: 1100, pricePerKg: true, weight: "1 kg", badges: ["Best Seller"], nutrition: { protein: 25, fat: 17, calories: 240 } },
  { name: "Mutton Leg", type: "Lamb", desc: "Whole mutton leg, ideal for slow roasting and special occasions.", img: muttonLeg, price: 950, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 24, fat: 15, calories: 220 } },
  { name: "Mutton Ribs", type: "Lamb", desc: "Flavorful mutton ribs, great for barbecues and stews.", img: muttonRibs, price: 880, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 23, fat: 14, calories: 210 } },
  { name: "Minced Mutton", type: "Lamb", desc: "Freshly minced mutton, perfect for kebabs and curries.", img: mincedMutton, price: 750, pricePerKg: true, weight: "1 kg", badges: ["Lean"], nutrition: { protein: 21, fat: 10, calories: 180 } },
  { name: "Lamb Shank", type: "Lamb", desc: "Rich and tender lamb shank, best for slow-cooked dishes.", img: lambShank, price: 1050, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 24, fat: 16, calories: 230 } },

  // Chicken
  { name: "Whole Chicken", type: "Chicken", desc: "Fresh whole chicken, perfect for roasting or grilling.", img: wholeChicken, price: 600, pricePerKg: true, weight: "1.5 kg", badges: ["Best Seller"], nutrition: { protein: 20, fat: 8, calories: 170 } },
  { name: "Chicken Breast", type: "Chicken", desc: "Skinless, boneless chicken breast. Lean and versatile.", img: chickenBreast, price: 780, pricePerKg: true, weight: "1 kg", badges: ["Lean"], nutrition: { protein: 23, fat: 2, calories: 110 } },
  { name: "Chicken Thighs", type: "Chicken", desc: "Juicy chicken thighs, great for grilling and frying.", img: chickenThighs, price: 690, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 21, fat: 9, calories: 150 } },
  { name: "Chicken Wings", type: "Chicken", desc: "Crispy chicken wings, perfect for snacks and parties.", img: chickenWings, price: 650, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 20, fat: 12, calories: 180 } },
  { name: "Chicken Drumsticks", type: "Chicken", desc: "Tender chicken drumsticks, ideal for baking and frying.", img: chickenDrumsticks, price: 640, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 20, fat: 10, calories: 160 } },
  { name: "Chicken Gizzard", type: "Chicken", desc: "Flavorful chicken gizzards, great for stews and stir-fries.", img: chickenGizzard, price: 450, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 18, fat: 4, calories: 120 } },
  { name: "Chicken Liver", type: "Chicken", desc: "Fresh chicken liver, rich in nutrients.", img: chickenLiver, price: 400, pricePerKg: true, weight: "1 kg", badges: ["Nutrient Dense"], nutrition: { protein: 17, fat: 4, calories: 110 } },
  { name: "Chicken Feet", type: "Chicken", desc: "Chicken feet, a delicacy for soups and stews.", img: chickenFeet, price: 350, pricePerKg: true, weight: "1 kg", badges: [], nutrition: { protein: 14, fat: 7, calories: 100 } }
];


export default meats; 