<script setup>
    import scheduleDetail from './bannerDetail/scheduleDetail.vue';
    import { useScheduleDetailStore } from '../stores/scheduleDetail';

    const scheduleDetailStore = useScheduleDetailStore();
</script>

<template>
    <div class="bannerDetail">
        <Transition>
            <scheduleDetail v-show="scheduleDetailStore.isShow"/>
        </Transition>
    </div>
</template>

<style scoped>
    .bannerDetail {
        position: relative;
        z-index: 1;
    }

    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s;
    }

    .v-enter-from, .v-leave-to {
        opacity: 0;
    }
</style>