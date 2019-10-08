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
    }
</style>