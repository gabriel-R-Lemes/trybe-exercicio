import { useState } from "react";

export default function Forms () {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();

  return (
    <>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            placeholder="Nome Completo"
            onChange={ ({ target }) => setName(target.value)}
          >
          </input>
        </label>
        <label htmlFor="idade">
          <input
            type="number"
            name="idade"
            id="idade"
            placeholder="Idade"
            value={ age }
            onChange={ ({ target }) => setAge(target.value)}
          >
          </input>
        </label>
        <label htmlFor="cidade">
          <input
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
            value={ location }
            onChange={ ({ target }) => setLocation(target.value)}
          >
          </input>
        </label>
        <input 
          type="radio"
          id="fundamentos"
          name="module"
          value="Fundamentos"
          checked={module === 'Fundamentos'}
          onChange={({ target }) => setModule(target.value)}
        />
        <label for="fundamentos">Fundamentos</label>
        <input
          type="radio"
          id="frontEnd"
          name="module"
          value="Front-End"
          checked={module === 'Front-End'}
          onChange={({ target }) => setModule(target.value)}
        
        />
        <label for="frontEnd">Front-End</label>
        <input
          type="radio"
          id="backEnd"
          name="module"
          value="Back-End"
          checked={module === 'Back-End'}
          onChange={({ target }) => setModule(target.value)}        
        />
        <label for="backEnd">Back-End</label>
        <input
          type="radio"
          id="cienciaComp"
          name="module"
          value="Ciência da computação"
          checked={module === 'Ciência da computação'}
          onChange={({ target }) => setModule(target.value)}        
        />
        <label for="cienciaComp">Ciência da Computação</label>
        <button
          type="button"
        >
          Submit
        </button>
      </form>
    </>
  )
}
