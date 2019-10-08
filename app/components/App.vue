<template>
    <Layout></Layout>
</template>

<script>
    import Layout from "~/layout/Layout";
    export default {
        data() {
            return {}
        },
        components: {
            Layout,
        },
        created() {
            console.log("Navigator");
        }
    }
</script>
