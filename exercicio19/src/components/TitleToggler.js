import React, {useState,useEffect} from "react";

function TitleToggler(){
    const [title, setTitle] = useState('Título 1');

    useEffect(() => {
        document.title= title;
    }, [title]);

    const handleTitleChange = () =>{
        setTitle(prevTitle => prevTitle === 'Título 1' ? 'Título 2' : 'Título 1');
    };

    return(
        <div>
            <p>O título atual da página é {title}</p>
            <button onClick={handleTitleChange}>Alterar titulo </button>
        </div>
    );
}

export default TitleToggler;