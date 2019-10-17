<template>
    <div class="teacup-loading">20%</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .teacup-loading {
        position: relative;
        width: 40px;
        height: 40px;
        background: #fff3da;
        border: 4px solid rgb(30, 29, 30);
        border-top: none;
        border-radius: 0 0 16px 16px;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        line-height: 24px;
        color: rbg(30, 29, 30);
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
        transform: translateZ(0);
        overflow: hidden;
        &::before, &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 0;
            right: -120px;
            height: 20px;
            clip-path: polygon()
        }
        &::before {
            background: rgb(225, 244, 125);
        }
        &::after {
            background: rgb(255, 174, 0);
        }
    }
</style>