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
        <div class="playerWrapepr">
            <div class="playerBlock">
                <img class="mainImg" src="./rescources/images/F1TV/landscape_hero_web.jpeg" alt="">
                <div class="titleBox">
                    <button type="button" class="playerButton">
                        <svg>
                            <path d="M16.9 8L0 0v20l16.9-8.4c.7-.3 1.2-1 1.2-1.8s-.5-1.5-1.2-1.8zM2 16.7V3.2l13.9 6.6L2 16.7z" fill="#16161f"></path>
                        </svg>
                    </button>
                    <p>SPRINT HIGHLIGHTS - USA</p>
                </div>
            </div>
        </div>
        <div class="shadowBox"></div>
        <div class="contentWrapper">

        </div>
    </div>

    <Footer/>
</template>

<style scoped>
    .banner {
        position: relative;
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
        height: 2000px;
        overflow: hidden;
    }

    .playerWrapper {
        position: relative;
        z-index: -1;
        width: 100%;
    }
    
    .playerBlock {
        display: flex;
        width: 80%;
        margin: 0 auto;
        margin-top: -90px;
    }

    .shadowBox {
        position: relative;
        z-index: 5;
        width: 120%;
        height: 150px;
        margin: 0 auto;
        margin-top: -130px;
        margin-right: -100px;
        box-shadow: inset -100px -50px 50px 20px #15151E;
    }
    
    .mainImg {
        width: 100%;
    }

    .titleBox {
        display: flex;
        width: 100%;
        margin-top: 32%;
        margin-left: -80%;
        font-family: Formula1;
        font-weight: bold;
        font-size: xx-large;
        color: white;
    }

    .playerButton {
        margin-left: -10%;
        margin-right: 2%;
        width: 80px;
        height: 80px;
        border-radius: 0px 20px 0px 0px;
        border: 0px;
        opacity: 0.5;
        background-color: red;
        background-image: url();
    }

    .playerButton svg {
        margin-top: 33%;
        margin-left: 33%;
    }

    .playerButton:hover {
        opacity: 1;
        transition: all 0.3s;
    }

    .titleBox p {
        width: 100%;
    }
</style>