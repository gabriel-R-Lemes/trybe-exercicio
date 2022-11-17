import { useEffect, useState } from "react";

export default function MailList({mailArray}) {
  // const [id, setId] = useState(0);
  // const [title, setTitle] = useState('');
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const checkRead = mailArray.every((element) => element.id === 1);
    if (checkRead) {
      window.alert('Parabéns! Você leu todas suas mensagens!');
    }
  });
  
  return (
    <div>
      { mailArray.map((element) => (
        <div key={element.id}>
          <h2>{element.title}</h2>
          <button
            type="button"
            onClick={ () => {
              
                console.log('antes do set', status);
                setStatus(1);
                console.log(element.status, status);
                console.log('depois do set');
                element.status = status;
                console.log(element.status)
            }}
          >
            Ler
          </button>
          <button
            type="button"
            onClick={ () => {
              if ( element.status === 1){
                setStatus(0);
                element.status = status;
              }
            }}
          >
            Não Lido
          </button>
        </div>
      ))}
      {/* <h3> oie {console.log(Object.values(mailArray))} </h3> */}
    </div>
  )
}
