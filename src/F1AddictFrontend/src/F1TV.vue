<script setup>
    import Footer from './components/footer.vue';


    document.title = 'F1 TV | Home';
    let username = localStorage.getItem('username') ? localStorage.getItem('username').toUpperCase() : '';
    let isShow = username.trim() === '' ? true : false;
    const logout = () => {
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');
        isShow = !isShow;
        location.reload();
    }

</script>

<template>
    <div class="banner">
        <div class="bannerWrapper">
            <div class="bannerLeft">
                <div class="f1tvimg">
                    <img src="./rescources/images/F1LogoMicroWhite.avif" alt="">
                </div>
                <div class="list">
                    <a href="#">2023 Season</a>
                </div>
                <div class="list">
                    <a href="#">Archive</a>
                </div>
                <div class="list">
                    <a href="#">Shows</a>
                </div>
                <div class="list">
                    <a href="#">Documentaries</a>
                </div>
                <div class="list">
                    <a href="#">My List</a>
                </div>
            </div>
            <div class="bannerRight">
                <div name="user" v-show="isShow">
                    <a href="/login" target="_blank"><button class="bannerButton">Log in</button></a>
                    <a href="/signup" target="_blank"><button class="bannerButton">Sign up</button></a>
                </div>
                <div name="user" v-show="!isShow">
                    <a href="/home"><button class="bannerButton" style="background-color: white; color: red; font-size: small; font-weight: 300; margin-right: 10px; padding: 0px 5px 0px 5px; width: 90%;">{{ username }}</button></a>
                    <a href="#"><button class="bannerButton" @click="logout">Log out</button></a>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="playerWrapper">
            <div class="playerBlock">
                <div class="titleBox">
                    <div>
                        <div class="playerButton">
                            <svg width="30" height="30" viewBox="0 0 18.1 20"><path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z"></path></svg>
                        </div>
                    </div>
                    <div class="boxRight">
                        <div class="videoTitle">
                            2023 United States Grand Prix
                        </div>
                        <div class="videoInfo">
                            <div>
                                <svg width="14" height="14"><defs><path id="time_svg__a" d="M5.833 11.667A5.834 5.834 0 115.835-.001a5.834 5.834 0 01-.002 11.668zm0-10.5a4.666 4.666 0 100 9.332 4.666 4.666 0 000-9.332zm.525 5.46c.406-.323.642-.812.642-1.33v-2.38H5.833v2.38a.54.54 0 01-.204.42L3.14 7.712l.723.91 2.496-1.995z"></path></defs><g fill="none" fill-rule="evenodd" transform="translate(1.167 1.167)"><mask id="time_svg__b" fill="#fff"><use xlink:href="#time_svg__a"></use></mask><use fill="#15151E" fill-rule="nonzero" xlink:href="#time_svg__a"></use><g fill="#fff" mask="url(#time_svg__b)"><path d="M-1.167-1.167h14v14h-14z"></path></g></g></svg>
                                <p>02:09:28</p>
                            </div>
                            <div>
                                <p>REPLAY</p>
                            </div>
                            <div>
                                <svg class="steeringWheelSvg" width="16" height="16" viewBox="0 0 20 14.5"><path class="steering_wheel_svg__st0" d="M15 8.7l.9-4.1c.5.1.9.3 1.3.4.5.2.9.7.9 1.3v.5c0 .7-.1 1.3-.3 2L15 8.7zM12.8 6c-1.8-.4-3.7-.4-5.5 0l-.5-2c2.1-.5 4.4-.5 6.5 0l-.5 2zM10 9.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-7.7-1C2.1 8 2 7.4 2 6.7v-.5c0-.6.4-1 .9-1.2.4-.1.8-.3 1.3-.4L5 8.7H2.3zM17.5 0l-.7.6c-.5.4-.6 1.1-.2 1.6.1.2.3.4.4.6-2.3-.7-4.6-1.1-7-1.1-2.4 0-4.7.4-7 1.1.1-.2.3-.4.4-.6.3-.5.3-1.2-.2-1.6L2.6 0c-3.7 4.1-3.4 10.5.7 14.1.1.1.2.2.4.3L5 12.9c-.4-.4-.9-.8-1.2-1.2-.2-.3-.2-.7.1-.9.1-.1.2-.1.4-.1h1.3c.2.6.7.9 1.3 1h6.2c.6-.1 1.1-.5 1.3-1h1.3c.3 0 .6.3.6.6 0 .1 0 .3-.1.4-.4.4-.8.9-1.2 1.2l1.3 1.6c4.3-3.5 5-9.8 1.5-14.1-.1-.2-.2-.3-.3-.4z"></path></svg>
                                <p>ONBOARD CAMERAS</p>
                            </div>
                            <div>
                                <p>FORMULA 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shadowBox"></div>
        </div>
        <div class="mainContent">
            <div class="mainContentWrapper">
                <div class="raceInfo">
                    <div class="flagAndName">
                        <img src="./rescources/images/countries/USA.avif" alt="">
                        <p>UNITED STATES</p>
                    </div>
                    <div class="fullRaceName">
                        <p>FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023</p>
                    </div>
                    <div class="date">
                        <p>20 OCT - 22 OCT</p>
                    </div>
                </div>

                <div class="raceList">
                    <div class="listName">
                        <div class="listNameLeft">
                            <p>2023 United States Grand Prix</p>
                            <div class="listNameSvg">
                                <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlink:href="#title_chevron_svg__a"></use></mask><use fill="#15151E" fill-rule="nonzero" xlink:href="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                            </div>
                        </div>
                        <p>View All</p>
                    </div>
                    <div class="videoCards">
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/Race.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div>02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2023 United States Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/RaceHighlights.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>Race Highlights - USA</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/PostRaceShow.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>Post-Race Show - USA</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/PreRaceShow.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>Pre-Race Show - USA</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="raceList">
                    <div class="listName">
                        <div class="listNameLeft">  
                            <p>Continue Watching</p>
                            <div class="listNameSvg">
                                <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlink:href="#title_chevron_svg__a"></use></mask><use fill="#15151E" fill-rule="nonzero" xlink:href="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                            </div>
                        </div>
                        <p>View All</p>
                    </div>
                    <div class="videoCards">
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/RaceMex.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div>02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2023 Mexico City Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/RaceIn30Mex.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>RACE IN 30 - Mexico City</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/QualiMex.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2023 Mexico City GP - Qualifying</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/RaceMex22.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2022 Mexico City Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="raceList">
                    <div class="listName">
                        <div class="listNameLeft">
                            <p>Tech Talk</p>
                            <div class="listNameSvg">
                                <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlink:href="#title_chevron_svg__a"></use></mask><use fill="#15151E" fill-rule="nonzero" xlink:href="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                            </div>
                        </div>
                        <p>View All</p>
                    </div>
                    <div class="videoCards">
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videolist/TechTalk1.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div>02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2023 United States Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/TechTalk2.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>Race Highlights - USA</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/TechTalk3.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>Post-Race Show - USA</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="raceList">
                    <div class="listName">
                        <div class="listNameLeft">
                            <p>Documentaries</p>
                            <div class="listNameSvg">
                                <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlink:href="#title_chevron_svg__a"></use></mask><use fill="#15151E" fill-rule="nonzero" xlink:href="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                            </div>
                        </div>
                        <p>View All</p>
                    </div>
                    <div class="videoCards">
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/Documentaries1.jpeg" alt="" style="width: 95%;">
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/Documentaries2.jpeg" alt="" style="width: 95%;">
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/Documentaries3.jpeg" alt="" style="width: 95%;">
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/Documentaries4.jpeg" alt="" style="width: 95%;">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="raceList">
                    <div class="listName">
                        <div class="listNameLeft">  
                            <p>Popular Races From The Archive</p>
                            <div class="listNameSvg">
                                <svg width="20" height="20" viewBox="0 0 10 20"><defs><path id="title_chevron_svg__a" d="M10 10c0 .802-.329 1.568-.91 2.12l-7.33 7.05-1.47-1.42 7.33-7a.997.997 0 000-1.42l-7.33-7L1.76.83l7.33 7.05c.581.552.91 1.318.91 2.12z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="title_chevron_svg__b" fill="#fff"><use xlink:href="#title_chevron_svg__a"></use></mask><use fill="#15151E" fill-rule="nonzero" xlink:href="#title_chevron_svg__a"></use><g fill="#E10600" mask="url(#title_chevron_svg__b)"><path d="M-7-2h24v24H-7z"></path></g></g></svg>
                            </div>
                        </div>
                        <p>View All</p>
                    </div>
                    <div class="videoCards">
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/Race.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div>02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2023 United States Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/RaceMex22.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2022 Mexico City Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/RaceAbuDhabi21.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2021 Abu Dhabi Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/RaceMex21.jpeg" alt="">
                            </div>
                            <div class="videoTitleBox">
                                <div class="videoTitleInfo">
                                    <div class="timeDuration">02:09:28</div>
                                    <div>REPLAY</div>
                                </div>
                                <div class="videoName">
                                    <p>2021 Mexico City Grand Prix</p>
                                </div>
                                <div class="videoFeature">
                                    F1
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="videoCards" style="margin-top: 40px;">
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/F2.jpeg" alt="">
                            </div>
                            <div class="lastTitle">
                                <p>FORMULA 2</p>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/F3.jpeg" alt="">
                            </div>
                            <div class="lastTitle">
                                <p>FORMULA 3</p>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/FA.jpeg" alt="">
                            </div>
                            <div class="lastTitle">
                                <p>F1 ACADEMY</p>
                            </div>
                        </div>
                        <div class="videoCard">
                            <div class="videoCover">
                                <img src="./rescources/images/F1TV/videoList/SC.jpeg" alt="">
                            </div>
                            <div class="lastTitle">
                                <p>SUPERCUP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>

