<template>
    <Page>
        <StackLayout width="100%" class="p-15">
            <Label text="Lista dostępnych wykładowców" class="text-center fs-18"></Label>
            <ListPicker
                    valueField="id"
                    width="100%"
                    :items="lecturers"
                    v-model="selectedLecturerIndex"
            ></ListPicker>
            <Button @tap="selectLecturer" class="btn mt-5" text="Wybierz"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        name: "SubjectSelectLecturer",
        props: ['selectedLecturer'],
        data() {
            return {
                selectedLecturerIndex: 0,
            }
        },
        computed: {
            lecturers() {
                return this.$store.getters.lecturers.map((lecturer) => {
                    return {
                        ...lecturer,
                        toString: () => `${lecturer.name} ${lecturer.surname}`
                    }
                });
            },
            lecturerBySelectedIndex() {
                return this.lecturers[this.selectedLecturerIndex];
            }
        },
        created() {
            this.$store.dispatch("loadLecturers");
            this.selectedLecturerIndex = this.lecturers.findIndex(lecturer => lecturer.id === this.selectedLecturer);
        },
        methods: {
            selectLecturer: function () {
                this.$modal.close(this.lecturerBySelectedIndex);
            }
        }
    }
</script>

<style scoped>

</style>