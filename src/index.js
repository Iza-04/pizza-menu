import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  const style = {};
  return (
    <header className="header footer">
      <h1 style={style} className="header">
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  // const pizzas = pizzaData;
  // const pizzas = [];
  // const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Funghi"
        ingredients="Tomato,mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  // pizzaObj={pizza} key={pizza.name}
  return (
    <div className="pizza">
      <img src={props.photo} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString}We're currently open
    </footer>
  );
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!") else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  //     {isOpen ? (
  //       <Order closeHour={closeHour} openHour={openHour} />
  //     ) : (
  //       <p>
  //         We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  //       </p>
  //     )}
  //   </footer>
  // );

  // return React.createElement("footer", null, "We're currently open!");
}

// function Order({ closeHour, openHour }) {
//   return (
//     <div className="order">
//       <p>
//         We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
//         online.
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// }

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
