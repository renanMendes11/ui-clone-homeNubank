import React from 'react';
import './App.css';

import logo from './img/logo.svg';
import bannerImg from './img/banner.png';
import fgtsImg from './img/fgts.png';
import phone from './img/phone.png';
import creditCard from './img/creditCard.png';
import rewards from './img/rewards.png';
import blogImage from './img/blogImage.png';

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
  RelationMoneyPeople,
  NuCommunity,
  BlogSection,
  Footer,
  Row,
  RowSide,
  CopyrightContainer,
  Copyright,
  SocialMedias,
  LanguageChoice,
} from './styles';
import { CgFacebook, CgInstagram, CgTwitter, CgYoutube } from 'react-icons/cg';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

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
        <NuCommunity>
            <h1>
              NuCommunity<br/> <br/> A comunidade <br/> oficial do Nubank<br/>
            </h1>
            <span>Tire dúvidas, compartilhe ideias e faça parte <ArrowIcon/> </span> 
        </NuCommunity>

        <BlogSection>
            <h1>
            Um blog para você<br/> repensar o seu <br/> dinheiro
            </h1>
            <span>Conheça o Fala, Nubank <ArrowIcon/> </span> 
        </BlogSection>
      </main>

      <Footer>
        <Row>
          <RowSide>
            <p>Nubank</p>
            <a href="#">Sobre nós</a>
            <a href="#">Carreias</a>
            <a href="#">Perguntas Frequentes</a>
            <a href="#">Contato</a>
            <a href="#">Imprensa</a>
          </RowSide>
          <RowSide>
            <p>Produtos</p>
            <a href="#">Conta Digital</a>
            <a href="#">Cartão de Crédito</a>
            <a href="#">Rewards</a>
            <a href="#">Empréstimo</a>
            <a href="#">Conta PJ</a>
          </RowSide>
        </Row>
        <Row>
        <RowSide>
            <p>Explore</p>
            <a href="#">Comunidade</a>
            <a href="#">Blog</a>
            <a href="#">Newsletter</a>
            <a href="#">México</a>
            <a href="#">Argentina</a>
            <a href="#">Colômbia</a>
          </RowSide>
          <RowSide>
            <p>Veja Também</p>
            <a href="#">Auxílio Emergencial e FGTS</a>
            <a href="#">Tudo sobre o Pix</a>
          </RowSide>
        </Row>
        <Row>
          <RowSide>
            <p>Transparência</p>
            <a href="#">Política de Privacidade</a>
            <a href="#">Política de Compliance</a>
            <a href="#">Contratos</a>
            <a href="#">Política de Segurança</a>
            <a href="#">Relatórios Financeiros</a>
            <a href="#">Ética & Compliance</a>
            <a href="#">Dados Abertos</a>
            <a href="#">SCR</a>
          </RowSide>
          <RowSide>
            <p>Ouvidoria</p>
            <a href="#">0800 887 0463</a>
            <a href="#">ouvidoria@nubank.com.br</a>
            <a href="#">Atendimento das 9h às 18h (dias úteis)</a>
          </RowSide>
        </Row>
        <Row>
        <RowSide>
            <p>Fale com a gente</p>
            <a href="#">0800 608 6236</a>
            <a href="#">meajuda@nubank.com.br</a>
            <a href="#">Atendimento 24h</a>
          </RowSide>
          <RowSide>
            <p>Baixe o app</p>
            <a href="#"></a>
            <a href="#"></a>
          </RowSide>
        </Row>
      </Footer>

      <CopyrightContainer>
        <Copyright>
          <img src={logo} alt="logo-nubank"/>
          <div>
            <p>Nu Pagamentos S.A</p>
            <p>Rua Capote Valente, 39 - São Paulo, SP - 05409-000</p>
          </div>
        </Copyright>
        <SocialMedias>
          <AiFillFacebook size={30} color='#fff' />
          <AiFillInstagram size={30} color='#fff'/>
          <AiFillLinkedin size={30} color='#fff'/>
          <AiFillYoutube size={30} color='#fff'/>
          <AiOutlineTwitter size={30} color='#fff'/>
        </SocialMedias>
      </CopyrightContainer>

      <LanguageChoice>
        <label htmlFor='portugues'>Português</label>
        <input type="radio" name="portugues" id="portugues"/>
        <label for='english' >English</label>
        <input type="radio" name="english" id="english"/>
      </LanguageChoice>

    </Container>
  );
}

export default App;
