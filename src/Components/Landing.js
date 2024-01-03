import { Link } from "react-router-dom";
const Landing =()=>{
    return(
        <>
            

            <div className="body">

          
            <div className = "Bg">
                <div className = "wrapper">
    
                    <div className = "slogan">
                        <span className = "the">
                            The
                        </span>
                        <span className = "gRead">
                            goodReads
                        </span>
                        <span className = "phrase">
                            Where Every Page is a New Beginning.
                        </span>
                    </div>

                    <div className = "buttons">
                        <ul className = "links">

                            <Link to = '/login'>
                                <li>
                                    <input type = "submit" value = "Log In" className = "input"></input>
                                </li>
                            </Link>
                            <Link to ='/register'>
                                <li>
                                    <input type = "submit" value = "Sign Up" className = "input"></input>
                                </li>
                            </Link>
                        </ul>
                        <div className="exp">
                            <Link to ='/explore'>
                                <li>
                                    <input type = "submit" value = "Explore" className = "exploreBtn"></input>
                                </li>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
            </div>
           

        </>
    )
}

export default Landing;