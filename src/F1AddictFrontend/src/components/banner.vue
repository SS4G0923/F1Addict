<script setup>
    import BannerDetail from './bannerDetail.vue';
    import '../assets/base.css'
    import { useScheduleDetailStore } from '../stores/scheduleDetail.js'
    const scheduleDetailStore = useScheduleDetailStore();

    let username = localStorage.getItem('username') ? localStorage.getItem('username').toUpperCase() : '';
    let isShow = username.trim() === '' ? true : false;
    const logout = () => {
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');
        isShow = !isShow;
        location.reload();
    }

    const baseURL = 'http://localhost:8080/F1AddictResource';

</script>

<template>
    <div name="banner" class="banner">
        <div name="f1img">
            <a href="/home"><img :src="baseURL + '/images/F1.svg.png'" class="f1img"></a>
        </div>
        <div class="bannerContent">
            <ul class="bannerlist"> 
                <li><a href="#" target="_blank" class="scheduleTag" id="1" style="color: white;" @mouseover="scheduleDetailStore.toTrue">Schedule</a></li>
                <li><a href="/drivers" target="_blank" id="2" class="driversTag" style="color: white;" @mouseover="scheduleDetailStore.toFalse">Drivers</a></li>
                <li><a href="/teams" target="_blank" id="3" class="constructorsTag" style="color: white;" @mouseover="scheduleDetailStore.toFalse">Constructors</a></li>
                <li><a href="/f1tv" target="_blank" style="color: white;" @mouseover="scheduleDetailStore.toFalse">F1 TV</a></li>
            </ul>
        </div>
        <div name="user" v-show="isShow">
            <a href="/login" target="_blank"><button class="bannerButton">Log in</button></a>
            <a href="/signup" target="_blank"><button class="bannerButton">Sign up</button></a>
        </div>
        <div name="user" v-show="!isShow">
            <a href="/home"><button class="bannerButton" style="background-color: white; color: red; font-size: small; font-weight: 300; margin-right: 10px; padding: 0px 5px 0px 5px; width: 90%;">{{ username }}</button></a>
            <a href="#"><button class="bannerButton" @click="logout">Log out</button></a>
        </div>
    </div>
    <BannerDetail/>

</template>

<style scoped>
    .banner {
        background-color: #15151E;
        height: 100px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .f1img {
        height: 35px;
        margin: 33px 50px;
        position: absolute;
    }

        
    .bannerContent {
        padding-top: 35px;
        padding-left: 25%;
        position: absolute;
    }
        
    .bannerlist>li {
        display: inline;
        padding: 0px 30px;    
    }
        
    .bannerlist>li>a {
        font-size: 23px;
    }

    .bannerlist>li>a:hover {
        border-bottom: red 2px solid;
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
        position: absolute;
        display: flex;
        padding-top: 28px;
        margin-left: 80%;
    }

    div[name="user"]>a:nth-child(2)>button {
        background-color: black;
    }
    div[name="f1img"]>a{
        position: absolute;
        display: block;
        height: 100px;
        width: 15%;
        z-index: 2;
    }
</style>