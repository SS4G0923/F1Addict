<script setup>
    import axios from 'axios';
    import Banner from './components/banner.vue';
    import Footer from './components/footer.vue';
    import { useScheduleDetailStore } from './stores/scheduleDetail';
    import { ref } from 'vue';

    const scheduleDetailStore = useScheduleDetailStore();
    const drivers = ref([]);
    const getDrivers = async () => {
        const res = await axios.get('http://localhost:7070/driver/list');
        drivers.value = res.data.data;
    }
    const baseURL = 'http://localhost:8080/F1AddictResource';
    getDrivers();
</script>

<template>
    <Banner/>

    <div class="content" @mouseover="scheduleDetailStore.toFalse">
        <div class="contentWrapper">
            <div class="drivers">F1 Drivers 2023</div>
            <div class="info">Check out this season's official F1 line-up. Full breakdown of drivers, points and current positions. <br>Follow your favourite F1 drivers on and off the track.</div>
        </div>
        <div class="driversWrapper">
            <div :class="{'driverCard-top3': driver.standing <= 3, 'driverCard-rest': driver.standing > 3}" v-for="driver in drivers" >
                <div class="driverCard-top">
                    <div class="driverStanding">
                        <b>{{ driver.standing }}</b>
                    </div>
                    <div class="driverPoints">
                        <p>{{ driver.points }}</p><p>PTS</p>
                    </div>
                </div>
                <div class="driverCard-mid">
                    <div class="driverName">
                        {{ driver.firstName }}<br><b>{{ driver.lastName }}</b>
                    </div>
                    <div class="driverNation">
                        <img :src="baseURL + '/images/countries/' + driver.country + '.avif'" alt="">
                    </div>
                </div>
                <div class="driverCard-bottom">
                    <div class="cardBottomLeft">
                        <div class="driverTeam">
                            {{ driver.team }}
                        </div>
                        <div :class="{'driverNumber-top3': driver.standing <= 3, 'driverNumber': driver.standing > 3}">
                            <img :src="baseURL + '/images/drivers/no' + driver.no + '.avif'" alt="">
                        </div>
                    </div>
                    <div class="cardBottomRight">
                        <div :class="{'driverPic-top3': driver.standing <= 3, 'driverPic': driver.standing > 3}" >
                            <img :src="baseURL + '/images/drivers/' + driver.lastName.split(' ').join('').slice(0, 3).toLowerCase() + '.avif'" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>

<style scoped>
        .content {
            background-color: white;
            height:3000px;
            padding-top: 50px;
        }

        .contentWrapper {
            width: 80%;
            height: 200px;
            margin: 0 auto;
            padding-top: 20px;
            font-family: Formula1;
        }

        .driversWrapper {
            width: 80%;
            height: 2800px;
            margin: 0 auto;
            padding-top: 50px;
            font-family: Formula1;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .drivers {
            padding-top: 20px;
            font-weight: 700;
            font-size: 50px;
            border-top: #15151E 10px solid;
            border-right: #15151E 10px solid;
            border-top-right-radius: 20px;
        }

        .info {
            height: 70px;
            margin-top: 20px;
            padding-top: 20px;
            padding-left: 15px;
            font-size: small;
            background-color: #F9F9F9 ;
            border-radius: 20px;
        }

        .driverCard-top3 {
            width: 32%;
            height: 400px;
            border-right: #15151E 2px solid;
            border-top: #15151E 2px solid;
            border-top-right-radius: 20px;
        }

        .driverCard-rest {
            width: 24%;
            height: 400px;
            border-right: #15151E 2px solid;
            border-top: #15151E 2px solid;
            border-top-right-radius: 20px;
        }

        .driverCard-top3:hover {
            border-color: blue;
        }

        .driverCard-rest:hover {
            border-color: blue
        }
        
        .driverCard-top {
            display: flex;
            justify-content: space-between;;
            padding: 10px 10px 0px 10px;
            height: 15%;
            border-bottom: #38383f 2px solid;
        }

        .driverCard-mid {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px;
            height: 15%;
            border-bottom: #38383f 2px solid;
        }

        .driverName {
            padding-left: 10px;
            border-left: #3671C6 8px solid;
            font-size: 15px;
        }

        .driverName b {
            font-size: 20px;
        }

        .driverCard-bottom {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px 10px 10px;
            height: 70%;
        }

        .cardBottomLeft {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .cardBottomRight {
            width: 70%;
        }

        .driverNation img {
            margin-top: 0px;
            margin-right: 5px;
            height: 36px;
            border-radius: 5px;
        }

        .driverNumber-top3 img {
            height: 70px;
        }

        .driverPic-top3 img {
            height: 270px;
        }

        .driverNumber img {
            height: 50px;
        }

        .driverPic img {
            display: block;
            height: 200px;
            margin-top: 60px;
        }

        .driverPoints p:nth-child(1) {
            letter-spacing: 4px; 
            margin-left: 3px;
        }

        .driverPoints p:nth-child(2) {
            background-color: black; 
            color: white; 
            letter-spacing: 2px; 
            border-radius: 5px; 
            padding: 1px 3px 1px 5px;
        }

        .driverStanding b {
            font-size: 40px;
        }
</style>