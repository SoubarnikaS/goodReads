import { Link } from "react-router-dom";
import { LogOut } from 'lucide-react';

const ONav = () => {
    return (
        <>
            <header class="Onavigation">
                <ul class="naviLinks">

                    <Link to='/home' className="NavLink">
                        <li class="brand">
                            goodReads
                        </li>
                    </Link>

                    <ul className="explore">
                        <Link to='/explore' className="NavLink">
                            <li>
                                Explore
                            </li>
                        </Link>
                    </ul>

                </ul>

                <ul class="logout">
                    <Link to='/' >
                        <li className="newLinks">
                            <LogOut size={34} strokeWidth={2} />
                        </li>
                    </Link>
                </ul>

            </header>
        </>
    )
}

export default ONav;

