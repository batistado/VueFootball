<template>
  <div>
  <h1>Welcome to my homepage!</h1>
  <el-button @click="incCount">Increment</el-button>
    {{ $store.state.count }}
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

  export default {
      name: 'home-page',
      methods: mapActions([
          'incCount',
      ]),
  };
</script>
