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
                <StackLayout row="0" col="1" class="p-10 text-center">
                    <Label text="Przedmioty" class="fs-18"></Label>
                </StackLayout>
                <StackLayout @tap="$navigator.navigate('/addNewSubject')" row="0" col="2" class="px-15"
                             verticalAlignment="center">
                    <FontIcon class="fa fas" name="fa-plus"></FontIcon>
                </StackLayout>
            </GridLayout>
        </AppActionBar>
        <StackLayout orientation="vertical" class="p-15" height="100%">
            <ListView v-if="subjects.length" class="list-group" for="subject in subjects" separatorColor="transparent">
                <v-template>
                    <Label :text="subject.name" class="subject-name py-10" textWrap="true"></Label>
                </v-template>
            </ListView>
            <StackLayout v-else>
                <Label text="Brak zapisanych przedmiotów !" class="text-center fs-24"></Label>
                <Button text="Dodaj nowy przedmiot" class="btn mt-10" @tap="$navigator.navigate('/addNewSubject')"></Button>
            </StackLayout>

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
        computed: {
            subjects() {
                return this.$store.getters.subjects;
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

    .subject-name {
        font-size: #ffffff;
    }


    ListView {
        height: 100%;
    }
</style>