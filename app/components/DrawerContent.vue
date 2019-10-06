<template>
    <GridLayout rows="auto, *"  class="sidedrawer-container">
        <StackLayout row="0" height="80" class="text-center va-center sidedrawer-header">
            <Label text="Menu" class="fs-25" />
        </StackLayout>
        <ScrollView row="1" class="sidedrawer-content">
            <StackLayout class="mt-15">
                <GridLayout class="sidedrawer-list-item">
                    <Label col="0" text="Home" />
                </GridLayout>
                <GridLayout class="sidedrawer-list-item">
                    <Label col="0" text="Subjects" />
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
    export default {
        name: "DrawerContent"
    }
</script>

<style scoped lang="scss">
    .sidedrawer {
        .sidedrawer-container {
            background-color: #53ba82;
            color: #ffffff;
        }
    }

    .sidedrawer-content {
        background-color: #ffffff;
        color: #000000;
    }

    .sidedrawer-list-item {
        Label {
            font-size: 20;
            padding: 15;
        }

        &.selected {
            background-color: #F8F8F8;

            Label {
                color: #3A53FF;
            }
        }
    }
</style>