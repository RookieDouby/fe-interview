<template>
    <div class="circle-loading">20%</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .circle-loading {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 4px solid rgb(184, 187, 191);
        border-radius: 100%;
        width: 40px;
        height: 40px;
        font-size: 12px;
        font-weight: bold;
        color: rgb(172, 28, 177);
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            top: 50%;
            left: 50%;
            border:4px solid transparent;
            border-top-color: rgb(172, 28, 177);
            border-radius: 100%;
            margin-left: -24px;
            margin-top: -24px;
            animation: rotate1 1s ease infinite;
        }
    }

    @keyframes rotate1 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>