import React, {useState, useEffect} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "../styles/form.scss";

export const FormEdit = (props) => {
    const [movies, setMovies] = useState([])

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


    const editNotice = async (event) => {
        event.preventDefault();

            try{
                if(title === '' || desc === '' || author === ''){
                    toast.error('Todos os campos são obrigatórios!'); 
                }else{
                    await fetch(`http://localhost:3000/api/movies/${id}`, {
                    method: 'PATCH', 
                    body: JSON.stringify({ id, title, desc, author })
                  }).then((response) => response.json())
    
                  setMovies([...movies])
                  setTitle('')
                  setDesc('')
                  setAuthor('')
                  toast.success('Notícia editada com sucesso!'); 
                }
            }catch(error){
                console.error(error);
            }
    }

    return(
        <div className="form-create">
            <div className="title">
                <h2>Editar a sua Notícia!</h2>
            </div>
            <div className="form">
            <form onSubmit={editNotice}>
                    <div className="input">
                        <input 
                            type="text"
                            value={title} 
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Informe o Titulo:"
                       />
                    </div>
                    <div className="input">
                        <textarea
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                            placeholder="Digite seu texto aqui"
                        ></textarea>
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            value={author} 
                            onChange={e => setAuthor(e.target.value)} 
                            placeholder="Informe o Author:" 
                        />
                    </div>
                    <div className="input">
                        <button>Editar Notícia</button>
                    </div>
            </form>
            </div>
        </div>
    );
}