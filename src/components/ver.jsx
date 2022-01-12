import react, {useState, useEffect} from "react";
import { api } from "../services/api";
import "../styles/artigo.scss";

export const Ver = (props) => {

    const [id] = useState(props.match.params.id);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('')
    
    useEffect(() => {
        const getNotice = async () => {
          await api.get(`/movies/${id}`)
            .then((response) => {
                 console.log(response.data);
                setTitle(response.data.movie.title)
                setDesc(response.data.movie.desc)
                setAuthor(response.data.movie.author)
            })
        }
        getNotice()
    }, [id]);

    return(
        <div className="artigo">
            <div className="artigo-content">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="desc">
                <p>{desc}</p>
            </div>
            <div className="author">
                <span>{author}</span>
            </div>
            </div>
        </div>
    )
}