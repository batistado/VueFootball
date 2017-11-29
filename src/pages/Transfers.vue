<template>
  <div>
  <h1>Transfer Section</h1>
  <el-button @click="incCount">Increment</el-button>
    {{ $store.state.count }}
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

  export default {
      name: 'transfers',
      methods: mapActions([
          'incCount',
      ]),
  };
</script>
