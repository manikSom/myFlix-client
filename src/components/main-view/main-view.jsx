// Importing useState for creation and initialization of state
import { useState, useEffect } from 'react';

// Importing MovieCard component, so it can be used here
import { MovieCard } from '../movie-card/movie-card';

// Importing MovieView component
import { MovieView } from '../movie-view/movie-view';

// Importing LoginView and SignupView component
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';

export const MainView = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    useEffect(() => {
        if (!token) {
            return;
        }
        // set loading before sending API request
        setLoading(true);
        fetch("https://mokkamovie.herokuapp.com/movies", {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then((response) => response.json())
            .then((data) => {
                // stops loading after response received
                setLoading(false);
                console.log('data', data);
                const moviesFromApi = data.map((doc) => {
                return {
                    id: doc._id,
                    title: doc.Title,
                    description: doc.Description,
                    genre: {
                        name: doc.Genre.Name,
                        description: doc.Genre.Description,
                    },
                    director: {
                        name: doc.Director.Name,
                        bio: doc.Director.Bio,
                        birth: doc.Director.Birth,
                        death: doc.Director.Death,
                    },
                    image: doc.ImagePath,
                };
            });
            setMovies(moviesFromApi);
            console.log('movies from api:', data);
            })
    }, [token])
  
    // user must first either login or signup
    if (!user) {
      return (
        <>
          <LoginView onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} />
          or
          <SignupView />
        </>
      )
    }

    if (selectedMovie) {
        let similarMovies = movies.filter((movie) => {
        return (
            movie.genre.name === selectedMovie.genre.name &&
            movie.title !== selectedMovie.title
        );
        });
        console.log(similarMovies);
        return (
            <>
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear();
            }}
            > Logout 
            </button>
            <MovieView
            movieData={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
            />
            <hr />
            <h2>Similar movies</h2>

            {similarMovies.map((movie) => (
            <MovieCard
                key={movie.id}
                movieData={movie}
                onMovieClick={(newSelectedBook) => {
                setSelectedMovie(newSelectedBook);
                }}
            />
            ))}
        </>
        );
    }

    if (movies.length === 0) {
        return (
            <>
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear();
            }}
            > Logout
            </button>
            <div>The list of movies is empty!</div>
          </>
          );
    }

    return (
            // conditional rendering for loading statment
        loading ? (
            <p>Loading...</p>
        ) : !movies || !movies.length ? (
            <p>No movies found</p>
        ) : (

        <div>
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear();
            }}
            > Logout
            </button>

                {movies.map((movie) => (
                    <MovieCard
                    key={movie._id}
                    movieData={movie}
                    onMovieClick={(newSelectedBook) => {
                        setSelectedMovie(newSelectedBook);
                    }}
                    />
                ))}
        </div>
  ));
};