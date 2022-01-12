import React, {useState} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "../styles/search.scss";


export const Search = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState([])

    const handlePesquisa = async(e) =>{
        e.preventDefault();
        const params = {};
        if(search){
            params.title = search;
        }
        try{
         await api.get(`/movies/`)
        .then(response => console.log(response.data.movies))
        
        const filter = movies.filter((m) => m.title === `${search}`);
        if(filter.length === 0){
            toast.error('Não existem noticias cadastradas!'); 
        }else{
            setMovies(filter)
        }
        }catch(error){
            console.error(error);
        }
    }
    
    return(
        <div className="search">
            <div className="title">
                <h2>Faça a sua pesquisa aqui</h2>
            </div>
            <div className="form">
                <div className="input">
                    <input 
                        type="text" 
                        placeholder="Faça sua pesquisa aqui!" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={handlePesquisa}>Pesquisar</button>
                </div>
            </div>

            <div className="news">
            {movies.map((movie, index) => (
                <div className="news-item" key={index}>
                    <div className="item-desc">
                        <h2>{movie.title}</h2>
                        <h3>{movie.desc}</h3>
                        <span>Author: {movie.author}</span>
                    </div>
                    <div className="action">
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}