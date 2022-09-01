<template>
  <div id="app">
    <header class="header">
      <div>My personal costs</div>
    </header>
    <main>
      <button class="btn" @click="isVisible">ADD NEW COSTS +</button>
      <AddPaymentForm v-show="visible" @add-payment="addPayment"/>
      <PaymentsDisplay :paymentsList="paymentsList"/>
    </main>

  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data: () => ({
    paymentsList: [],
    visible: false
  }),
  methods: {
    fetchPaymentsData () {
      return [
        {
          date: '28.03.2022',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2022',
          category: 'Transport',
          value: 360
        },
        {
          date: '22.03.2022',
          category: 'Sport',
          value: 532
        },
        {
          date: '30.03.2022',
          category: 'Food',
          value: 69
        },
        {
          date: '19.03.2022',
          category: 'Transport',
          value: 260
        },
        {
          date: '11.03.2022',
          category: 'Sport',
          value: 432
        },
      ]
    },
    addPayment (data) {
      this.paymentsList.push(data)
    },
    isVisible () {
      this.visible = !this.visible
    }
  },
  created () {
    this.paymentsList = this.fetchPaymentsData()
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  font-size: 36px;
  font-weight: bold;
}
.btn {
  display: flex;
  margin-bottom: 8px;
  height: 30px;
  background-color: #3bba9f;
  border: 1px solid #3f95cd;
  border-radius: 3px;
  color: white;
  gap: 12px;
}
</style>
