<script setup>
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
                    <img src="../rescources/images/F1LogoMicroWhite.avif" alt="">
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
</template>

<style scoped>
.banner {
        width: 100%;
        position: fixed;
        z-index: 11;
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
</style>