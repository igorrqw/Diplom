<template>
    <div class="app-wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AppWrapper'
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.app-wrapper {
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: #141414;
    min-height: 80vh;
    height: max-content;
    overflow: hidden;


    @media (min-width: $mobile-width) {
        padding: 0 30px 20px;
    }

    @media (min-width: $tablet-width) {
        padding: 0 50px 20px;
    }

    @media (min-width: $desktop-width) {
        padding: 0 80px 20px;
    }

    @media (min-width: $large-desktop-width) {
        padding: 0 100px 20px;
    }
}
</style>