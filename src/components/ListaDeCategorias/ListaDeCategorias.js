import React, { Component } from 'react';
import './style.css'

class ListaDeCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias: []};
        this._novasCategorias = this._novasCategorias.bind(this);
    }
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }
    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }
    _novasCategorias(categorias) {
        this.setState({...this.state,categorias})
    }
    _handleEventoInput(e){
        if(e.key == 'Enter' ){
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria)
        }
    }
    render() {
        return(
            <section className = 'lista-categorias'>
                <ul className = 'lista-categoria_lista'>
                    {this.state.categorias.map((categoria, index) => {
                        return(
                            <li className="lista-categoria_item" key={index}>
                                {categoria}
                            </li>
                        )
                    })}
                </ul>
                <input
                  type = "text"
                  className = "lista-categorias_input"
                  placeholder = 'Adicionar categoria'
                  onKeyUp = {this._handleEventoInput.bind(this)}
                />
            </section>  
        )
    }
}
export default ListaDeCategorias;
