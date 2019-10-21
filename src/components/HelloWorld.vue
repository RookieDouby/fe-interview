<template>
  <div class="home">
    <div><CircleLoading /></div>
    <div><BubbleLoading /></div>
    <div><TeacupLoading /></div>
    <div><SwitchMenu /></div>
  </div>
</template>

<script>
import CircleLoading from './CircleLoading';
import BubbleLoading from './BubbleLoading';
import TeacupLoading from './TeacupLoading';
import SwitchMenu from './SwitchMenu';  //菜单切换效果

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CircleLoading,
    BubbleLoading,
    TeacupLoading,
    SwitchMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100vh;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    .div {
      transform: scale(1.5);
    }
  }
</style>
