<template>
    <Label
            :class="type"
            :color="color"
            :fontSize="size"
            :text="name | fonticon"
            :width="size"
            textAlignment="center"
            @tap="$emit('tap')"
    />
</template>

<script>
    export default {
        name: 'FontIcon',
        props: {
            color: {
                type: String,
                default: '#ffffff'
            },
            name: {
                type: String,
                required: true
            },
            size: {
                type: [String, Number],
                default: 15,
                validation: s => !isNaN(s)
            },
            type: {
                type: String,
                default: 'fa'
            }
        }
    }
</script>