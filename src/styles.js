import styled from 'styled-components';
import {CgLogIn} from 'react-icons/cg';

export const Container = styled.div`
  
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`

export const Menu = styled.div`
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
    }
`

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
        /* margin-top: 30px; */
    }


`;