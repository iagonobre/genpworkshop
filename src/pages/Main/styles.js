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
  color: #231440;
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

export const SubmitButton = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  position: relative;
  background-color: #13B0E5;
  width: 100%;
  max-width: 55px; 
  height: 63px;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;

  svg {
    width: 23px;
    height: 23px;
    margin-top: 5px;
    position: absolute;
    color: #f0f0f5;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const Butao = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  max-width: 390px; 
  margin-top: 15px;
  position: relative;
  align-items: center;
  justify-content: center;
  svg {
    width: 23px;
    height: 23px;
    left: 20px;
    top: 15px;
    position: absolute;
    color: #f0f0f5;
  }
  input[type="email"] {
    padding-left: 60px;
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
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    transition: border 0.2s ease 0s;
  }
  input:focus {
    border-style: solid;
    border-color: #13B0E5;
    border-image: initial;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  
`