import Banner from './components/banner';
import Footer from './components/footer';
import './home.css';

export default function Home(){
    return(
        <>
            <Banner/>
            <div name="content" className="content" onMouseOver="">
                <div className="contentWrapper">
                    <div className="news-box">
                        <div className="box-left">
                            <p className="cardTitle" style={{ marginTop: '30px'}}>FEATURE</p>
                            <div className="title-left"><h2><a href="#">5 Winners and 5 Losers from Abu Dhabi – Who rounded off the season on a high?</a></h2></div>
                            <img className="left-img" src="src/assets/images/mainPageLeftImage.avif" alt=""/>
                            <div className="left-layer"></div>
                        </div>
                        <div className="boxRight">
                            <div className="box-upper-right">
                                <div className="left">
                                    <img className="right-image" src="src/assets/images/right-1.avif" alt=""/>
                                    <div className="titleBox">
                                        <p className="cardTitle">NEWS</p>
                                        <p><a href="#">&apos;This car will go down in the history books&apos; – Horner reflects on &apos;phenomenal&apos; Red Bull season</a></p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img className="right-image" src="src/assets/images/right-2.avif" alt=""/>
                                    <div className="titleBox">
                                        <p className="cardTitle">FEATURE</p>
                                        <p><a href="#">F1 NATION: Verstappen signs off in style and Mercedes grab P2 – it&apos;s our Abu Dhabi Grand Prix review</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-mid-right">
                                <div className="left">
                                    <img className="right-image" src="src/assets/images/right-3.avif" alt=""/>
                                    <div className="titleBox">
                                        <p className="cardTitle">NEWS</p>
                                        <p><a href="#">Hamilton admits final race of season &apos;couldn&apos;t have been much worse&apos; with Red Bull&apos;s pace &apos;definitely a concern&apos; for 2024</a></p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img className="right-image" src="src/assets/images/right-4.avif" alt=""/>
                                    <div className="titleBox">
                                        <p className="cardTitle">FEATURE</p>
                                        <p><a href="#">&apos;It looks fast&apos; – Albon &apos;excited&apos; by Williams&apos; 2024 car after helping team seal P7 in the championship in Abu Dhabi</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-lower-right">
                                <div className="left">
                                    <img className="right-image" src="src/assets/images/right-5.avif" alt=""/>
                                    <div className="titleBox">
                                        <p className="cardTitle">POLL</p>
                                        <p><a href="#">&apos;My best season since 2012&apos; – Alonso full of praise for Aston Martin after bagging fourth in the drivers&apos; championship</a></p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img className="right-image" src="src/assets/images/right-6.avif" alt=""/>
                                    <div className="titleBox">
                                        <p className="cardTitle">FEATURE</p>
                                        <p><a href="#">FACTS AND STATS: Verstappen becomes first driver in history to lead 1,000 laps in a season</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fantasyWrapper">
                    <div className="fantasyLeft">
                        <b>F1 Fantasy</b>
                        <p>Race your way to the top with Official F1 Fantasy and win incredible prizes</p>
                        <div>
                            <a href="#"><button className="fantasyButton">Play Now</button></a>
                        </div>
                    </div>
                    <div className="fantasyRight">
                        <img className="fantasyImage" src="src/assets/images/whoWouldUPick.avif" alt=""/>
                    </div>
                </div>

                <div className="editorsPick">
                    <div className="editorsPickWrapper">
                        <div className="editorsLeft">
                            <div style={{ padding: '10px 0px 0px 10px' }}>
                                <h2 style={{ fontSize: '40px' }}>Editor&apos;s Pick</h2>
                            </div>
                            <div className="editorPhoto">
                                <img src="src/assets/images/editor-cover.png" alt=""/>
                            </div>
                        </div>
                        <div className="editorsRight">
                            <div className="box-upper-right" style={{ marginRight: '20px' }}>
                                <div className="left">
                                    <img className="right-image" src="src/assets/images/right-1.avif" alt=""/>
                                    <div className="titleBox" style={{ height: '80%' }}>
                                        <p className="cardTitle">NEWS</p>
                                        <p><a href="#">&apos;I&apos;m more than proud&apos; – Frederic Vasseur reflects on &apos;emotional&apos; first win as Ferrari team boss</a></p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img className="right-image" src="src/assets/images/right-2.avif" alt=""/>
                                    <div className="titleBox" style={{ height: '80%' }}>
                                        <p className="cardTitle">FEATURE</p>
                                        <p><a href="#">PALMER: What impressive Liam Lawson needs to do next to prove he deserves a full-time race seat in F1</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-mid-right" style={{ marginTop: '170px', marginRight: '20px' }}>
                                <div className="left">
                                    <div className="titleBox" style={{ height: '80%' }}>
                                        <p className="cardTitle">POLL</p>
                                        <p><a href="#">THIS WEEK IN F1: 10 quiz questions on all the F1 news after the Singapore Grand Prix</a></p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="titleBox" style={{ height: '80%' }}>
                                        <p className="cardTitle">FEATURE</p>
                                        <p><a href="#">IT&apos;S RACE WEEK: 5 storylines we&apos;re excited about ahead of the 2023 Japanese Grand Prix</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fantasyWrapper">
                    <div className="fantasyLeft">
                        <b>Live Timing Data</b>
                        <p>Dive into every digit of every session with Live Timing data and maximise your race</p>
                        <div>
                            <a href="#"><button className="fantasyButton" style={{ width: '220px', height: '50px' }}>EXPLORE LIVE TIMING</button></a>
                        </div>
                    </div>
                    <div className="fantasyRight">
                        <img className="fantasyImage" src="src/assets/images/timing_data.avif" alt=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}