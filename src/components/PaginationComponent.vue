<template>
  <div class="wrap">
    <div @click="onClick(cur - 1)">-</div>
    <div
         v-for="page in amount"
         :key="page"
         @click="onClick(page)"
    :class="{ active: page === cur }">
      {{ page }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>

export default {
  name: "PaginationComponent",
  props: {
      length: Number,
      n: Number,
      cur: Number,
  },
  computed: {
    amount() {
      const { length, n } = this
      return Math.ceil(length / n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit('paginate', p);
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  width: 60%;
  justify-content: center;
  cursor: pointer;
    & > div {
      padding: 10px;
      &.active {
        background: #cccc;
      }
    }
}

</style>
