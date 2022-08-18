import styled from 'styled-components';
import Theme from '../Theme'

export const NavBar = styled.div`
    .navCont{        
        padding:1em 2em;
        background:blue;
        color:white;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .brand{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:1em;

        .brandLogo{
            width:2em;
            height:2em;
            background:red;
            cursor:pointer;
        }
        .brandName{
            color:${Theme.textColor};
            font-size:1.5em;
            font-weight:bolder;
            cursor:pointer;
        }
    }    
    .nav{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:2em;
        font-size:1.2em;
        font-weight:500;

        .navItem{
            color:${Theme.textColor}            
        }        
    }

    .nav > div{
        cursor:pointer;
    }

    .nav > div:hover{
        color:${Theme.textColor}  
    }

    .sellSignUp{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:1em;
        font-size:1.2em;
        font-weight:500
    }

    .sellSignUp > div{
        cursor:pointer;
    }

    .sellSignUp > .sell:hover{
        color:${Theme.textColor}
    }

`