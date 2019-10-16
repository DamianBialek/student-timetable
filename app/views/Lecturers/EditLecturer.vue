<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *, auto, auto" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout @tap="$navigator.back()" class="pr-10" row="0" col="0" horizontalAlignment="left"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-arrow-left"></FontIcon>
                </StackLayout>
                <StackLayout row="0" col="1" class="px-10 va-center text-center">
                    <Label text="Edycja wykładowcy" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="removeLecturer" row="0" col="2" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-trash"></FontIcon>
                </StackLayout>
                <StackLayout @tap="editLecturer" row="0" col="3" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-check"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%" class="p-15">
            <TextField v-model="editedLecturer.name" hint="Imię..."></TextField>
            <TextField v-model="editedLecturer.surname" hint="Nazwisko..."></TextField>
            <Button @tap="editLecturer" text="Zapisz" class="btn mt-10"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";

    export default {
        name: "EditLecturer",
        props: ['lecturer'],
        data() {
            return {
                editedLecturer: {}
            }
        },
        components: {
            AppActionBar
        },
        created() {
            this.editedLecturer = this.lecturer;
        },
        methods: {
            removeLecturer: function () {
                confirm({
                    title: "Potwierdzenie akcji",
                    message: "Czy na pewno chcesz usunąć tego wykładowcę z listy ?",
                    okButtonText: "Tak",
                    cancelButtonText: "Nie"
                }).then(result => {
                    if(result) {
                        this.$store.dispatch("removeLecturer", this.editedLecturer);
                        this.$navigator.navigate("/lecturers");
                    }
                });
            },
            editLecturer: function () {
                this.$store.dispatch("updateLecturer", this.editedLecturer);
                this.$navigator.navigate("/lecturers");
            }
        }
    }
</script>

<style scoped>

</style>