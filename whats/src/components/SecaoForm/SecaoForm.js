import React, {Component} from 'react'
import './SecaoForm.css'
import styled from 'styled-components'
export class SecaoForm extends React.Component {

  state = {
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
		return <div className="form">
        <input type="text" onChange={this.onChangeTxt} value={this.props.usuario} />
        <input type="text" onChange={this.onChangeUsuario} value={this.props.mensagem} />
        <button >Enviar</button>
      </div>
	}
}
