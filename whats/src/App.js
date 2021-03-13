import React from 'react';
import styled from 'styled-components'
import iconeEnviar from './img/envia-icone.svg'
import iconeResponder from './img/reply_icon-icons.com_50050.png'

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  box-sizing: border-box;
  border: 1px solid black;
  height: 100vh;
  width: 100%;
  max-width: 600px;
  margin: auto;
  background-color: #ECE5DD;

`

const BoxMensagens = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  padding: 20px;
  justify-content: flex-start;
  overflow-y: auto;
`

const BoxInputs = styled.div`
  padding: 20px;
  display: flex;
`

const InputNome = styled.input`
margin:5px;
  font-size: 18px;
  padding: 5px;
  width: 100px;
`

const InputMensagem = styled.input`
  flex-grow: 1;
  margin:5px;
  font-size: 18px;
  padding: 5px;
  width: 100px;
`
let ButtonEnviar = styled.div`
background-color: #25D366AA;
font-size: 18px;
  cursor: pointer;
  display: flex;
  width:40px;
  height: 40px;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  background-image:url(iconeEnviar);
:hover{
background-color: #25D366;
}`

const BoxMensagem = styled.div`
  border-radius: 3px;
  background-color: #DCF8C6;
  margin: 5px;
  max-width: 80%;
  display:flex;
  flex-direction: column;
  font-size:18px;
  p{
    padding: 2px;
    margin: 2px;
  }
  p strong{
    color: #25D366;
  }
`
const BoxMensagemEu = styled(BoxMensagem)`
  background-color: #FFFFFF;
  align-self: flex-end;

`

const MensagemTopo = styled.div`
  height: 20px;
  display: flex;
  justify-content: space-between;
  img{
    cursor: pointer;
    opacity: 0.4;
  }
  img:hover{
    opacity: 1;
  }
`
const MensagemResposta = styled.p`{
  background-color: #e9e9e9;

}` 

const textInput = React.createRef();

let timer;
let clicks = 0;

class App extends React.Component {
  state = {
    arrayMensagens: [{
      usuario: "Adimin",
      textoMensagem: "Este é o seu whats use com responsabilidade",
      resposta: false
    }],
    inputUsuario: '',
    inputMensagem: '',
    resposta: false
  }
  onChangeInputUsuario = (event) => {
    if (event.key == "Enter") {
      textInput.current.focus();
    }
    else {
      this.setState({ inputUsuario: event.target.value });
    }
  }

  onChangeInputMensagem = (event) => {
    if (event.key == "Enter") {
      this.adicionaMensagem();
    }
    else {
      this.setState({ inputMensagem: event.target.value });
    }
  }
  onDoubleClickMensagem = (index, event) => {

    if (clicks === 0) {
      clicks++;
    }
    if (clicks == 1) {
      timer = setTimeout(() => {
        clicks = 0;
      }, 200);
      clicks++;
    }
    else if (clicks == 2) {
      let novoArrayMensagens = [...this.state.arrayMensagens]
      novoArrayMensagens.splice(index, 1);
      this.setState(
        { arrayMensagens: novoArrayMensagens }
      )
      clicks = 0;
    }
  }

  adicionaMensagem = () => {
    if (this.state.inputMensagem !== "" && this.state.inputUsuario !== "") {
      const novaMsg = {
        usuario: this.state.inputUsuario,
        textoMensagem: this.state.inputMensagem,
        resposta: false
      }

      const novoArrayMensagens = [novaMsg, ...this.state.arrayMensagens]

      this.setState({ arrayMensagens: novoArrayMensagens, inputMensagem: '' })
    }
    else if (this.state.inputMensagem !== "" && this.state.inputUsuario === "") {
      const novaMsg = {
        usuario: "Anônimo",
        textoMensagem: this.state.inputMensagem,
        resposta: false
      }
      const novoArrayMensagens = [novaMsg, ...this.state.arrayMensagens]

      this.setState({ arrayMensagens: novoArrayMensagens, inputMensagem: '' })
    }
  }

