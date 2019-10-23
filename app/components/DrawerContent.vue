<template>
    <GridLayout rows="auto, *"  class="sidedrawer-container">
        <StackLayout row="0" height="80" class="text-center va-center sidedrawer-header">
            <Label text="Menu" class="fs-25" />
        </StackLayout>
        <ScrollView row="1" class="sidedrawer-content">
            <StackLayout class="mt-15">
                <GridLayout :class="['sidedrawer-list-item', {selected: currentRoute === 'Home'}]">
                    <Label @tap="navigate('/home')" col="0" text="Home" />
                </GridLayout>
                <GridLayout :class="['sidedrawer-list-item', {selected: currentRoute === 'Subjects'}]">
                    <Label @tap="navigate('/subjects')" col="0" text="Przedmioty" />
                </GridLayout>
                <GridLayout :class="['sidedrawer-list-item', {selected: currentRoute === 'Lecturers'}]">
                    <Label @tap="navigate('/lecturers')" col="0" text="Wykładowcy" />
                </GridLayout>
                <GridLayout :class="['sidedrawer-list-item', {selected: currentRoute === 'Notes'}]">
                    <Label @tap="navigate('/notes')" col="0" text="Notatki" />
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
    export default {
        name: "DrawerContent",
        data() {
            return {
                currentRoute: '',
            }
        },
        computed: {
          getCurrentRouteName() {
              return this.$navigator.route
          }
        },
        methods: {
            navigate: function (to) {
                this.$navigator.navigate(to);
                this.$store.dispatch('closeDrawer')
            }
        },
        watch:{
            getCurrentRouteName(newRoute) {
                this.currentRoute = !!newRoute.meta && newRoute.meta.name || '';
            }
        }
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