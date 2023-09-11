import React, { ChangeEvent } from "react";
import "./App.css";
import Movie from "../movie/Movie-Component";
import Button from "../button/button";

interface props {}

interface movie {
  id: number;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
}

interface state {
  movies: movie[];
  search: string;
}

interface apiMovie {
  imdbID: number;
  Title: string;
  imdbRating: string;
  Poster: string;
  Website: string;
}

class App extends React.Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = { movies: [], search: "" };
  }

  setMovie = (data: apiMovie) => {
    this.setState({
      movies: [
        {
          id: data.imdbID,
          movie: data.Title,
          rating: Number(data.imdbRating),
          image: data.Poster,
          imdb_url: data.Website,
        },
      ],
    });
  };

  getMoviesFromApi = () => {
    fetch(`http://www.omdbapi.com/?apikey=d92e4a4a&t=${this.state.search}`, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        !data.Error
          ? this.setMovie(data)
          : this.setMovie({
              imdbID: 0,
              Title: data.Error,
              imdbRating: "",
              Poster: "error",
              Website: "error",
            });
      })
      .catch(() => {
        this.setMovie({
          imdbID: 0,
          Title: "Movie not found",
          imdbRating: "",
          Poster: "error",
          Website: "error",
        });
      });
  };

  updateSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    this.setState({
      search: value,
    });
  };

  clearPage = () => {
    this.setState({
      movies: [],
      search: "",
    });
  };

  render() {
    return (
      <div className="App">
        <input value={this.state.search} onChange={this.updateSearch} />
        <Button color="primary" text="Search"  onclick={this.getMoviesFromApi}/> 

        {this.state.movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
        <Button color="secondary" text="clear" onclick={this.clearPage}/>
      </div>
    );
  }
}

export default App;
