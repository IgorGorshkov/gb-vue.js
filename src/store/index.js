import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from "@/store/categoryList";
import paymentsList from "@/store/paymentsList";


Vue.use(Vuex)

export const localDB = {
    page1: [
        { id: 1, date: "20.03.2020", category: "Food", value: 169 },
        { id: 2, date: "21.03.2020", category: "Navigation", value: 50 },
        { id: 3, date: "22.03.2020", category: "Sport", value: 450 },
    ],
    page2: [
        { id: 4, date: "23.03.2020", category: "Entertaiment", value: 969 },
        { id: 5, date: "24.03.2020", category: "Education", value: 1500 },
        { id: 6, date: "25.03.2020", category: "Food", value: 200 },
    ],
    page3: [
        { id: 7, date: "23.03.2020", category: "Entertaiment", value: 969 },
        { id: 8, date: "24.03.2020", category: "Education", value: 1500 },
        { id: 9, date: "25.03.2020", category: "Food", value: 200 },
    ],
    page4: [
        { id: 10, date: "23.03.2020", category: "Entertaiment", value: 969 },
        { id: 11, date: "24.03.2020", category: "Education", value: 1500 },
        { id: 12, date: "25.03.2020", category: "Food", value: 200 },
    ],
};


export default new Vuex.Store({
    state: {
    },
    getters: {
        // для подсчета общей суммы затрат
        // totalCost: ({ paymentsList }) => paymentsList
        //     .reduce((total, { value }) => total + value, 0)
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        categoryList,
        paymentsList,
    }
})