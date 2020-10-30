import React from 'react';
import './App.css';

import logo from './img/logo.svg';
import bannerImg from './img/banner.png';
import fgtsImg from './img/fgts.png';
import phone from './img/phone.png';
import creditCard from './img/creditCard.png';
import rewards from './img/rewards.png';

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
  ArrowIcon,
  Details,
  BannerButton,
  BringYouHelp,
  BringYouHelpLeft,
  DigitalAccount,
  DigitalAccountLeft,
  CreditCard,
  CreditCardLeft,
  Bold,
  BoldRewards,
  Rewards,
  RewardsLeft,
  RelationMoneyPeople
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
            <span>Saiba como funciona <ArrowIcon/> </span>
            
            <BannerButton>Quero ser nubank</BannerButton>
          </Details>
          <img src={bannerImg} alt="banner_image"/>
        </Banner>
      </Header>

      <main>

        <BringYouHelp>
          <BringYouHelpLeft>
            <h1>Traga seu <br/> FGTS e Auxílio <br/> Emergencial <br/> para o Nubank</h1>
            <span>Confira os benefícios <ArrowIcon/> </span> 
          </BringYouHelpLeft>
          <img src={fgtsImg} alt="ftgs_image"/>
        </BringYouHelp>

        <DigitalAccount>
          <DigitalAccountLeft>
            <h1>
              <Bold> <a href="#">Conta do Nubank</a> </Bold> 
              Nossa conta digital <br/> com mais de 20 <br/> milhões de clientes <br/> em todo o Brasil.
            </h1>
            <span>Segura e sem complicações <ArrowIcon/> </span> 
          </DigitalAccountLeft>
          <img src={phone} alt="phone_image"/>
        </DigitalAccount>

        <CreditCard>
          <CreditCardLeft>
            <h1>
              <Bold> <a href="#">Cartão de Crédito</a> </Bold> 
              Pode chamar ele de <br/> roxinho. Além disso, <br/> pode chamar ele de <br/> moderno, gratuito e <br/> prático também.
            </h1>
            <span>Saiba mais <ArrowIcon/> </span> 
          </CreditCardLeft>
          <img src={creditCard} alt="creditCard_image"/>
        </CreditCard>

        <Rewards>
          <RewardsLeft>
            <h1>
              <BoldRewards> <a href="#">Rewards</a> </BoldRewards> 
              Um programa de <br/> pontos justo e fácil <br/> de usar.
            </h1>
            <span>Saiba mais <ArrowIcon/> </span> 
          </RewardsLeft>
          <img src={rewards} alt="rewards_image"/>
        </Rewards>

        <RelationMoneyPeople>
            <h1>
              Reinventando <br/> a relação das <br/> pessoas com <br/> o dinheiro
            </h1>
            <span>É nisso que acreditamos <ArrowIcon/> </span> 
        </RelationMoneyPeople>

      </main>
    </Container>
  );
}

export default App;
