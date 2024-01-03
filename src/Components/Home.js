import ONav from "./ONav";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <ONav />


            <div className="homeWrapper" >
                <div className="sidePanel">
                    <div className="sideDiv">
                        <div className="sideButtons">
                            <li className="listH">Highest Rated Novels</li>
                            <li className="listH">Timeless Classics</li>
                            <li className="listH">Book Donations</li>
                            <li className="listH">Editor's Picks</li>
                            <li className="listH">Pre-Owned Library</li>
                            <li className="listH">Reader's Community</li>
                        </div>
                        <li className="thoughts  text-focus-in ">What's on your mind?</li>
                    </div>
                </div>
                <div className="sideWrapper">
                    <div className="side">
                        {/* <div className="voting">
                            <span className="voteText">
                                A good book is a secret garden, blooming with the flowers of imagination.
                            </span>
                            <button className="voteButton">Vote For The Best Book Of 2023!</button>
                        </div> */}
                        <div className="options">
                            <div class="cardH" style = {{backgroundColor:'transparent'}}>
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>My Reviews</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <Link to ='/fav' style={{textDecoration:'none',color:'rgb(247, 133, 68)'}}>
                                            <strong>Add to Favourites</strong>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                        <Link to ='/readList' style={{textDecoration:'none',color:'rgb(247, 133, 68)'}}>
                                            <strong>My Reading List</strong>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>Rent Books</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>Write A Review</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Home;

