<template>
    <ActionBar title="Student timetable">
        <slot></slot>
    </ActionBar>
</template>

<script>
    export default {
        name: "AppActionBar"
    }
</script>

<style scoped lang="scss">
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
        text-align: center;
    }

    .navbar-btn {
        color: #ffffff;
        width: 60;
    }
</style>