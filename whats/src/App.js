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

const BoxMensagens = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  padding: 20px;
  justify-content: flex-start;
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

const BoxMensagem = styled.div`
  border-radius: 3px;
  background-color: blue;
  margin: 5px;
  width: 80%;
`
const BoxMensagemEu = styled(BoxMensagem)`
  align-self: flex-end;
`
const textInput = React.createRef();

class App extends React.Component {
  state = {
    arrayMensagens: [{
      usuario: "Adimin",
      textoMensagem: "Este é o seu whats use com responsabilidade"
    }],
    inputUsuario: '',
    inputMensagem: ''
  }
  onChangeInputUsuario= (event) => {
    if(event.key == "Enter"){
      textInput.current.focus();
    }
    else{
    this.setState({ inputUsuario: event.target.value });
    }
  }

  onChangeInputMensagem = (event) => {
    if(event.key == "Enter"){
      this.adicionaMensagem();
    }
    else{
    this.setState({ inputMensagem: event.target.value });
    }
  }

  onDoubleClickMensagem = (click) => {
      alert("Dois clicks");
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
        <BoxMensagens >
          {this.state.arrayMensagens.map((msg, index) => {
            if(msg.usuario == "eu" || msg.usuario == "Eu" == "EU"){
            return <BoxMensagemEu key = {index} 
            useDoubleClick={this.onDoubleClickMensagem} > 
              <strong>{msg.usuario}</strong>: {msg.textoMensagem}
            </BoxMensagemEu>
            }
            else{
              return <BoxMensagem key = {index} 
            useDoubleClick={this.onDoubleClickMensagem} > 
              <strong>{msg.usuario}</strong>: {msg.textoMensagem}
            </BoxMensagem>
            }
          })}
        </BoxMensagens>
        <BoxInputs>
          <InputNome
    
          onKeyPress = {this.onChangeInputUsuario}
            placeholder={'Nome'}
            onChange = {this.onChangeInputUsuario}
            value = {this.state.inputUsuario}
          />

          <InputMensagem 
           ref={textInput}
          onKeyPress = {this.onChangeInputMensagem}
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