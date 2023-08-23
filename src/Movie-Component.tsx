import * as React from "react";

interface props {
  id: number;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
}

class Movie extends React.Component<props, {}> {
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
