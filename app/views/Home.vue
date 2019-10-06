<template>
    <Page>
        <AppActionBar>
            <ActionItem @tap="$store.dispatch('openDrawer')" ios.systemIcon="4" android.systemIcon="ic_menu_btn_add" ios.position="left" />
        </AppActionBar>
        <StackLayout orientation="vertical">
            <Label text="Home" class="fs-25" />
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";

    export default {
        name: "Home",
        components: {
            AppActionBar
        },
    }
</script>

<style scoped>

</style>