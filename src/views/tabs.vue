<style lang="scss">

</style>
<template>
    <div>
        <router-view></router-view>
        <footer-tab  @taptabs="taptabs"></footer-tab> 
           
    </div>
</template>

<script>
import FooterTab from '../components/footer'
export default {
    data() {
        return {
            // count: 0
        }
    },
    methods: {
        taptabs(item) {
            this.$router.push({path: item.route})
        }
    },
    components: {
        FooterTab
    }
}
</script>