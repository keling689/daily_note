<template>
  <div id="app">
    <img src="./assets/logo.png">
			<router-view></router-view>
		</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
