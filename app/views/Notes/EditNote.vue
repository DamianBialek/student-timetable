<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *, auto, auto" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout @tap="$navigator.back()" class="pr-10" row="0" col="0" horizontalAlignment="left"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-arrow-left"></FontIcon>
                </StackLayout>
                <StackLayout row="0" col="1" class="px-10 va-center text-center">
                    <Label text="Edytuj notatkę" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="removeNote" row="0" col="2" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-trash"></FontIcon>
                </StackLayout>
                <StackLayout @tap="editNote" row="0" col="3" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-check"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%" class="p-15">
            <TextField v-model="editedNote.name" hint="Nazwa..."></TextField>
            <TextView hint="Opis..." v-model="editedNote.description"></TextView>
            <TextField editable="false" @tap="selectSubject" v-model="editedNote.subject" hint="Wybierz przedmiot..."></TextField>
            <Button text="Zapisz" class="btn mt-10" @tap="editNote"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";
    import NoteSelectSubject from "./components/NoteSelectSubject";

    export default {
        name: "EditNote",
        props: ['note'],
        components: {
            AppActionBar
        },
        data() {
            return {
                editedNote: {
                    name: '',
                    description: '',
                    subject: ''
                }
            }
        },
        computed: {
            subject() {
                return id => this.$store.getters.subject(id);
            }
        },
        created() {
            this.editedNote = this.note;
            this.$store.dispatch("loadSubjects")
                .then(() => {
                    const subject = this.subject(this.editedNote.subject) || { name: 'Brak' };
                    this.editedNote = {
                        ...this.editedNote,
                        subject: {
                            ...subject,
                            toString: () => subject.name
                        }
                    };
                })
        },
        methods: {
            removeNote: function () {
                confirm({
                    title: "Potwierdzenie akcji",
                    message: "Czy na pewno chcesz usunąć tę notatkę ?",
                    okButtonText: "Tak",
                    cancelButtonText: "Nie"
                }).then(result => {
                    if(result) {
                        this.$store.dispatch("removeNote", this.editedNote);
                        this.$navigator.navigate("/notes");
                    }
                });
            },
            editNote: function () {
                this.$store.dispatch("updateNote", this.editedNote);
                this.$navigator.navigate("/notes");
            },
            selectSubject: function () {
                this.$showModal(NoteSelectSubject, { props: { selectedSubject: this.note.subject.id || 1 } })
                    .then((subject) => {
                        this.editedNote.subject = subject;
                    })
            }
        }
    }
</script>

<style scoped>

</style>