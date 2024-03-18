<template lang="">
    <div>
        <PoiskComponent />
    </div>
</template>
<script>

import PoiskComponent from '@/components/SearchComponet/PoiskComponent.vue'

export default {
    name: 'homepage',
    components: { PoiskComponent }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
</style>