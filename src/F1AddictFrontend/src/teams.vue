<script setup>
    import axios from 'axios';
    import Banner from './components/banner.vue';
    import Footer from './components/footer.vue';
    import { useScheduleDetailStore } from './stores/scheduleDetail';
    import { ref } from 'vue';

    const scheduleDetailStore = useScheduleDetailStore();
    const baseURL = 'http://localhost:8080/F1AddictResource';

    const idxOfSpace = (string) => {
        return string.indexOf(" ");
    }
    const getTeamLogoUrl = (teamName) => {
        teamName = teamName.split(' ').join('').toLowerCase();
        if(teamName === 'redbullracing')
            teamName = 'redbull';
        return baseURL + "/images/teams/" + teamName.toLowerCase() + ".avif";
    }
    const getTeamCarUrl = (teamName) => {
        teamName = teamName.split(' ').join('').toLowerCase();
        if(teamName === 'redbullracing')
            teamName = 'redbull';
        return baseURL +  "/images/cars/" + teamName.toLowerCase() + ".avif";
    }
    const getDriverPicUrl = (driverName) => {
        const idx = driverName.indexOf(" ");
        const name = driverName.slice(idx + 1, idx + 4);
        return baseURL + "/images/drivers/" + name.toLowerCase() + ".avif";
    }
    const teams = ref([]);
    const getTeams = async () => {
        const res = await axios.get('http://localhost:7070/team/list');
        teams.value = res.data.data;
    }
    getTeams();
    document.title = 'F1Addict - Teams';
</script>

<template>
    <Banner/>

    <div class="content" @mouseover="scheduleDetailStore.toFalse">
        <div class="contentWrapper">
            <div class="drivers">F1 Teams 2024</div>
            <div class="info">Discover everything you need to know about this year's Formula 1 teams - drivers, podium <br>finishes, points earned and championship titles.</div>
        </div>
        <div class="teamsWrapper">
            <div class="teamCard"  v-for="team in teams">
                <div class="teamCardTop">
                    <div class="teamStanding">
                        <b>{{ team.standing }}</b>
                    </div>
                    <div class="teamPoints">
                        <p>{{ team.points }}</p><p>PTS</p>
                    </div>
                </div>
                <div class="teamCardMid-1">
                    <div class="teamName">
                        <b>{{ team.name }}</b>
                    </div>
                    <div class="teamLogo">
                        <img :src=getTeamLogoUrl(team.name) alt="">
                    </div>
                </div>
                <div class="teamCardMid-2">
                    <div class="teamDriver">
                        <div class="driverName">
                            {{ team.driver1.slice(0, idxOfSpace(team.driver1)) }} <b>{{ team.driver1.slice(idxOfSpace(team.driver1), 20) }}</b>
                        </div>
                        <div class="driverPic">
                            <img :src=getDriverPicUrl(team.driver1) alt="">
                        </div>
                    </div>
                    <div class="teamDriver">
                        <div class="driverName">
                            {{ team.driver2.slice(0, idxOfSpace(team.driver2)) }} <b>{{ team.driver2.slice(idxOfSpace(team.driver2), 20) }}</b>
                        </div>
                        <div class="driverPic">
                            <img :src=getDriverPicUrl(team.driver2) alt="">
                        </div>
                    </div>
                </div>
                <div class="teamCardMain">
                    <div class="teamCar">
                        <img :src=getTeamCarUrl(team.name) alt="">
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
            height: 3000px;
            padding-top: 50px;
        }

        .contentWrapper {
            width: 80%;
            height: 200px;
            margin: 0 auto;
            padding-top: 20px;
            font-family: Formula1;
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

        .teamCard {
            width: 49%;
            height: 400px;
            border-right: #15151E 2px solid;
            border-top: #15151E 2px solid;
            border-top-right-radius: 20px;
        }

        .teamCard:hover {
            border-color: #3671C6;
        }

        .teamsWrapper {
            width: 80%;
            height: 2800px;
            margin: 0 auto;
            padding-top: 60px;
            font-family: Formula1;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .teamCardTop {
            display: flex;
            justify-content: space-between;;
            padding: 10px 10px 0px 10px;
            height: 15%;
            border-bottom: #38383f 2px solid;
        }

        .teamCardMid-1 {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px;
            height: 20%;
            border-bottom: #38383f 2px solid;
        }

        .teamCardMid-2 {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px;
            height: 20%;
        }
        
        .teamCardMain {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px 10px 10px;
            height: 40%;
        }

        .teamName {
            padding-left: 10px;
            padding-top: 10px;
            border-left: #3671C6 8px solid;
            font-size: 30px;
        }

        .teamPoints p:nth-child(1) {
            letter-spacing: 4px; 
            margin-left: 3px;
        }

        .teamPoints p:nth-child(2) {
            background-color: black; 
            color: white; 
            letter-spacing: 2px; 
            border-radius: 5px; 
            padding: 1px 3px 1px 5px;
        }

        .teamStanding b {
            font-size: 40px;
        }

        .teamLogo img {
            margin-top: 0px;
            margin-right: 5px;
            height: 60px;
        }

        .teamDriver {
            display: flex;
            justify-content: space-between;
            width: 49%;
            border-bottom: #38383f 2px solid;
            border-right: #38383f 2px solid;
            border-bottom-right-radius: 10px;
        }

        .driverPic img{
            height: 60px;
        }

        .driverName {
            padding-left: 10px;
            padding-top: 10px;
            font-size: 20px;
        }

        .teamCar img {
            margin: 0 15%;
            height: 100%;
        }

        .teamCardMain {
            background-image: url("./rescources/images/backLayer.png");
            background-repeat: no-repeat;
            background-size: 98%;
            margin-left: 10px;
            overflow: hidden;
        }
</style>