<template lang="">
    <div>
        <HeaderProject />
        <Films />
        <Cartoons />
        <Serials />
        <footerProject />
    </div>
</template>
<script>

import HeaderProject from '@/components/HeaderProject.vue'
import footerProject from '@/components/footerProject.vue'
import Films from '@/components/HomeComponets/Films.vue'
import Cartoons from '@/components/HomeComponets/Cartoons.vue'
import Serials from '@/components/HomeComponets/Serials.vue'

export default {
    name: 'homepage',
    components: { HeaderProject, Films, Cartoons, Serials, footerProject, }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
</style>