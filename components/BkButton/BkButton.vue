<template>
    <button @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BkButton',
    methods: {
        handleClick() {
            this.$emit('clicked')
        },
    },
}
</script>

<style lang="scss" scoped>
button {
    font-size: 1rem;
    padding: 20px 30px;
    border-radius: 30px;
    border: none;
    background-color: #4abf50;
    color: #fff;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
}
button:hover {
    background-color: #98e09c;
    transition: 0.3s all ease-in-out;
}
</style>
