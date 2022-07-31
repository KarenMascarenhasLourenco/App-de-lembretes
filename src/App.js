import React,{Component} from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormulárioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias'
import'./Assets/App.css';
import './Assets/index.css';
import Categorias from './dados/Categorias.js';
import ArrayDeNotas from './dados/Notas.js'

class App extends Component{
  constructor(){
    super();
    this.categorias= new Categorias();
    this.notas= new ArrayDeNotas();
  }

 render(){
  return (
    <section className ='pagina-container'>
      <header className='cabecalho'>
        <h1>App de Lembretes</h1>
      </header>
      <section className ='conteudo'>
        <FormularioCadastro 
          categorias = {this.categorias}
          criarNota = {this.notas.adicionarNota.bind(this.notas)}/>
        <main className = 'conteudo-principal'>
          <ListaDeCategorias
            adicionarCategoria = {this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias = {this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this)}
            notas = {this.notas}
          />
        </main>
      </section>
    </section>
   );
 }
}

export default App;
