<script setup>

</script>

<template>
    <div class="footer">
        <div class="footerPartners">
            <img src="../rescources/images/F1.svg.png" alt="" style="height: 30px;"><a href="https://formula1.com/en/toolbar/partners.html" target="_blank" style="color: white;">Our Partners</a>
        </div>
        <div class="footerList">
            <div>
                <ul>
                    <li>
                        <a href="#">Latest News</a>
                    </li>
                    <li>
                        <a href="#">What's F1</a>
                    </li>
                    <li>
                        <a href="#">Video</a>
                    </li>
                    <li>
                        <a href="#">Drivers</a>
                    </li>
                    <li>
                        <a href="#">Teams</a>
                    </li>
                    <li>
                        <a href="#">Schedule</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Standings</a>
                    </li>
                    <li>
                        <a href="#">2023 SEASON</a>
                    </li>
                    <li>
                        <a href="#">DRIVER STANDINGS</a>
                    </li>
                    <li>
                        <a href="#">CONSTRUCTOR STANDINGS</a>
                    </li>
                    <li>
                        <a href="#">ARCHIVE 1950-2022</a>
                    </li>
                    <li>
                        <a href="#">F1 AWARDS</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Gaming</a>
                    </li>
                    <li>
                        <a href="#">ESPORTS</a>
                    </li>
                    <li>
                        <a href="#">FANTASY</a>
                    </li>
                    <li>
                        <a href="#">F1 23</a>
                    </li>
                    <li>
                        <a href="#">F1 MANAGER 23</a>
                    </li>
                    <li>
                        <a href="#">F1 PLAY</a>
                    </li>
                    <li>
                        <a href="#">F1 MOBILE RACING</a>
                    </li>
                    <li>
                        <a href="#">F1 CLASH</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Live Timing</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Tickets</a>
                    </li>
                    <li>
                        <a href="#">F1® Experiences</a>
                    </li>
                    <li>
                        <a href="#">Store</a>
                    </li>
                    <li>
                        <a href="#">Paddock Club</a>
                    </li>
                    <li>
                        <a href="#">F1® TV</a>
                    </li>
                    <li>
                        <a href="#">F1® Authentics</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Rules & Regulations</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

        .footer {
            background-color: #15151E;
            height: 600px;
        }
        .footerPartners {
            padding-left: 35%;
            padding-top: 80px;
            font-size: 40px;
        }
        .footerList {
            display: flex;
            width: 90%;
            height: 300px;
            margin: 80px auto;
            border-right: solid 10px #38383f;
            border-bottom: solid 10px #38383f;
            border-bottom-right-radius: 25px;
            justify-content: space-between;
        }

        .footerList>div>ul>li>a {
            color: white;
            font-size: small;
        }

        .footerList>div>ul>:nth-child(1)>a {
            font-weight: 700;
            font-size: 15px;
        }

        .footerList>div>ul>li>a:hover {
            border-bottom: #E10600 solid 2px;
        }

        .footerList>div>ul {
            display: block;
            padding: 0px 35px;
        }

        .footerList>div>ul>li {
            padding: 5px 0px;
            display: block;
        }

</style>