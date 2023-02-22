// Importing useState for creation and initialization of state
import { useState } from 'react';

// Importing MovieCard component, so it can be used here
import { MovieCard } from '../movie-card/movie-card';

// Importing MovieView component
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Mayaanadhi',
      description:
        'The Protagonists troubled love and struggle for survival form the basic plot of the film',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Mayaanadhi_film_poster.jpg',
      director: 'Aashiq Abu',
      genre: 'Romance',
    },
    {
      id: 2,
      title: 'Angamaly Diaries',
      description:
        'The story follows Vincent Pepe who wants to be a powerful leader of a righteous gang that will rule the town of Angamaly.',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Angamaly_Diaries_Official_Poster.jpg',
      director: 'Lijo Jose Pellissery',
      genre: 'Drama',
    },
    {
      id: 3,
      title: 'Big B',
      description:
        'Big B is considered as a pathbreaking film in the history of Malayalam cinema, which introduced a new style of making and has later attained a huge cult following.',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/41/Big_B_film_poster.jpg',
      director: 'Amal Neerad',
      genre: 'Neo-Noir',
    },
    {
      id: 4,
      title: 'Comrade in America',
      description:
        'The film revolves around the travel of Aji, a communist from Kerala who travels to the United States illegally via Latin America to get to his girlfriend Sarah in time before she is forced to marry another person.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/00/Comrade_in_America.jpg',
      director: 'Amal Neerad',
      genre: 'Romance',
    },
    {
      id: 5,
      title: 'Jallikattu ',
      description:
        'The plot follows a bull that escapes from a slaughterhouse in a hilly remote village and the entire village men gathering to hunt down the animal.',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/38/JallikkattuFirstLook.jpg',
      director: 'Lijo Jose Pellissery',
      genre: 'Thriller',
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return <MovieView movieData={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
  }

  if (movies.length === 0) {
    return <div>The list of movies is empty</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieData={movie}
          onMovieClick={(newSelectedBook) => {
            setSelectedMovie(newSelectedBook);
          }}
        />
      ))}
    </div>
  );
};