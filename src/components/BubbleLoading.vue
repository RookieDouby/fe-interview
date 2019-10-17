<template>
    <div class="bubble-loading">20%</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .bubble-loading {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-image: linear-gradient(45deg, rgb(14, 14, 46), rgb(64,64, 117));
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
        box-shadow: 0 3px 2px 1px rgba(0,0,0,0.3);
        &::before, &::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 40px;
            height: 40px;
            margin-left:  -20px;
            margin-top: -20px;
            background: rgb(51, 149, 230);
            border-radius: 100%;
            z-index: -1;
            transform: translateY(-2px);
        }
        &::before {
            animation: rotate2 1s linear infinite;
        }
        &::after {
            animation: rotate2 1s linear infinite;
        }
    }

    @keyframes rotate2 {
        from {
            transform: rotate(0deg) translateY(-2px);
        }
        to {
            transform: rotate(360deg) translateY(0);
        }
    }
</style>