export default {
    name: "MainContent",
    props: ['component'],
    render(h) {
        console.log("render");
        return h(
            'frame',
            [h(this.props.component)]
        )
    },
    mounted() {
        console.log(this.props.component);
    },
    created() {
        console.log("Adwdw")
    }
}
