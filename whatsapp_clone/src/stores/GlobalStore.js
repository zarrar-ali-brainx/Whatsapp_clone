import {defineStore} from "pinia";
import {threadItems} from "@/threadItems";
import ThreadItem from "@/components/ThreadItem.vue";

// export const useGlobalStore = defineStore("GlobalStore", {
//
//     state: () => {
//
//
//         return{
//             activated: true,
//
//         }
//     },
// })

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