<style scoped>
    .banner {
        width: 100%;
        position: fixed;
        z-index: 10;
        height: 90px;
        background-color: red;
    }
    
    .bannerWrapper {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    
    .bannerLeft {
        width: 70%;
        display: flex;
        justify-content: space-between;
    }

    .bannerRight {
        width: 30%;
        float: right;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .f1tvimg img {
        height: 40px;
        margin-top: -10px;
    }

    .bannerLeft div {
        padding-top: 35px;
        padding-left: 3%;
        padding-right: 3%;
        padding-bottom: 21px;
        font-family: Formula1;
        color: white;
    }

    .list:hover {
        background-color: #15151E;
        transition: all 0.3s;
    }

    .bannerLeft div a {
        color: white;
    }

    .bannerButton {
        background-color: red;
        border-radius: 10px;
        border: 2px solid white;
        font-size: 17px;
        font-family: Formula1;
        color: white;
        height: 45px;
        width: 100px;
        margin-left: 10px;
    }

    div[name="user"] { 
        display: flex;
        padding-top: 23px;
        margin-left: 55%;
    }

    div[name="user"]>a:nth-child(2)>button {
        background-color: black;
    }

    .content {
        overflow: hidden;
    }

    .playerWrapper {
        position: relative;
        z-index: 0;
        width: 100%;
    }
    
    .playerBlock {
        display: flex;
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        background-image: url("./rescources/images/F1TV/Race.jpeg");
        background-size: contain;
    }

    .shadowBox {
        position: relative;
        z-index: 5;
        width: 120%;
        height: 150px;
        margin: 0 auto;
        margin-top: -250px;
        margin-right: -100px;
        box-shadow: inset -100px -50px 40px 10px #15151E;
    }

    .titleBox {
        z-index: 6;
        position: relative;
        display: flex;
        width: 100%;
        margin-top: 400px;
        padding-bottom: 10%;
        margin-left: 100px;
        font-family: Formula1;
        font-weight: bold;
        font-size: xx-large;
        color: white;
    }

    .playerButton {
        position: relative;
        z-index: 10;
        margin-left: -10%;
        width: 70px;
        height: 70px;
        border-radius: 0px 20px 0px 0px;
        border: 0px;
        background-color: darkred;
        opacity: 0.5;
    }

    .playerButton svg {
        fill: white;
        margin-left: 30%;
        margin-top: 28%;
    }
    
    .playerButton:hover {
        opacity: 1;
        transition: all 0.3s;
        background-color: red;
    }

    .boxRight {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    .videoInfo {
        display: flex;
        margin-top: 10px;
    }

    .videoInfo div {
        display: flex;
        font-size: 10px;
        font-weight: lighter;
        color: #949498;
        padding-left: 15px;
        padding-right: 15px;
        border-right: 1px solid #949498;
    }

    .videoInfo div p {
        padding-top: 1px;
    }

    .videoInfo div svg {
        margin-right: 3px;
    }

    .videoInfo div:nth-child(1) {
        padding-left: 0px;
    }

    .videoInfo p:nth-last-child(1) {
        border-right: 0px;
    }

    .steeringWheelSvg {
        fill: #949498;
        padding-bottom: 2px;
    }

    .mainContent {
        position: relative;
        height: auto;
        background-color: #15151E;
    }

    .mainContentWrapper {
        margin: 0 auto;
        width: 75%;
        padding-top: 30px;
    }

    .raceInfo {
        display: flex;
        flex-direction: column;
        border-top: 8px solid red;
        border-right: 8px solid red;
        border-top-right-radius: 25px;
    }

    .flagAndName {
        display: flex;
        margin-top: 20px;
        font-family: Formula1;
        font-weight: bold;
        font-size: 40px;
        color: white;
    }

    .flagAndName img {
        height: 50px;
        margin-right: 15px;
    }

    .fullRaceName {
        margin-top: 10px;
        font-family: Formula1;
        font-size: 23px;
        font-weight: light;
        color: white;
    }

    .date p {
        display: block;
        width: 145px;
        margin-top: 10px;
        padding: 10px 15px 10px 15px;
        font-family: Formula1;
        font-size: 13px;
        font-weight: light;
        color: white;
        border-radius: 20px;
        background-color: #38383F;
    }

    .raceList {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    .listName {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: Formula1;
        font-size: 23px;
        font-weight: bold;
        color: white;
    }

    .listName p:nth-last-child(1) {
        font-weight: lighter;
        font-size: medium;
    }

    .listNameLeft {
        display: flex;
    }

    .listNameSvg {
        display: block;
        margin-left: 10px;
        padding-top: 2px;
    }

    .videoCards {
        display: flex;
        justify-content: space-between;
    }

    .videoCard {
        display: flex;
        flex-direction: column;
        font-family: Formula1;
        color: white;
        font-size: 10px;
        font-weight: lighter;
    }

    .videoCard img{
        width: 95%;
    }

    .videoTitleInfo {
        padding: 10px 0px 5px;
        display: flex;
        color: #949498;
    }

    .videoTitleInfo div {
        padding-left: 5px;
        padding-right: 5px;
        border-right: 1px solid #949498;
    }

    .videoTitleInfo div:nth-last-child(1) {
        border: 0px;
    }

    .videoTitleInfo div:nth-child(1) {
        padding-left: 0px;
    }

    .videoName {
        padding-top: 5px;
        font-size: 13px;
    }

    .videoTitleBox {
        background-color: #212127;
        width: 95%;
        height: 130px;
        border-radius: 0px 0px 20px 20px;
        padding-left: 10px;
    }

    .videoFeature {
        display: inline-block;
        margin-top: 61px;
        margin-left: 88%;
        border-bottom: 4px solid red;
        font-size: 10px;
        padding-bottom: 5px;
        color: red;
    }

    .lastTitle {
        background-color: #212127;
        width: 95%;
        height: 110px;
        border-radius: 0px 0px 20px 20px;
        padding-left: 10px;
        font-weight: bold;
        font-size: large;
        padding-top: 40px;
        padding-left: 25%;
    }

    .lastTitle:hover {
        background-color: white;
        color: black;
        transition: all 0.3s;
    }
</style>