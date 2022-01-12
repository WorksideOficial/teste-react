import React, {useState} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "../styles/form.scss";

export const Form = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('');

    const handlleCreateNewPost = (event) => {
        event.preventDefault();

       const data = {
            title,
            desc,
            author,
        };
        if(data.title === '' || data.desc === '' || data.author === ''){
            toast.error('Todos os campos são obrigatórios!'); 
        }else{
            api.post('/movies', data);
              setTitle('')
              setDesc('')
              setAuthor('')
            toast.success('Notícia cadastrada com sucesso!'); 
        }
    }

    return(
        <div className="form-create">
            <div className="title">
                <h2>Cadastre a sua Notícia!</h2>
            </div>
            <div className="form">
            <form onSubmit={handlleCreateNewPost}>
                    <div className="input">
                        <input  
                            value={title} 
                            onChange={event => setTitle(event.target.value)}
                            placeholder="Informe o Titulo:"
                       />
                    </div>
                    <div className="input">
                        <textarea
                            value={desc}
                            onChange={event => setDesc(event.target.value)}
                            placeholder="Digite seu texto aqui"
                        ></textarea>
                    </div>
                    <div className="input">
                        <input 
                            value={author} 
                            onChange={event => setAuthor(event.target.value)}
                            placeholder="Informe o Author:" 
                        />
                    </div>
                    <div className="input">
                        <button>Cadastrar Notícia</button>
                    </div>
            </form>
            </div>
        </div>
    );
}