  onClickResponder = (index, event) => {
    event = event;
    if (true) {
      // console.log("aqui", index, event);
      clicks = 0;
      if (this.state.inputMensagem !== "" && this.state.inputUsuario !== "") {

        let novoArrayMensagens = [...this.state.arrayMensagens]

        const novaMsg = {
          usuario: this.state.inputUsuario,
          textoMensagem: this.state.inputMensagem,
          resposta: true,
          repostaUsuario: novoArrayMensagens[index].usuario,
          respostaTextoMensagem: novoArrayMensagens[index].textoMensagem
        }
        novoArrayMensagens = [novaMsg, ...this.state.arrayMensagens]
        this.setState({ arrayMensagens: novoArrayMensagens, inputMensagem: '' })
      }
      else if (this.state.inputMensagem !== "" && this.state.inputUsuario === "") {
        let novoArrayMensagens = [...this.state.arrayMensagens]

        const novaMsg = {
          usuario: "Anônimo",
          textoMensagem: this.state.inputMensagem,
          resposta: true,
          repostaUsuario: novoArrayMensagens[index].usuario,
          respostaTextoMensagem: novoArrayMensagens[index].textoMensagem
        }

        novoArrayMensagens = [novaMsg, ...this.state.arrayMensagens]
        this.setState({ arrayMensagens: novoArrayMensagens, inputMensagem: '' })
      }

    }
  }
  render() {
    return (
      <Todo>
        <BoxMensagens >
          {this.state.arrayMensagens.map((msg, index) => {
            if (msg.resposta) {
              if (msg.usuario === "eu" || msg.usuario === "Eu" || msg.usuario === "EU") {
                return <BoxMensagemEu key={index}
                  onClick={this.onDoubleClickMensagem.bind(null, index)} >
                     <MensagemResposta>
                 <p>Resposta: <strong>{msg.repostaUsuario}</strong></p>
                 <p>{msg.respostaTextoMensagem}</p>
               </MensagemResposta>
             <MensagemTopo>
               <p> </p>
                    <img src={iconeResponder} onClick={this.onClickResponder.bind(null, index)}></img>
                  </MensagemTopo>       
                  <p>{msg.textoMensagem}</p>
                </BoxMensagemEu>
              }
              else {
                return <BoxMensagem key={index}
                  onClick={this.onDoubleClickMensagem.bind(null, index)} >
                     <MensagemResposta>
                 <p>Resposta: <strong>{msg.repostaUsuario}</strong></p>
                 <p>{msg.respostaTextoMensagem}</p>
               </MensagemResposta>
                  <MensagemTopo><p><strong>{msg.usuario}</strong> </p>
                    <img src={iconeResponder} onClick={this.onClickResponder.bind(null, index)}></img>
                  </MensagemTopo>
                  <p>{msg.textoMensagem}</p>
                </BoxMensagem>

              }
            }
            else {
              if (msg.usuario === "eu" || msg.usuario === "Eu" || msg.usuario === "EU") {
                return <BoxMensagemEu key={index}
                  onClick={this.onDoubleClickMensagem.bind(null, index)} >
             <MensagemTopo><p> </p>
                    <img src={iconeResponder} onClick={this.onClickResponder.bind(null, index)}></img>
                  </MensagemTopo>       
                  <p>{msg.textoMensagem}</p>
                </BoxMensagemEu>
              }
              else {
                return <BoxMensagem key={index}
                  onClick={this.onDoubleClickMensagem.bind(null, index)} >
                  <MensagemTopo><p><strong>{msg.usuario}</strong> </p>
                    <img src={iconeResponder} onClick={this.onClickResponder.bind(null, index)}></img>
                  </MensagemTopo>
                  <p>{msg.textoMensagem}</p>
                </BoxMensagem>

              }
            }
          })}

        </BoxMensagens>
        <BoxInputs>
          <InputNome
            onKeyPress={this.onChangeInputUsuario}
            placeholder={'Nome'}
            onChange={this.onChangeInputUsuario}
            value={this.state.inputUsuario}
          />

          <InputMensagem
            ref={textInput}
            onKeyPress={this.onChangeInputMensagem}
            placeholder={'Mensagem'}
            onChange={this.onChangeInputMensagem}
            value={this.state.inputMensagem}
          />
          <ButtonEnviar onClick={this.adicionaMensagem}>
            <img src={iconeEnviar} />
          </ButtonEnviar>
        </BoxInputs>
      </Todo>
    );
  }
}
export default App;