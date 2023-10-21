<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    const schedule = ref([]);
    const getSchedule = async () => {
        const res = await axios.get("http://localhost:7070/schedule");
        schedule.value = res.data.data;
    }
    const baseURl = 'http://localhost:8080/F1AddictResource';
    getSchedule();
</script>


<template>
    <div class="scheduleDetail">
            <div class="scheduleHeader">
                <h2><a href="https://www.formula1.com/en/racing/2023.html" style="color: white;">Full Schedule</a></h2>
                <h2><a href="https://www.formula1.com/en/racing/2023/2024.html" style="color: white;">2024</a></h2>
            </div>
            <div class="scheduleList">
                <ul>
                    <li v-for="(item, index) in schedule">
                        <div>
                            <h3 v-if="item.description !== null">{{ item.description }}</h3>
                            <img :src="baseURl + '/images/' + item.raceCountry + 'GP.avif'">
                            <div class="scheduleTitleBox">
                                <h5><a href="#" style="color: white;">{{ item.raceName }}</a></h5>
                                <div class="date">
                                    <p>{{ item.date }}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<style scoped>
        .scheduleDetail {
            background-color: #15151E;
            display: flex;
            flex-direction: column;
            height: auto;
            position: absolute;
            color: white;
            font-size: 20px;
            font-family: Formula1;
            padding: 50px 0px 30px 100px;
        }

        .scheduleHeader {
            display: flex;
            height: 20%;
            padding-bottom: 10px;
            border-right: 3px solid gray;
            border-bottom: 3px solid gray;
            border-bottom-right-radius: 10px;
            margin-right: 5%;
        }

        .scheduleList {
            display: flex;
            height: 80%;
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            justify-content: space-between;
        }

        .scheduleHeader>h2:nth-child(2) {
            padding-left: 100px;
        }

        .scheduleHeader>h2>a:hover{
            border-bottom: red 2px solid;
        }

        .scheduleList>ul {
            display: flex;
            justify-content: space-between;
        }

        .scheduleList>ul>li {
            width: 23%;
            padding: 5px 10px 0px 0px;
        }

        .scheduleList>ul>li:nth-child(4)>div {
            padding-top: 35px;
        }

        .scheduleList>ul>li>div>img {
            width: 90%;
        }

        .date {
            font-weight: lighter;
            font-size: 10px;

            padding-bottom: 5px;
        }

        .scheduleTitleBox {
            width: 90%;
            height: 100px;
            border-bottom: 2px solid gray;
            border-right: 2px solid gray;
            border-bottom-right-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .bannerlist>li>a:hover {
            border-bottom: red 2px solid;
        }
</style>