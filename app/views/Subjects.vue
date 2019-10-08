<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout row="0" col="0" horizontalAlignment="left" verticalAlignment="center">
                    <StackLayout @tap="$store.dispatch('openDrawer')" verticalAlignment="center">
                        <Label class="bar"></Label>
                        <Label class="bar"></Label>
                        <Label class="bar"></Label>
                    </StackLayout>
                </StackLayout>
                <StackLayout row="0" col="1" class="p-10 text-center">
                    <Label text="Przedmioty" class="fs-18"></Label>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical">
            <Label text="Przedmioty" class="fs-25" />
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";

    export default {
        name: "Subjects",
        components: {
            AppActionBar
        },
        created() {
            console.log("Subjects");
        }
    }
</script>

<style scoped>
    .bar {
        background-color: #ffffff;
        width: 22;
        height: 4;
        margin-bottom: 3;
        border-radius: 2;
    }
</style>