import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";

const anime = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Tortillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      anime // anime: anime
    };
  }

  addItem = item => {
    let newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    const sorted = [...this.state.anime, newItem].sort(function(a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      //ternary
      return nameA > nameB ? 1 : -1;
    });
    //this.setState({anime: [...this.state.anime, newItem]}); OLD

    this.setState({ anime: sorted }); //NEW
  };

  toggleItem = id => {
    let anime = this.state.anime.slice();
    anime = anime.map(item => {
      if (item.id === id) {
        item.purchased = !item.purchased;

        //if-else statement
        // if(item.purchased === true) {
        //   item.purchased = false;
        // } else {
        //   item.purchase = true;
        // }
        //ternary
        // item.purchased === true ? false : true;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ anime }); // anime : anime
  };

  clearComplete = id => {
    const filtered = this.state.anime.filter(item => {
      return item.purchased === false;
    });

    this.setState({ anime: filtered });
  };

  render() {

    if(this.state.anime.length < 1) {
      return (
        <div className="App">
          <div className="header">
            <h1>Shopping List</h1>
            <ShoppingListForm addItem={this.addItem} />
          </div>
          <h2>You Still Got More To Watch! Lets Go!</h2>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="header">
          <h1>Anime List</h1>
          <ShoppingListForm addItem={this.addItem} />
        </div>
        <ShoppingList
          anime={this.state.anime}
          toggleItem={this.toggleItem}
        />
        <div>
          <button onClick={this.clearComplete} className="clear-btn">
            Clear Watched
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
