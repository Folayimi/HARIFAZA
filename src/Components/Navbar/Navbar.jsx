import React, {useState} from "react"
import {NavBar} from "./Navbar.Style"
import { useNavigate } from "react-router-dom"
import {OutlineBtn} from "../General.Style"

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

                    <div className="brand">                        
                        <div className="brandLogo"></div>
                        <div className="brandName">HARIFAZA</div>
                    </div> 

                    <div className="nav">
                        <div
                            className={(active === 0 && "navItem")}
                        >
                            Categories
                        </div>
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
                        <div>Sell</div>
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