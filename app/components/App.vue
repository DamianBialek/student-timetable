<template>
    <Page actionBarHidden="true">
        <RadSideDrawer @drawerClosed="$store.dispatch('closeDrawer')" ref="drawer" showOverNavigation="true" class="sidedrawer">
            <StackLayout ~drawerContent>
                <DrawerContent></DrawerContent>
            </StackLayout>
            <StackLayout ~mainContent>
                <MainContent @openDrawer="onOpenDrawerTap"></MainContent>
            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
    import DrawerContent from "./DrawerContent.vue";
    import MainContent from "./MainContent.vue";

    export default {
        components: {
            MainContent,
            DrawerContent
        },
        data() {
            return {

            }
        },
        computed: {
          openDrawer: function () {
              return this.$store.getters.openDrawer;
          }
        },
        methods: {
            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },
        },
        watch: {
            openDrawer: function () {
                if(this.openDrawer) this.onOpenDrawerTap();
                else this.onCloseDrawerTap();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
