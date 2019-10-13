<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *, auto" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout @tap="$navigator.back()" class="pr-10" row="0" col="0" horizontalAlignment="left"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-arrow-left"></FontIcon>
                </StackLayout>
                <StackLayout row="0" col="1" class="px-10 va-center text-center">
                    <Label text="Utwórz nowy przedmiot" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="saveSubject" row="0" col="2" class="px-15" verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-check"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%" class="p-15">
            <TextField v-model="subject.name" hint="Nazwa przedmiotu..."></TextField>
            <TextField v-model="subject.lecturer" hint="Wykładowca..."></TextField>
            <Button text="Zapisz" class="btn mt-10" @tap="saveSubject"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";

    export default {
        name: "AddNewSubjects",
        data() {
            return {
                subject: {
                    name: '',
                    lecturer: ''
                }
            }
        },
        components: {
            AppActionBar
        },
        methods: {
            saveSubject: function () {
                this.$store.dispatch("addNewSubject", this.subject);
                this.$navigator.navigate("/subjects");
            }
        }
    }
</script>

<style scoped>

</style>