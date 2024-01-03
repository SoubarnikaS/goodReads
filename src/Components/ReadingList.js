import ONav from "./ONav";
import { Link } from "react-router-dom";

const ReadingList = () => {
    return (
        <>
            <ONav />
            <div className="favBody">

                <div class="terminal-loaderRL">
                    <div class="terminal-header">
                        <div class="terminal-title">Status</div>
                        <div class="terminal-controls">
                            <div class="control close"></div>
                            <div class="control minimize"></div>
                            <div class="control maximize"></div>
                        </div>
                    </div>
                    <div class="textt">No Books to Read!...😔💔</div>
                </div>
                <div className="expB">
                    <Link to='/explore'>
                        <button className="favExplore">Add to MyList!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ReadingList