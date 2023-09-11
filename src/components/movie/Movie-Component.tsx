import * as React from "react";
import "./movie.css" ;
interface props {
  id: number;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
}

interface state {}

class Movie extends React.Component<props, state> {
  render() {
    return (
      <div>
        <div>
          {this.props.movie} - {this.props.rating}
        </div>
        <a target="_blank" href={this.props.imdb_url}>
          <img src={this.props.image} />
        </a>
      </div>
    );
  }
}

export default Movie;
