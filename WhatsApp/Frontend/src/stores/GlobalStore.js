import {defineStore} from "pinia";
import {threadItems} from "@/threadItems";
import ThreadItem from "@/components/ThreadItem.vue";



export const useThreadItemStore = defineStore({
    id: 'threadItemStore',
    state: () => ({
        activeThreadItem: null,
    }),
    getters: {
        getActiveThreadItem() {
            return this.activeThreadItem;
        },
    },
    actions: {
        setActiveThreadItem(threadItem) {
            this.activeThreadItem = threadItem;
        },
    },
});