<script setup>
    import Banner from './components/banner.vue';
    import Footer from './components/footer.vue';
    import { ElMessage } from 'element-plus';
    import { useScheduleDetailStore } from './stores/scheduleDetail';
    import { ref } from 'vue';
    import router from './router';
    import axios from 'axios';

    const scheduleDetailStore = useScheduleDetailStore();
    const email = ref("");
    const password = ref("");

    const loginApi = async(email, password) => {
        if(email.trim() === '' || password.trim() === ''){
            alert('Please enter username and password');
            return;
        }
        const user = {'email': email, 'password': password};
        const res = await axios.post("http://localhost:7070/user/get", user);
        if(res.data.code === 0){
            alert(res.data.msg);
            return;
        }
        else if(res.data.code === 1){
            alert("登录成功");
            localStorage.setItem('username', res.data.data.username);
            router.replace('/home');
            return;
        }
    }
</script>

<template>
    <Banner/>
    <div class="content" @mousemove="scheduleDetailStore.toFalse">
        <div class="contentWrapper">
            <div class="loginForm">
                <div class="loginFormTitle">
                    <h1>Log in</h1>
                </div>
                <div class="loginFormInput">
                    <input type="text" name="eamil" placeholder="E-mail Address" v-model="email" required>
                </div>
                <div class="loginFormInput">
                    <input type="password" name="password" placeholder="Password" v-model="password" required>
                </div>
                <div class="submitButton">
                    <input type="submit" value="Log in" @click="loginApi(email, password)">
                </div>
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