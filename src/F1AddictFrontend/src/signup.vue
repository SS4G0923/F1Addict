<script setup>
    import Banner from './components/banner.vue';
    import Footer from './components/footer.vue';
    import axios from 'axios';
    import router from './router';
    import { useScheduleDetailStore } from './stores/scheduleDetail';
    import { onMounted } from 'vue';

    const scheduleDetailStore = useScheduleDetailStore();

    const signup = async (email, emailDomain, username, password) => {
        if(emailDomain === undefined){
            alert('Please choose email domain');
            return;
        }
        email = email + emailDomain;
        if(email.trim() === '' || password.trim() === '' || username.trim() === ''){
            alert('Please enter username, email and password');
            return;
        }
        const user = {'email': email, 'username': username, 'password': password};
        const res = await axios.post('http://localhost:7070/user/add', user);
        if(res.data.code === 0){
            confirm(res.data.msg);
            return;
        }
        else if (res.data.code === 1){
            confirm(res.data.msg);   
            router.replace('/login');
            return;
        }
    }

    onMounted(() => {
        document.querySelector(".should-be-selected").selected = true;
    })
</script>

<template>
    <Banner/>
    <div class="content" @mouseover="scheduleDetailStore.toFalse">
        <div class="contentWrapper">
            <div class="loginForm">
                <form action="" method="POST">
                    <div class="loginFormTitle">
                        <h1>Sign up</h1>
                    </div>
                    <div class="loginFormInput" style="display: flex;">
                        <input type="text" name="email" placeholder="E-mail Address" v-model="email" required style="border-radius: 15px 0px 0px 15px; border-right: 0px; width: 80%;">
                        <select name="emailDomain" v-model="emailDomain" autocomplete="off">
                            <option value="" disabled class="should-be-selected">Select Domain</option>
                            <option value="@gmail.com">@gmail.com</option>
                            <option value="@outlook.com">@outlook.com</option>
                            <option value="@qq.com">@qq.com</option>
                            <option value="@163.com">@163.com</option>
                        </select>
                    </div>
                    <div class="loginFormInput">
                        <input type="text" name="username" placeholder="Username" v-model="username" required>
                    </div>
                    <div class="loginFormInput">
                        <input type="password" name="password" placeholder="Password" v-model="password" required>
                    </div>
                    <div class="submitButton">
                        <input type="button" value="Sign up" @click="signup(email, emailDomain, username, password)">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style scoped>
        .content {
            height: auto;
            padding-bottom: 200px;
            background-color: whitesmoke;
        }

        .contentWrapper {
            width: 40%;
            margin: 0 auto;
        }

        .loginForm {
            padding-top: 15%;
        }

        .loginFormTitle {
            font-size: 30px;
            font-weight: bold;
            font-family: Formula1;
        }
        
        .loginFormInput input{
            width: 100%;
            margin-top: 20px;
            padding-left: 10px;
            height: 50px;
            border: 2px solid black;
            border-radius: 15px;
        }

        .loginFormInput input:focus {
            outline: none;
        }

        select {
            display: block;
            border: 2px solid black;
            border-radius: 0px 15px 15px 0px;
            margin-top: 20px;
            padding-left: 10px;
            height: 50px;
            width: 20%;
        }

        select:focus {
            outline: none;
        }
        
        .submitButton input{
            font-family: Formula1;
            height: 50px;
            width: 100px;
            float: right;
            margin-top: 20px;
            padding: 10px 10px 10px 10px;
            font-weight: 300;
            font-size: large;
            border-radius: 10px;
        }
</style>