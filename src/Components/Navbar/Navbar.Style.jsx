import styled from 'styled-components';
import Theme from '../Theme'

export const NavBar = styled.div`
    .navCont{        
        margin:0em 2em;
        background:blue;
        color:white;
    }
    .brand{
        display:flex;
        justify-content:center;
        align-items:center;

        .brandLogo{
            width:2em;
            height:2em;
            background:red;
        }
        .brandName{
            color:${Theme.textColor};
            font-size:2em;
            font-weight:bolder;
        }
    }


`