<template>
    <Page actionBarHidden="true">
        <RadSideDrawer @drawerClosed="$store.dispatch('closeDrawer')" ref="drawer" showOverNavigation="true" class="sidedrawer">
            <StackLayout ~drawerContent>
                <DrawerContent></DrawerContent>
            </StackLayout>
            <StackLayout ~mainContent>
                <Navigator defaultRoute="/home"></Navigator>
            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
    import DrawerContent from "~/components/DrawerContent.vue";

    export default {
        name: "Layout",
        components: {
            DrawerContent,
        },
        computed: {
            openDrawer() {
                return this.$store.getters.openDrawer
            }
        },
        methods: {
            onOpenDrawerTap() {
                this.$refs.drawer.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.closeDrawer();
            },
            onToggleDrawerTap() {
                this.$refs.drawer.toggleDrawerState();
            },
        },
        watch: {
            openDrawer() {
                if(this.openDrawer)
                    this.onOpenDrawerTap();
                else
                    this.onCloseDrawerTap();
            }
        }
    }
</script>

<style scoped>

</style>