import React from 'react';
import styled from 'styled-components'

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  box-sizing: border-box;
  border: 1px solid black;
  height: 100vh;
  width: 600px;
  margin: auto;
  padding: 20px;
`

const Box2 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  padding: 20px;
  margin:auto;
`

const BoxInputs = styled.div`
  display: flex;
`

const InputNome = styled.input`
  width: 100px;
`

const InputMensagem = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    arrayMensagens: [],
    inputUsuario: '',
    inputMensagem: ''
  }

  onChangeInputUsuario= (event) => {
    this.setState({ inputUsuario: event.target.value });
  }

  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  }

  adicionaMensagem = () => {
    const novaMsg = {
      usuario: this.state.inputUsuario,
      textoMensagem: this.state.inputMensagem
    }
    
    const novoArrayMensagens = [novaMsg, ...this.state.arrayMensagens]

    this.setState({arrayMensagens: novoArrayMensagens, inputMensagem: ''})
  }

  render() {
    return (
      <Box1>
        <Box2>
          {this.state.arrayMensagens.map((msg, index) => {
            return <p key = {index} > 
              <strong>{msg.usuario}</strong>: {msg.textoMensagem}
            </p>
          })}
        </Box2>
        <BoxInputs>
          <InputNome 
            placeholder={'Nome'}
            onChange = {this.onChangeInputUsuario}
            value = {this.state.inputUsuario}
          />

          <InputMensagem 
            placeholder={'Mensagem'}
            onChange = {this.onChangeInputMensagem}
            value = {this.state.inputMensagem}
          />
          <button onClick = {this.adicionaMensagem}>Enviar</button>
        </BoxInputs>
      </Box1>
    );
  }
}

export default App;