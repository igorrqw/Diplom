<template lang="">
    <div>
        <HeaderProject />
        <footerProject />
    </div>
</template>
<script>

import HeaderProject from '@/components/HeaderProject.vue'
import footerProject from '@/components/footerProject.vue'


export default {
    name: 'homepage',
    components: { HeaderProject, footerProject, }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
</style>