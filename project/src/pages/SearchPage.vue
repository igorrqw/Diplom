<template lang="">
    <div>
        <HeaderProject />
        <PoiskComponent />
        <footerProject />
    </div>
</template>
<script>

import HeaderProject from '@/components/HeaderProject.vue'
import PoiskComponent from '@/components/SearchComponet/PoiskComponent.vue'
import footerProject from '@/components/footerProject.vue'


export default {
    name: 'homepage',
    components: { HeaderProject, PoiskComponent, footerProject }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
</style>