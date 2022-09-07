import {localDB} from "@/store/index";

export default {
    state: {
        paymentsList: [],
        paymentsListIds: []
    },
    getters: {
        paymentsList: (state) => state.paymentsList
    },
    mutations: {
        SET_PAYMENTS_LIST (state, paymentList) {
            // state.paymentsList = paymentList
            const newUniqIdsObs = paymentList.filter((item) => {
                return state.paymentsListIds.indexOf(item.id) < 0
            })
            const uniqIds = newUniqIdsObs.map(obj => obj.id)
            state.paymentsList.push(...newUniqIdsObs)
            state.paymentsListIds.push(...uniqIds)
        },
        ADD_PAYMENTS_DATA (state, payment) {
            state.paymentsList.push(payment)
        }
    },
    actions: {
            // fetchData ({ commit }) {
            //     setTimeout(() => {
            //         const initialPaymentsList = [
            //             {
            //                 date: '28.03.2022',
            //                 category: 'Food',
            //                 value: 169
            //             },
            //             {
            //                 date: '24.03.2022',
            //                 category: 'Transport',
            //                 value: 360
            //             },
            //             {
            //                 date: '22.03.2022',
            //                 category: 'Sport',
            //                 value: 532
            //             },
            //             {
            //                 date: '30.03.2022',
            //                 category: 'Food',
            //                 value: 69
            //             },
            //             {
            //                 date: '19.03.2022',
            //                 category: 'Transport',
            //                 value: 260
            //             },
            //             {
            //                 date: '11.03.2022',
            //                 category: 'Sport',
            //                 value: 432
            //             },
            //             {
            //                 date: '28.03.2022',
            //                 category: 'Food',
            //                 value: 169
            //             },
            //             {
            //                 date: '24.03.2022',
            //                 category: 'Transport',
            //                 value: 360
            //             },
            //             {
            //                 date: '22.03.2022',
            //                 category: 'Sport',
            //                 value: 532
            //             },
            //             {
            //                 date: '30.03.2022',
            //                 category: 'Food',
            //                 value: 69
            //             },
            //             {
            //                 date: '19.03.2022',
            //                 category: 'Transport',
            //                 value: 260
            //             },
            //             {
            //                 date: '11.03.2022',
            //                 category: 'Sport',
            //                 value: 432
            //             },
            //             {
            //                 date: '28.03.2022',
            //                 category: 'Food',
            //                 value: 169
            //             },
            //             {
            //                 date: '24.03.2022',
            //                 category: 'Transport',
            //                 value: 360
            //             },
            //             {
            //                 date: '22.03.2022',
            //                 category: 'Sport',
            //                 value: 532
            //             },
            //             {
            //                 date: '30.03.2022',
            //                 category: 'Food',
            //                 value: 69
            //             },
            //             {
            //                 date: '19.03.2022',
            //                 category: 'Transport',
            //                 value: 260
            //             },
            //             {
            //                 date: '11.03.2022',
            //                 category: 'Sport',
            //                 value: 432
            //             },
            //             {
            //                 date: '28.03.2022',
            //                 category: 'Food',
            //                 value: 169
            //             },
            //             {
            //                 date: '24.03.2022',
            //                 category: 'Transport',
            //                 value: 360
            //             },
            //             {
            //                 date: '22.03.2022',
            //                 category: 'Sport',
            //                 value: 532
            //             },
            //             {
            //                 date: '30.03.2022',
            //                 category: 'Food',
            //                 value: 69
            //             },
            //             {
            //                 date: '19.03.2022',
            //                 category: 'Transport',
            //                 value: 260
            //             },
            //             {
            //                 date: '11.03.2022',
            //                 category: 'Sport',
            //                 value: 432
            //             },
            //         ]
            //
            //         commit('SET_PAYMENTS_LIST', initialPaymentsList)
            //     }, 1000)
            // },

        fetchData ({ commit }, page) {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = localDB[`page${page}`]
                    resolve (items)
                }, 1000)
            }).then((res)=> commit('SET_PAYMENTS_LIST', res))
        },
        }
}