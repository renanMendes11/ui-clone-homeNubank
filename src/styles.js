import styled, { css } from 'styled-components';
import {CgLogIn} from 'react-icons/cg';
import { AiOutlineArrowRight } from "react-icons/ai";
import relationMoneyPeople from './img/relationMoneyPeople.png';
import nuCommunity from './img/nuCommunity.png';
import blogImage from './img/blogImage.png';

export const Container = styled.div`
  
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`

export const Menu = styled.div`
    /* position: fixed; */
    display: flex;
    align-items:center;
    justify-content: space-between;   
`

export const MenuNav = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    img {
        height: 100px;
        width: 100px;
        top: 0px;
        margin-left: 25px;
    }
    ul {
        display: flex;
    }
    li {
        word-wrap: break-word;
        list-style-type: none;
        padding: 0 10px;
        a {
            font-size: 18px;
            font-weight: bold;
            color: rgba(17, 17, 17, 0.7);
            text-decoration: none;
            &:hover {
                color: rgb(213, 125, 255);
}
            }
        }
    }
`

export const MenuLogin = styled.div`
    display: flex;
    align-items: center; 
    /* padding-right: 50px; */
    margin-right: 30px;
`

export const LoginButton = styled.button `
    border: none;
    background: none;
    font-size: 18px;
    font-weight: bold;
    color: rgb(138, 5, 190);
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;


export const LoginIcon = styled(CgLogIn)`
    
`;

export const SignUp = styled.button `
    border: none;
    background: rgb(138, 5, 190);
    cursor: pointer;
    color: #fff;
    padding: 12px 20px;
    font-weight: 500;
    line-height: 1.2;
    font-size: 18px;
    border-radius: 30px;
    height: 3rem;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(142, 86, 190);
    color: #fff;
    width: 100%;
    padding: 124px 24px;

    img {
        max-width: 30%;
        height: auto;
    }

    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
    }

    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        margin-top: 15px;
        display: flex;
        align-items: center;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }
`
export const ArrowIcon = styled(AiOutlineArrowRight)``;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BannerButton = styled.button`
    border: none;
    cursor: pointer;
    margin-top: 30px;
    padding: 12px 20px;
    height: 3rem;
    background: #fff;
    color: rgb(138, 5, 190);
    font-weight: bold;
    line-height: 1.2;
    font-size: 18px;
    border-radius: 30px;
    width: 200px;
`;

export const BringYouHelp = styled.section`
    padding: 48px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        max-width: 319px;
        height: 375px;
    }


`;

export const BringYouHelpLeft = styled.div`
    max-width: 100%;
    padding: 20px;
    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
        margin-bottom: 15px;
    }
    
    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        font-weight: 500;
        color: #9359c1;        
        display: flex;
        align-items: center;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }
`;

export const DigitalAccount = styled.section`
    padding: 48px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f5f5f5;

    img {
        max-width: 50%;
        /* height: 375px; */
    }
`;

export const DigitalAccountLeft = styled.div`
    max-width: 100%;
    padding: 20px;
    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
        margin-bottom: 15px;
    }
    

    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        font-weight: 500;
        color: #9359c1;        
        display: flex;
        align-items: center;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }
`;

export const Bold = styled.p`
   a { 
        color: #8A05BE;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
   }
`;

export const CreditCard = styled.section`
    padding: 48px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        max-width: 18%;
    }

`;
export const CreditCardLeft = styled.div`
    max-width: 100%;
    padding: 20px;
    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
        margin-bottom: 15px;
    }
    

    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        font-weight: 500;
        color: #9359c1;        
        display: flex;
        align-items: center;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }
`;

export const BoldRewards = styled.p`
   a { 
        color: #C093FB;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
   }
`;

export const Rewards = styled.section`
    padding: 48px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #530082;

    img {
        max-width: 30%;
    }
`;

export const RewardsLeft = styled.div`
    max-width: 100%;
    padding: 20px;
    color: #fff;
    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
        margin-bottom: 15px;
    }
    

    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        font-weight: 500;
        color: #fff;        
        display: flex;
        align-items: center;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }

`;

export const RelationMoneyPeople = styled.article `
    max-width: 100%;
    height: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-size: cover;
    background-position: center center;
    background-color: rgb(101, 120, 136);
    background-image: url(${relationMoneyPeople});

    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
        margin-left: 60px;
        margin-bottom: 15px;
        color: #fff;     
    }
    

    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        font-weight: 500;
        color: #fff;        
        display: flex;
        align-items: center;
        margin-left: 60px;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }
`;

export const NuCommunity = styled.article `
    max-width: 100%;
    height: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-size: cover;
    background-position: center center;
    background-color: rgb(101, 120, 136);
    background-image: url(${nuCommunity});

    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
        margin-left: 60px;
        margin-bottom: 15px;
        color: #fff;     
    }
    

    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        font-weight: 500;
        color: #fff;        
        display: flex;
        align-items: center;
        margin-left: 60px;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }
`;

export const BlogSection = styled.article`
    max-width: 100%;
    min-height: 520px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: right center;
    background-color: #6c4195;
    background-image: url(${blogImage});

    h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1.16;
        margin-left: 60px;
        margin-bottom: 15px;
        color: #fff;     
    }
    

    span {
        cursor: pointer;
        line-height: 1.35;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        font-weight: 500;
        color: #fff;        
        display: flex;
        align-items: center;
        margin-left: 60px;

        svg {
            margin-top: 1px;
            margin-left: 5px;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #111111;
    color: #fff;
    padding: 40px 20px;
    border-bottom: 1px solid rgb(25, 25, 25);
`;

export const Row = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const RowSide = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-left: 40px; 
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    a {
        margin-bottom: 10px;
        font-weight: 500;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        line-height: 1.2;
        text-decoration: none;
        background: none;
        color: #fff;
    }
    a:hover {
        color: rgb(213, 125, 255);
    }

    p {
        color: rgb(245, 245, 245);
        margin: 0px 0px 32px;
        font-weight: 400;
        letter-spacing: -0.01em;
        font-size: 1.125rem;
        line-height: 1.32;
    }
`;
export const CopyrightContainer = styled.div`
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(25, 25, 25);
`;


export const Copyright = styled.div`
    display: flex;
    align-items: center;
    p {
        font-weight: 500;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        line-height: 1.2;
        text-decoration: none;
        background: none;
        color: #fff;
    }
    img {
        height: 150px;
        width: 150px;
        top: 0px;
        margin-left: 25px;
    }
`;
export const SocialMedias = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    svg {
        margin-right: 30px;
    }
`;
export const LanguageChoice = styled.div`
     background-color: #111111;
     padding: 40px;
     display: flex;
     align-items: center;
     justify-content: flex-end;

    label {
        cursor: pointer;
        font-weight: 500;
        letter-spacing: -0.03em;
        font-size: 1.125rem;
        line-height: 1.2;
        text-decoration: none;
        background: none;
        color: #fff;
        margin-right: 10px;
    }

    input {
        margin-right: 10px;
    }
`;