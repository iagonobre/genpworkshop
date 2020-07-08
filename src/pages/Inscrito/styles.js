import styled from 'styled-components';
import imageBackground from '../../assets/home-background.svg';
// Title = h3
// Slogan = h1
// Paragrafo = p
// A = a
// Butao = button

export const Page = styled.div`
  height: 100vh;
  background: url(${imageBackground}) no-repeat;
  background-position: 50vw bottom;
`

export const Container = styled.main`
  width: 90%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  main {
    max-width: 600px;
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #333;

    a:hover {
      border-color: #13B0E5;
      transition: border 0.2s ease 0s;
    }
  }
`

export const Slogan = styled.h1`
  font-size: 45px;
  color: #46C7F0;
  font-family: 'Ubuntu', sans-serif;
  line-height: 45px;
`

export const Paragrafo = styled.p`
  margin-top: 24px;
  font-size: 21px;
  line-height: 28px;
  color: #333;
`

export const Text = styled.p`
  margin-top: 15px;
  font-size: 21px;
  line-height: 28px;
  color: #333;
  margin-top: 20px;
  font-size: 17px;
`

export const Header = styled.div`   
  background: #FECA52;
`

export const A = styled.div`
  display: flex;
  a{
    display: flex;
  }
`

export const Grupo = styled.a`
  margin-top: 20px;
  width: 100%;
  max-width: 320px; 
  height: 55px;
  font-size: 18px;
  color: white;
  font-family: 'Roboto', sans-serif;
  background-color: #46C7F0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 4px;
  border-style: solid;
  border-color: #46C7F0;
  border-image: initial;
  border-radius: 8px;
`