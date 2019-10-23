<template>
    <Page>
        <AppActionBar>
            <GridLayout rows="*" columns="auto, *, auto" horizontalAlignment="left" verticalAlignment="center">
                <StackLayout row="0" col="0" verticalAlignment="center" class="pr-15">
                    <StackLayout @tap="$store.dispatch('openDrawer')" verticalAlignment="center">
                        <Label class="bar"></Label>
                        <Label class="bar"></Label>
                        <Label class="bar"></Label>
                    </StackLayout>
                </StackLayout>
                <StackLayout row="0" col="1" class="px-10 text-center va-center">
                    <Label text="Notatki" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="$navigator.navigate('/addNewNote')" row="0" col="2" class="px-15"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-plus"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" class="p-15" height="100%">
            <ListView v-if="notes.length" class="list-group" for="note in notes" separatorColor="transparent" @itemTap="editNote">
                <v-template>
                    <Label :text="note.name" class="subject-name py-10" textWrap="true"></Label>
                </v-template>
            </ListView>
            <StackLayout v-else>
                <Label text="Brak zapisanych notatek !" class="text-center fs-24" textWrap="true"></Label>
                <Button text="Dodaj nową notatkę" class="btn mt-10" @tap="$navigator.navigate('/addNewNote')"></Button>
            </StackLayout>

        </StackLayout>
    </Page>
</template>

<script>
    import AppActionBar from "~/components/AppActionBar.vue";

    export default {
        name: "Notes",
        components: {
            AppActionBar
        },
        computed: {
            notes() {
                return this.$store.getters.notes;
            }
        },
        created() {
            this.$store.dispatch("loadNotes");
        },
        methods: {
            editNote: function ({ item }) {
                this.$navigator.navigate("/editNote", { props: { note: item} })
            }
        }
    }
</script>

<style scoped lang="scss">
    .bar {
        background-color: #ffffff;
        width: 22;
        height: 4;
        margin-bottom: 3;
        border-radius: 2;
    }

    ListView {
        height: 100%;
    }
</style>