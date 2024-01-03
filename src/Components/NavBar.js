import { Link } from "react-router-dom";
import '../Assests/CSS/NavBar.css'

const NavBar =()=>{
    return(
        <>
            <header class = "navigation">
                <ul class = "naviLinks">
                    
                    <Link to = '/' className="NavLink">
                        <li class = "brand">
                            goodReads
                        </li>

                    </Link>
                </ul>
            </header>
        </>
    )
}

export default NavBar;

