<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *, auto" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout @tap="$navigator.back()" class="pr-10" row="0" col="0" horizontalAlignment="left"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-arrow-left"></FontIcon>
                </StackLayout>
                <StackLayout row="0" col="1" class="px-10 va-center text-center">
                    <Label text="Utwórz nowego wykładowcę" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="saveLecturer" row="0" col="2" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-check"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%" class="p-15">
            <TextField v-model="lecturer.name" hint="Imię..."></TextField>
            <TextField v-model="lecturer.surname" hint="Nazwisko..."></TextField>
            <Button @tap="saveLecturer" text="Zapisz" class="btn mt-10"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";

    export default {
        name: "AddNewLecturer",
        data() {
            return {
                lecturer: {
                    name: '',
                    surname: ''
                }
            }
        },
        components: {
            AppActionBar
        },
        methods: {
            saveLecturer: function () {
                this.$store.dispatch("addNewLecturer", this.lecturer);
                this.$navigator.navigate("/lecturers");
            }
        }
    }
</script>

<style scoped>

</style>