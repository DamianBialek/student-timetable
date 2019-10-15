<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *, auto, auto" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout @tap="$navigator.back()" class="pr-10" row="0" col="0" horizontalAlignment="left"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-arrow-left"></FontIcon>
                </StackLayout>
                <StackLayout row="0" col="1" class="px-10 va-center text-center">
                    <Label text="Edytuj przedmiot" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="removeSubject" row="0" col="2" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-trash"></FontIcon>
                </StackLayout>
                <StackLayout @tap="editSubject" row="0" col="3" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-check"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%" class="p-15">
            <TextField v-model="editedSubject.name" hint="Nazwa przedmiotu..."></TextField>
            <TextField editable="false" @tap="selectLecturer" v-model="editedSubject.lecturer" hint="Wybierz wykładowcę..."></TextField>
            <Button text="Zapisz" class="btn mt-10" @tap="editSubject"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";
    import SubjectSelectLecturer from "./components/SubjectSelectLecturer";

    export default {
        name: "EditSubject",
        props: ['subject'],
        components: {
            AppActionBar
        },
        data() {
            return {
                editedSubject: {}
            }
        },
        computed: {
            lecturer() {
                return id => this.$store.getters.lecturer(id);
            }
        },
        created() {
            this.editedSubject = this.subject;
            this.$store.dispatch("loadLecturers")
                .then(() => {
                    const lecturer = this.lecturer(this.subject.lecturer);
                    if(lecturer)
                        this.editedSubject = {
                            ...this.editedSubject,
                            lecturer: {
                                ...lecturer,
                                toString: () => `${lecturer.name} ${lecturer.surname}`
                            }
                        }
                });
        },
        methods: {
            editSubject: function () {
                this.$store.dispatch("updateSubject", this.editedSubject);
                this.$navigator.navigate("/subjects");
            },
            removeSubject: function () {
                confirm({
                    title: "Usuwanie przedmiotu",
                    message: "Czy na pewno chcesz usunąć ten przedmiot ?",
                    okButtonText: "Tak",
                    cancelButtonText: "Nie"
                }).then(result => {
                    if(result) {
                        this.$store.dispatch("removeSubject", this.editedSubject);
                        this.$navigator.navigate("/subjects");
                    }
                });
            },
            selectLecturer: function () {
                this.$showModal(SubjectSelectLecturer, { props: { selectedLecturer: this.subject.lecturer.id || 1 } })
                    .then((lecturer) => {
                        this.editedSubject.lecturer = lecturer;
                    })
            }
        }
    }
</script>

<style scoped>

</style>