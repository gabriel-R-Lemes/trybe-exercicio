import React from 'react';

class Form extends React.Component {
  constructor () {
    super()

    this.state = {
      quantidade: '',
      melhorManga: '',
      veracidade: false,
      frase: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return(
      <div>
        <h1>Formulario TESTE!</h1>
        <form>
          <label for='quantidade'>Escolha a quantidade de manga que voce lê/leu!</label>
          <select 
            id='quantidade'
            name='quantidade'
            value={this.state.quantidade}
            onChange={this.handleChange}>
            <option value='menosQue5'>Menos que 5</option>
            <option value='menosQue10'>Menos que 10 maior que 5</option>
            <option value='menosQue15'>Menos que 15 maior que 10</option>
            <option value='menosQue20'>Menos que 20 maior que 15</option>
            <option value='maisQue20'>Mais que 20</option>
          </select>
          <label for='bestManga'>Qual o melhor mangá da história?? </label>
          <input
            type="text"
            name="bestManga"
            value={this.state.melhorManga}
            onChange={this.handleChange}
          />
          <label for='veracidade'>Confirma que diz a verdade?</label>
          <input 
            type='checkbox'
            name='veracidade'
            id='veracidade'
            value={this.state.veracidade}
            onChange={this.handleChange}/>
          <label>
            Diga uma boa frase de algum mangá!
            <textarea name="frase" value={this.state.frase} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
