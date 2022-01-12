import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import "../styles/news.scss";

export const News = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get('movies')
        .then(response => setMovies(response.data.movies))
    }, []);

      const deleteMovie = async (id) => {
        try{
            await api.delete(`/movies/${id}`, { method: 'DELETE' })
            setMovies(movies.filter((m) => m.id !== id))
        }catch(error){
            console.log(error);
        }
      }

    return(
        <div className="news">
            {movies.map((iten, index) => (
            <div className="news-item" key={index}>
                <div className="item-desc">
                    <h2>{iten.title?.substr(0,17)}</h2>
                    <h3>{iten.desc?.substr(0,180)} ...</h3>
                    <span>Author: {iten.author}</span>
                </div>
               <div className="action">
               < Link to={`/post/${iten.id}`} className="button">Ver</Link>
                <Link to={`/edit/${iten.id}`} className="button">Editar</Link>
                <button onClick={() => deleteMovie(iten.id)}>Deletar</button>
               </div>
            </div>
            ))}
        </div>
    );
}