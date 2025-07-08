import React, { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un thriller de science-fiction.",
      posterURL: "https://via.placeholder.com/150",
      note: 9,
    },
    {
      title: "Titanic",
      description: "Un drame romantique en mer.",
      posterURL: "https://via.placeholder.com/150",
      note: 8,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterNote, setFilterNote] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    note: 0,
  });

  const handleAddMovie = () => {
    setMovies([...movies, { ...newMovie, note: Number(newMovie.note) }]);
    setNewMovie({ title: "", description: "", posterURL: "", note: 0 });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.note >= filterNote
  );

  return (
    <div className="App">
      <h1>🎬 Ma bibliothèque de films</h1>

      {/* Filtre */}
      <div className="filter">
        <input
          type="text"
          placeholder="Filtrer par titre"
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Note minimum"
          min="0"
          max="10"
          onChange={(e) => setFilterNote(Number(e.target.value))}
        />
      </div>

      {/* Ajout de film */}
      <div className="add-movie">
        <input
          type="text"
          name="title"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Image URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          name="note"
          placeholder="Note"
          min="0"
          max="10"
          value={newMovie.note}
          onChange={(e) =>
            setNewMovie({ ...newMovie, note: e.target.value })
          }
        />
        <button onClick={handleAddMovie}>Ajouter</button>
      </div>

      {/* Liste des films */}
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>⭐ Note : {movie.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
