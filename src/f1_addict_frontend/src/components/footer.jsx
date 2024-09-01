import "./footer.css";
import F1_img from "../assets/images/F1.svg.png";

export default function Footer() {
    return(
        <>
            <div className="footer">
            <div className="footerPartners">
                <img src={F1_img} alt="" style={{height: '30px'}}/><a href="https://formula1.com/en/toolbar/partners.html" target="_blank" style={{color: 'white'}}>Our Partners</a>
            </div>
            <div className="footerList">
                <div>
                    <ul>
                        <li>
                            <a href="#">Latest News</a>
                        </li>
                        <li>
                            <a href="#">What&apos;s F1</a>
                        </li>
                        <li>
                            <a href="#">Video</a>
                        </li>
                        <li>
                            <a href="#">Drivers</a>
                        </li>
                        <li>
                            <a href="#">Teams</a>
                        </li>
                        <li>
                            <a href="#">Schedule</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Standings</a>
                        </li>
                        <li>
                            <a href="#">2023 SEASON</a>
                        </li>
                        <li>
                            <a href="#">DRIVER STANDINGS</a>
                        </li>
                        <li>
                            <a href="#">CONSTRUCTOR STANDINGS</a>
                        </li>
                        <li>
                            <a href="#">ARCHIVE 1950-2022</a>
                        </li>
                        <li>
                            <a href="#">F1 AWARDS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Gaming</a>
                        </li>
                        <li>
                            <a href="#">ESPORTS</a>
                        </li>
                        <li>
                            <a href="#">FANTASY</a>
                        </li>
                        <li>
                            <a href="#">F1 23</a>
                        </li>
                        <li>
                            <a href="#">F1 MANAGER 23</a>
                        </li>
                        <li>
                            <a href="#">F1 PLAY</a>
                        </li>
                        <li>
                            <a href="#">F1 MOBILE RACING</a>
                        </li>
                        <li>
                            <a href="#">F1 CLASH</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Live Timing</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Tickets</a>
                        </li>
                        <li>
                            <a href="#">F1® Experiences</a>
                        </li>
                        <li>
                            <a href="#">Store</a>
                        </li>
                        <li>
                            <a href="#">Paddock Club</a>
                        </li>
                        <li>
                            <a href="#">F1® TV</a>
                        </li>
                        <li>
                            <a href="#">F1® Authentics</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Rules & Regulations</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}