import React, { Component } from 'react';
import { Page, Container, A, Slogan, Paragrafo, Header, Text, Grupo } from './styles'
import logo from '../../assets/logo.svg';
import fundacao from '../../assets/fundacao.png';

export default class Main extends Component {
  render() {
    return (
      <>
        <Page id="page-home">
          <div>
            <Header>
              <header>
                <img src={logo} width={70} alt="logomarca"></img>
                <A id="a">
                  <a href="https://www.estudar.org.br/"><img src={fundacao} width={100} alt="fundacao" ></img></a>
                </A>
              </header>
            </Header>

            <Container id="content">
              <main>
                <Slogan>Parabéns, você está inscrito.</Slogan>
                <Paragrafo id="par">
                  Entre no grupo abaixo para receber o link de acesso.
                </Paragrafo>
                <Text id="txt">
                  O Workshop já começou! Acesse abaixo:
                </Text>
                <Grupo id="input" href="https://zoom.us/j/99072950684?pwd=VkxCZ2dHaExWNTVDNDVjeGs2bnJXZz09">
                  <bold>Entrar</bold>
                </Grupo>
              </main>
            </Container>
          </div>
        </Page>
      </>
    );
  }
}