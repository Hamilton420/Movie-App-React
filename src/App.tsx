import React from "react";
import "./App.css";
import Movie from "./Movie-Component";

interface movie {
  id: number;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
}

interface state {
  movies: movie[];
}

class App extends React.Component<{}, state> {
  constructor(props: any) {
    super(props);
    this.state = { movies: [] };
  }
  componentDidMount() {
    this.setState({
      movies: [
        {
          id: 1,
          movie: "The Shawshank Redemption",
          rating: 9.2,
          image: "images/shawshank.jpg",
          imdb_url: "https://www.imdb.com/title/tt0111161/",
        },
        {
          id: 2,
          movie: "The Godfather",
          rating: 9.2,
          image: "images/godfather.jpg",
          imdb_url: "https://www.imdb.com/title/tt0068646/",
        },
        {
          id: 3,
          movie: "The Dark Knight",
          rating: 9,
          image: "images/dark_knight.jpg",
          imdb_url: "https://www.imdb.com/title/tt0468569/",
        },
        {
          id: 4,
          movie: "Pulp Fiction",
          rating: 8.9,
          image: "images/pulp_fiction.jpg",
          imdb_url: "https://www.imdb.com/title/tt0110912/",
        },
        {
          id: 5,
          movie: "The Lord of the Rings: The Return of the King",
          rating: 9,
          image: "images/lotr_return_king.jpg",
          imdb_url: "https://www.imdb.com/title/tt0167260/",
        },
        {
          id: 6,
          movie: "The Good, the Bad and the Ugly",
          rating: 8.8,
          image: "images/good_bad_ugly.jpg",
          imdb_url: "https://www.imdb.com/title/tt0060196/",
        },
        {
          id: 7,
          movie: "Fight Club",
          rating: 8.8,
          image: "images/fight_club.jpg",
          imdb_url: "https://www.imdb.com/title/tt0137523/",
        },
        {
          id: 8,
          movie: "The Lord of the Rings: The Fellowship of the Ring",
          rating: 8.8,
          image: "images/lotr_fellowship.jpg",
          imdb_url: "https://www.imdb.com/title/tt0120737/",
        },
        {
          id: 9,
          movie: "Forrest Gump",
          rating: 8.8,
          image: "images/forrest_gump.jpg",
          imdb_url: "https://www.imdb.com/title/tt0109830/",
        },
        {
          id: 10,
          movie: "Inception",
          rating: 8.8,
          image: "images/inception.jpg",
          imdb_url: "https://www.imdb.com/title/tt1375666/",
        },
        {
          id: 11,
          movie: "Deception",
          rating: 10,
          image: "images/denception.jpg",
          imdb_url: "https://www.imdb.com/title/tt1375666/",
        },
        {
          id: 12,
          movie: "Power Rangers 1",
          rating: 10,
          image: "images/denception.jpg",
          imdb_url: "https://www.imdb.com/title/tt1375666/",
        },
        {
          id: 13,
          movie: "Power Rangers 2",
          rating: 10,
          image: "images/denception.jpg",
          imdb_url: "https://www.imdb.com/title/tt1375666/",
        },
        {
          id: 14,
          movie: "Power Rangers 3",
          rating: 10,
          image: "images/denception.jpg",
          imdb_url: "https://www.imdb.com/title/tt1375666/",
        },
        {
          id: 15,
          movie: "Power Rangers 4",
          rating: 10,
          image: "images/denception.jpg",
          imdb_url: "https://www.imdb.com/title/tt1375666/",
        },
      ],
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie) => {
          return <Movie {...movie} />;
        })}
      </div>
    );
  }
}

export default App;
