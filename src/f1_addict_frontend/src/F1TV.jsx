import Banner from './components/banner'
import Footer from './components/footer'
import { useState } from 'react'
import './F1TV.css'

export default function F1TV(){

    const [isShowSchedule, setIsShowSchedule] = useState(false);

    document.title = 'F1 TV';

    return (
        <>
            <Banner isShowScheduleFromParent={isShowSchedule}/>
            <div className="F1TVContent" onMouseOver={()=>setIsShowSchedule(false)}>
                <div className="playerWrapper">
                    <div className="playerBlock">
                        <div className="F1TV_titleBox">
                            <div>
                                <div className="playerButton">
                                    <svg width="30" height="30" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                </div>
                            </div>
                            <div className="F1TV_boxRight">
                                <div className="videoTitle">
                                    2023 Abu Dhabi Grand Prix
                                </div>
                                <div className="videoInfo">
                                    <div>
                                        <svg width="14" height="14"><defs><path id="time_svg__a" d="M5.833 11.667A5.834 5.834 0 115.835-.001a5.834 5.834 0 01-.002 11.668zm0-10.5a4.666 4.666 0 100 9.332 4.666 4.666 0 000-9.332zm.525 5.46c.406-.323.642-.812.642-1.33v-2.38H5.833v2.38a.54.54 0 01-.204.42L3.14 7.712l.723.91 2.496-1.995z"></path></defs><g fill="none" fillRule="evenodd" transform="translate(1.167 1.167)"><mask id="time_svg__b" fill="#fff"><use xlinkHref="#time_svg__a"></use></mask><use fill="#15151E" fillRule="nonzero" xlinkHref="#time_svg__a"></use><g fill="#fff" mask="url(#time_svg__b)"><path d="M-1.167-1.167h14v14h-14z"></path></g></g></svg>
                                        <p>02:09:28</p>
                                    </div>
                                    <div>
                                        <p>REPLAY</p>
                                    </div>
                                    <div>
                                        <svg className="steeringWheelSvg" width="16" height="16" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                        <p>ONBOARD CAMERAS</p>
                                    </div>
                                    <div>
                                        <p>FORMULA 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadowBox"></div>
                </div>
                <div className="mainContent">
                    <div className="mainContentWrapper">
                        <div className="raceInfo">
                            <div className="flagAndName">
                                <img src="src/assets/images/countries/UAE.png" alt="" />
                                <p>ABU DHABI</p>
                            </div>
                            <div className="fullRaceName">
                                <p>FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023</p>
                            </div>
                            <div className="TV_date">
                                <p>24 NOV - 26 NOV</p>
                            </div>
                        </div>

                        <div className="raceList">
                            <div className="listName">
                                <div className="listNameLeft">
                                    <p>2023 United States Grand Prix</p>
                                    <div className="listNameSvg">
                                        <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fillRule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlinkHref="#title_chevron_svg__a"></use></mask><use fill="#15151E" fillRule="nonzero" xlinkHref="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                                    </div>
                                </div>
                                <p>View All</p>
                            </div>
                            <div className="videoCards">
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/Race.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div>02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2023 United States Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/RaceHighlights.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>Race Highlights - USA</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxCategory">
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/PostRaceShow.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>Post-Race Show - USA</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxCategory">
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/PreRaceShow.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>Pre-Race Show - USA</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxCategory">
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="raceList">
                            <div className="listName">
                                <div className="listNameLeft">  
                                    <p>Continue Watching</p>
                                    <div className="listNameSvg">
                                        <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fillRule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlinkHref="#title_chevron_svg__a"></use></mask><use fill="#15151E" fillRule="nonzero" xlinkHref="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                                    </div>
                                </div>
                                <p>View All</p>
                            </div>
                            <div className="videoCards">
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/RaceMex.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div>02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2023 Mexico City Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/RaceIn30Mex.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>RACE IN 30 - Mexico City</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxCategory">
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/QualiMex.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2023 Mexico City GP - Qualifying</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/RaceMex22.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2022 Mexico City Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="raceList">
                            <div className="listName">
                                <div className="listNameLeft">
                                    <p>Tech Talk</p>
                                    <div className="listNameSvg">
                                        <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fillRule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlinkHref="#title_chevron_svg__a"></use></mask><use fill="#15151E" fillRule="nonzero" xlinkHref="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                                    </div>
                                </div>
                                <p>View All</p>
                            </div>
                            <div className="videoCards">
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videolist/TechTalk1.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div>02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2023 United States Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxCategory" style={{marginTop: '-20px'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/TechTalk2.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>Race Highlights - USA</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxCategory" style={{marginTop: '-20px'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/TechTalk3.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>Post-Race Show - USA</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxCategory" style={{marginTop: '-20px'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="raceList">
                            <div className="listName">
                                <div className="listNameLeft">
                                    <p>Documentaries</p>
                                    <div className="listNameSvg">
                                        <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fillRule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlinkHref="#title_chevron_svg__a"></use></mask><use fill="#15151E" fillRule="nonzero" xlinkHref="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                                    </div>
                                </div>
                                <p>View All</p>
                            </div>
                            <div className="videoCards">
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/Documentaries1.jpeg" alt="" style={{width: '95%'}}/>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/Documentaries2.jpeg" alt="" style={{width: '95%'}}/>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/Documentaries3.jpeg" alt="" style={{width: '95%'}}/>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/Documentaries4.jpeg" alt="" style={{width: '95%'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="raceList">
                            <div className="listName">
                                <div className="listNameLeft">  
                                    <p>Popular Races From The Archive</p>
                                    <div className="listNameSvg">
                                        <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fillRule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlinkHref="#title_chevron_svg__a"></use></mask><use fill="#15151E" fillRule="nonzero" xlinkHref="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                                    </div>
                                </div>
                                <p>View All</p>
                            </div>
                            <div className="videoCards">
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/Race.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div>02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2023 United States Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/RaceMex22.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2022 Mexico City Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/RaceAbuDhabi21.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2021 Abu Dhabi Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/RaceMex21.jpeg" alt=""/>
                                        <div className="videoPlayButton">
                                            <svg width="20" height="20" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="videoTitleBox">
                                        <div className="videoTitleInfo">
                                            <div className="timeDuration">02:09:28</div>
                                            <div>REPLAY</div>
                                        </div>
                                        <div className="videoName">
                                            <p>2021 Mexico City Grand Prix</p>
                                        </div>
                                        <div className="videoFeature">
                                            <div className="boxSvg">
                                                <svg className="steeringWheelSvg" width="18" height="18" viewBox="0 0 20 14.5"><path className="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                            </div>
                                            <div className="boxCategory" style={{marginLeft: '78%'}}>
                                                F1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="videoCards" style={{marginTop: '40px'}}>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/F2.jpeg" alt=""/>
                                    </div>
                                    <div className="lastTitle">
                                        <p>FORMULA 2</p>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/F3.jpeg" alt=""/>
                                    </div>
                                    <div className="lastTitle">
                                        <p>FORMULA 3</p>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/FA.jpeg" alt=""/>
                                    </div>
                                    <div className="lastTitle">
                                        <p>F1 ACADEMY</p>
                                    </div>
                                </div>
                                <div className="videoCard">
                                    <div className="videoCover">
                                        <img src="src/assets/images/F1TV/videoList/SC.jpeg" alt=""/>
                                    </div>
                                    <div className="lastTitle">
                                        <p>SUPERCUP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}