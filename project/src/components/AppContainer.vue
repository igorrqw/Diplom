<template>
    <div class="app-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AppContainer'
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.app-container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>