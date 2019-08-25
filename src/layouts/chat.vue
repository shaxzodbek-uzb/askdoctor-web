<template>
  <div>
    <ChatHeader />
    <router-view />
  </div>
</template>

<script>
import ChatHeader from '../components/ChatHeader'
export default {
  name: 'ChatLayout',
  components: {
    ChatHeader
  }
}
</script>
<style lang="css">
  body{
    padding-top: 0px;
  }
</style>
