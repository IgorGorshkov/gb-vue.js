<template>
  <div id="app">
    <header class="header">
      <div>My personal costs</div>
    </header>
    <main>
      <button class="btn" @click="isVisible">ADD NEW COSTS +</button>
      <AddPaymentForm
          v-show="visible"
          @add-payment="addPayment"
          :categoryList="categoryList"
      />
      <PaymentsDisplay :paymentsList="currentElements"/>
      <PaginationComponent
          :length="13"
          :cur="page"
          :n="n"
          @paginate="onChangePage"
      />
    </main>

  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaginationComponent from "./components/PaginationComponent.vue"
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    PaginationComponent
  },
  data: () => ({
    visible: false,
    n: 3,
    page: 1
  }),
  computed: {
    ...mapGetters(['paymentsList', 'categoryList']),
    currentElements () {
      const { n, page } = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1 ) + n)
    }
  },
  methods: {
    ...mapActions(['fetchData','fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENTS_DATA']),

    addPayment (data) {
      this.ADD_PAYMENTS_DATA(data)
    },
    onChangePage (p) {
      this.page = p
      this.fetchData(this.page)
    },
    isVisible () {
      this.visible = !this.visible
    }
  },
  created () {
    this.fetchData(1)
    this.fetchCategoryData()
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
  padding: 8px;
  box-sizing: border-box;
  background-color: #3bba9f;
  border: 1px solid #3f95cd;
  border-radius: 3px;
  color: white;
  gap: 12px;
}
</style>
