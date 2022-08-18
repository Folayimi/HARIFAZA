import React, {useState} from "react"
import {NavBar} from "./Navbar.Style"

const Navbar = (props) =>{
    let {
        mobile,
        active,
        setActive,
        signIn,
        setSignIn
    } = props
    const [background,setBackground] = useState("#320d3e")
    return(
        <>  
            <NavBar>
                <div 
                    className="navCont"
                    style={{background:background}}
                >
                    <div className="brand">                        
                        <div className="brandLogo"></div>
                        <div className="brandName">HARIFAZA</div>
                    </div>                    
                </div>
            </NavBar>            
        </>
    )
}

export default Navbar;