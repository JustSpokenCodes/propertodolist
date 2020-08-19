import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";

const anime = [
  {
    name: "Megalobox",
    id: 1,
    watched: false
  },
  {
    name: "Highschool DxD",
    id: 2,
    watched: true
  },
  {
    name: "The God of High School",
    id: 3,
    watched: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      anime
    };
  }

  addAnime = item => {
    let newAnime = {
      name: item,
      id: Date.now(),
      watched: false
    };

    const sorted = [...this.state.anime, newAnime].sort(function(a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      return nameA > nameB ? 1 : -1;
    });

    this.setState({ anime: sorted });
  };

  toggleAnime = id => {
    let anime = this.state.anime.slice();
    anime = anime.map(anime => {
      if (anime.id === id) {
        item.watched = !item.watched;
        return item;
      } else {
        return item;
      }
    });
    this.setState({anime});
  };

  clearComplete = id => {
    const filtered = this.state.anime.filter(item => {
      return item.watched === false;
    });
    this.setState({anime: filtered});
  };

  render(){

    if(this.state.anime.length < 1) {
      return (
        <div className = "App">
          <div className="header">
            <h1>Shopping List </h1>
            <ShoppingListForm addAnime={this.addAnime} />
          </div>
          <h2>What Else Have You Seen?!</h2>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ShoppingListForm addAnime={this.addAnime} />
        </div>
        <ShoppingList
          anime={this.state.anime}
          toggleAnime={this.toggleAnime}
        />
        <div>
          <button onClick={thi.clearComplete}
          className="clear=btn">
            Clear Watched
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
