import React, {Component} from 'react'
import './SecaoMensagens.css'
import styled from 'styled-components'
import {SecaoForm} from '../SecaoForm/SecaoForm'

export class SecaoMensagens extends React.Component {

  state = {
    mensagens: [
      {
        usuario: "Adimin",
        mensagem: "Esta é uma mensagem teste"
      }
    ],
    usuario:"",
    mensagem: ""
  }
  onChangeTxt = (event) =>{ 
    console.log( event.target.value);
    this.setState({
      usuario: event.target.value
    });
  }
  onChangeUsuario = (event) =>{ 
    console.log( event.target.value);
    this.setState({
      mensagem: event.target.value
    });
  }
	render() {
		return <div className="todo">
      <div className="mensagens">
"Testes"
      </div>
      <SecaoForm></SecaoForm>
        </div>
     
	}
}
