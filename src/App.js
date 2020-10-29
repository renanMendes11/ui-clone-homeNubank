import React from 'react';
import './App.css';

import logo from './img/logo.svg';
import bannerImg from './img/banner.png';
import fgtsImg from './img/fgts.png';

import { 
  Container,
  Header,
  Menu,
  MenuNav,
  MenuLogin,
  Banner,
  LoginButton,
  LoginIcon,
  SignUp,
  Details,
  BannerButton,
  BringYouHelp,
  BringYouHelpLeft
} from './styles';

function App() {
  return (
    <Container>
      <Header>
        <Menu>
          <MenuNav>
            <img src={logo} alt="logo-nubank"/>
            <ul>
              <li><a href="#"> Início </a> </li>
              <li><a href="#">Conta Digital</a></li>
              <li><a href="#">Cartão de Crédito</a></li>
              <li><a href="#">Pix (novo)</a></li>
              <li><a href="#">Rewards</a></li>
              <li><a href="#">Empréstimo</a></li>
              <li><a href="#">Conta PJ</a></li>
              <li><a href="#">Sobre nós</a></li>
            </ul>
          </MenuNav>

          <MenuLogin>
            <LoginButton>
              Login
              <LoginIcon size={25} />
            </LoginButton>
            <SignUp>Quero ser Nubank</SignUp>
          </MenuLogin>
        </Menu>

        <Banner>
          <Details>
            <h1>Pix: um novo <br/> jeito de fazer <br/> transferências e <br/> pagamentos</h1>
            <span>Saiba como funciona</span>
            <BannerButton>Quero ser nubank</BannerButton>
          </Details>
          <img src={bannerImg} alt="banner_image"/>
        </Banner>
      </Header>

      <main>
        <BringYouHelp>
          <BringYouHelpLeft>
            <h1>Traga seu <br/> FGTS e Auxílio <br/> Emergencial <br/> para o Nubank</h1>
            <span>Confira os benefícios </span>
          </BringYouHelpLeft>
          <img src={fgtsImg} alt="banner_image"/>
        </BringYouHelp>

      </main>
    </Container>
  );
}

export default App;
