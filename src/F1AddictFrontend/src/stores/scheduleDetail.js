import { defineStore } from "pinia";
import { ref } from "vue";

export const useScheduleDetailStore = defineStore("ScheduleDetail", () => {
    const isShow = ref(false);

    function toFalse() {
        isShow.value = false;
    }

    function toTrue() {
        isShow.value = true;
    }

  return { isShow, toFalse, toTrue };
});