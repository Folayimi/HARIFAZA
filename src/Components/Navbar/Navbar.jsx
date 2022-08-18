import React, {useState} from "react"
import {NavBar} from "./Navbar.Style"
import { useNavigate } from "react-router-dom"
import {OutlineBtn} from "../General.Style"
import brandlogo from "./Images/brandlogo.png"

const Navbar = (props) =>{
    let {
        mobile,
        active,
        setActive,
        signIn,
        setSignIn
    } = props
    const navigate = useNavigate()
    const [background,setBackground] = useState("rgba(0,0,0,0.3)")
    const navItems = [
        {
            item:"Services",
            link:"/services"
        },
        {
            item:"About",
            link:"/about"
        },
        {
            item:"Affiliate",
            link:"/affiliate"
        },        
    ]
    return(
        <>  
            <NavBar>
                <div 
                    className="navCont"
                    style={{background:background}}
                >

                    <div className="brand"
                        onClick={()=> {
                            navigate(`${'/'}`)}
                        }
                    >                        
                        <div className="brandLogo">
                            <img 
                                src={brandlogo} 
                                alt="brandlogo"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="brandName">HARIFAZA</div>
                    </div> 

                    <div className="nav">
                        <div>Categories</div>
                        {
                            navItems.map((items, i)=>{
                                return(                                    
                                    <div
                                        className={(active === i+1 && "navItem")}
                                        onClick={()=>{
                                            navigate(`${items.link}`)
                                            setActive(i+1)
                                        }}
                                    >{items.item}</div>
                                )
                            })
                        }
                    </div>   

                    <div className="sellSignUp">
                        <div className="sell">Sell</div>
                        <OutlineBtn>
                            SignUp
                        </OutlineBtn>
                    </div>
                </div>
            </NavBar>            
        </>
    )
}

export default Navbar;