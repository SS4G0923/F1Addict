<script setup>
    import Banner from './components/banner.vue';
    import Footer from './components/footer.vue';
    import { useScheduleDetailStore } from './stores/scheduleDetail';
    const scheduleDetailStore = useScheduleDetailStore();
</script>

<template>
    <Banner/>
    
    <div name="content" class="content" @mouseover="scheduleDetailStore.toFalse">
        <div class="contentWrapper">
            <div class="news-box">
                <div class="box-left">
                    <p style="margin-top: 30px; color: #E10600; font-size: 10px;">FEATURE</p>
                    <div class="title-left"><h2><a href="#">POWER RANKINGS: One driver shines under the lights as the judges scores come in from Singapore</a></h2></div>
                    <img class="left-img" src="./rescources/images/powerRankings.avif" alt="">
                    <div class="left-layer"></div>
                </div>
                <div class="boxRight">
                    <div class="box-upper-right">
                        <div class="left">
                            <img class="right-image" src="./rescources/images/right-1.avif" alt="">
                            <div class="titleBox">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">NEWS</p>
                                <p><a href="#">‘I’m more than proud’ – Frederic Vasseur reflects on ‘emotional’ first win as Ferrari team boss</a></p>
                            </div>
                        </div>
                        <div class="right">
                            <img class="right-image" src="./rescources/images/right-2.avif" alt="">
                            <div class="titleBox">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">FEATURE</p>
                                <p><a href="#">PALMER: What impressive Liam Lawson needs to do next to prove he deserves a full-time race seat in F1</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="box-mid-right">
                        <div class="left">
                            <img class="right-image" src="./rescources/images/right-3.avif" alt="">
                            <div class="titleBox">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">NEWS</p>
                                <p><a href="#">Piastri signs multi-year extension with McLaren until the end of 2026</a></p>
                            </div>
                        </div>
                        <div class="right">
                            <img class="right-image" src="./rescources/images/right-4.avif" alt="">
                            <div class="titleBox">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">FEATURE</p>
                                <p><a href="#">ANALYSIS: Why McLaren moved to lock down Piastri with a fresh contract extension</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="box-lower-right">
                        <div class="left">
                            <img class="right-image" src="./rescources/images/right-5.avif" alt="">
                            <div class="titleBox">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">POLL</p>
                                <p><a href="#">THIS WEEK IN F1: 10 quiz questions on all the F1 news after the Singapore Grand Prix</a></p>
                            </div>
                        </div>
                        <div class="right">
                            <img class="right-image" src="./rescources/images/right-6.avif" alt="">
                            <div class="titleBox">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">FEATURE</p>
                                <p><a href="#">IT’S RACE WEEK: 5 storylines we’re excited about ahead of the 2023 Japanese Grand Prix</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fantasyWrapper">
            <div class="fantasyLeft">
                <b>F1 Fantasy</b>
                <p>Race your way to the top with Official F1 Fantasy and win incredible prizes</p>
                <div>
                    <a href="#"><button class="fantasyButton">Play Now</button></a>
                </div>
            </div>
            <div class="fantasyRight">
                <img class="fantasyImage" src="./rescources/images/whoWouldUPick.avif" alt="">
            </div>
        </div>
        
        <div class="editorsPick">
            <div class="editorsPickWrapper">
                <div class="editorsLeft">
                    <div style="padding: 10px 0px 0px 10px ">
                        <h2 style="font-size: 40px;">Editor's Pick</h2>
                    </div>
                    <div class="editorPhoto">
                        <img src="./rescources/images/editor-cover.png" alt="">
                    </div>
                </div>
                <div class="editorsRight">
                    <div class="box-upper-right" style="margin-right: 20px;">
                        <div class="left">
                            <img class="right-image" src="./rescources/images/right-1.avif" alt="">
                            <div class="titleBox" style="height: 80%;">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">NEWS</p>
                                <p><a href="#">‘I’m more than proud’ – Frederic Vasseur reflects on ‘emotional’ first win as Ferrari team boss</a></p>
                            </div>
                        </div>
                        <div class="right">
                            <img class="right-image" src="./rescources/images/right-2.avif" alt="">
                            <div class="titleBox" style="height: 80%;">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">FEATURE</p>
                                <p><a href="#">PALMER: What impressive Liam Lawson needs to do next to prove he deserves a full-time race seat in F1</a></p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="box-mid-right" style="margin-top: 150px; margin-right: 20px;">
                        <div class="left">
                            <div class="titleBox" style="height: 80%;">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">POLL</p>
                                <p><a href="#">THIS WEEK IN F1: 10 quiz questions on all the F1 news after the Singapore Grand Prix</a></p>
                            </div>
                        </div>
                        <div class="right">
                            <div class="titleBox" style="height: 80%;">
                                <p style="padding-top: 10px; color: #E10600; font-size: 10px;">FEATURE</p>
                                <p><a href="#">IT’S RACE WEEK: 5 storylines we’re excited about ahead of the 2023 Japanese Grand Prix</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fantasyWrapper">
            <div class="fantasyLeft">
                <b>Live Timing Data</b>
                <p>Dive into every digit of every session with Live Timing data and maximise your race</p>
                <div>
                    <a href="#"><button class="fantasyButton" style="width: 220px; height: 50px;">EXPLORE LIVE TIMING</button></a>
                </div>
            </div>
            <div class="fantasyRight">
                <img class="fantasyImage" src="./rescources/images/timing_data.avif" alt="">
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style scoped>

        .content {
            background-color: whitesmoke;
            height: auto;
            padding-top: 30px;
            margin-bottom: 100px;
        }

        .contentWrapper {
            width: 85%;
            height: auto;
            margin: 0 auto;
            position: relative;
            font-family: Formula1;
        }

        .news-box {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
        }

        .box-left {
            width: 50%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 20px;
            border-radius: 0px 30px 0px 0px;
            border: 10px solid red;
            border-left: none;
            border-bottom: none;
            display: flex;
            flex-direction: column;
        }

        .boxRight {
            margin-left: 51%;
            margin-top: 10px;
            width: 50%;
            height: 100%;
        }

        .box-upper-right {
            width: 100%;
            height: 33%;
            right: 0;
            top: 20px;
            display: flex;
        }

        .box-mid-right {
            width:100%;
            height: 33%;
            right: 0;
            top: 35%;
            display: flex;
        }

        .box-lower-right {
            width: 100%;
            height: 33%;
            right: 0;
            bottom: -10px;
            display: flex;
        }

        .title-left {
            font-size: 20px;
            font-weight: normal;
            width: 94%;
            margin-top: 5px
        }

        .title-left:hover {
            text-decoration: underline;
        }
        
        .left-img {
            width: 95%;
            margin-top: 15px;
        }

        .left-layer {
            margin-top: 10px;
            background: url(./rescources/images/backLayer.png);
            width: 95%;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%; 
        }

        .left {
            width: 50%;
            height: 100%;
            padding-left: 10px;
            padding-top: 10px;
        }

        .right {
            width: 50%;
            height: 100%;
            padding-left: 10px;
            padding-top: 10px;
        }

        .right-image {
            width: 100%;
        }

        .titleBox {
            height: 120px;
            padding: 0px 10px 20px 10px;
            border-radius: 0px 0px 15px 0px;
            border-color: gray;
            border-left: whitesmoke;
            border-top: whitesmoke;
            border-style: solid;
            border-width: 1px;
        }

        .titleBox:hover {
            border-right: 1px solid red;
            border-bottom: 1px solid red;
        }

        .fantasyWrapper {
            width: 80%;
            height: auto;
            margin: 0 auto;
            margin-top: 80px;
            position: relative;
            font-family: Formula1;
            border-radius: 0px 40px 40px 0px;
            border: #501d83 15px solid;
            border-left: none;
            display: flex;
            filter: drop-shadow(0px 0px  30px #501d83);
        }

        .fantasyLeft {
            margin: 10px 0px 10px 0px;
            width: 50%;
            height: auto;
            background-color: #501d83;
        }

        .fantasyLeft b {
            display: block;
            color: white;
            font-size: 35px;
            padding: 15% 0px 0px 30px;
        }

        .fantasyLeft p {
            display: block;
            color: white;
            padding: 30px 0px 0px 30px;
        }

        .fantasyRight {
            margin: 10px 15px 7px 0px;
            width: 50%;
        }
        
        .fantasyImage {
            width: 100%;
            border-radius: 0px 15px 15px 0px;
        }

        .fantasyButton {
            background-color: white;
            border-radius: 10px;
            border-color: white;
            font-size: 15px;
            font-family: Formula1;
            color: black;
            height: 60px;
            width: 130px;
            margin-left: 30px;
            margin-top: 30px;
        }

        .editorsPickWrapper {
            position: relative;
            width: 80%;
            height: 500px;
            margin: 0 auto;
            margin-top: 80px;
            padding-right: 20px;
            padding-top: 10px;
            font-family: Formula1;
            border-radius: 0px 40px 40px 0px;
            border: red 15px solid;
            border-left: none;
            display: flex;
        }

        .editorsLeft {
            margin: 10px 0px 10px 0px;
            width: 50%;
            height: 94%;
            background-color: whitesmoke;
        }

        .editorPhoto {
            padding-top: 10px;
        }

        .editorPhoto>img {
            width: 98%;
        }

        .editorsRight {
            width: 50%;
            height: auto;
        }
</style>