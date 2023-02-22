// Movie card gets property from the MainView
// Property = result of function movies.map in main-view.jsx
// each movie contains id and title
export const MovieCard = ({ movieData, onMovieClick }) => {
    return <div onClick={() => {
      onMovieClick(movieData)
    }}>{movieData.title}</div>;
  };