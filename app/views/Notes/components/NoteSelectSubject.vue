<template>
    <Page>
        <StackLayout width="100%" class="p-15">
            <Label text="Lista dostępnych przedmiotów" class="text-center fs-18"></Label>
            <ListPicker
                    valueField="id"
                    width="100%"
                    :items="subjects"
                    v-model="selectedSubjectIndex"
            ></ListPicker>
            <Button @tap="selectSubject" class="btn mt-5" text="Wybierz"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        name: "NoteSelectSubject",
        props: ['selectedSubject'],
        data() {
            return {
                selectedSubjectIndex: 0,
            }
        },
        computed: {
            subjects() {
                return this.$store.getters.subjects.map((subject) => {
                    return {
                        ...subject,
                        toString: () => `${subject.name}`
                    }
                });
            },
            subjectBySelectedIndex() {
                return this.subjects[this.selectedSubjectIndex];
            }
        },
        created() {
            this.$store.dispatch("loadSubjects");
            this.selectedSubjectIndex = this.subjects.findIndex(subject => subject.id === this.selectedSubject);
        },
        methods: {
            selectSubject: function () {
                this.$modal.close(this.subjectBySelectedIndex);
            }
        }
    }
</script>

<style scoped>

</style>