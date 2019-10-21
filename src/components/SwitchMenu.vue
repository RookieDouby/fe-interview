<template>
    <div class="menu">

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.menu {
    width: 100px;
    height: 100px;
    position: relative;
    cursor: pointer;
    &:before, &:after {
        content: "";
        display: block;
        width: 100%;
        height: 16px;
        background: #000;
        border-radius: 8px;
        position: absolute;
        transition: all .1s ease-in-out;
    }
    &:before {
        top: 5px;
        box-shadow: 0 37px #000;
    }
    &:after {
        bottom: 5px;
    }
    &:hover:before {
        box-shadow: none;
        transform: rotate(45deg);
        top: 42px;
    }
    &:hover:after {
        transform: rotate(-45deg);
        bottom: 42px;
    }
}
</style>