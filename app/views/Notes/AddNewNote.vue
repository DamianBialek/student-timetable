<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *, auto" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout @tap="$navigator.back()" class="pr-10" row="0" col="0" horizontalAlignment="left"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-arrow-left"></FontIcon>
                </StackLayout>
                <StackLayout row="0" col="1" class="px-10 va-center text-center">
                    <Label text="Dodaj nową notatkę" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="saveNote" row="0" col="2" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-check"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%" class="p-15">
            <TextField v-model="note.name" hint="Nazwa..."></TextField>
            <TextView hint="Opis..." v-model="note.description"></TextView>
            <TextField editable="false" @tap="selectSubject" v-model="note.subject" hint="Wybierz przedmiot..."></TextField>
            <Button text="Zapisz" class="btn mt-10" @tap="saveNote"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";
    import NoteSelectSubject from "./components/NoteSelectSubject";
    
    export default {
        name: "AddNewNote",
        components: {
            AppActionBar
        },
        data() {
            return {
                note: {
                    name: '',
                    description: '',
                    subject: ''
                }
            }
        },
        methods: {
            saveNote: function () {
                this.$store.dispatch("addNewNote", this.note);
                this.$navigator.navigate("/notes");
            },
            selectSubject: function () {
                this.$showModal(NoteSelectSubject, { props: { selectedSubject: this.note.subject.id || 1 } })
                    .then((subject) => {
                        this.note.subject = subject;
                    })
            }
        }
    }
</script>

<style scoped>

</style>