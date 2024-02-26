<template>
  <router-view/>
</template>

<script>
import {onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
  },
  props: {
  },
  setup () {
    const router = useRouter()

    onBeforeMount(() => {
      if (!localStorage.getItem('isAuth')) {
        localStorage.setItem('isAuth', JSON.stringify(false))
      }

      if (!JSON.parse(localStorage.getItem('isAuth'))) {
        router.push('/auth')
      }

      if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]))
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
