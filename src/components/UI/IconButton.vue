<template>
    <button class="icon-btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.icon-btn {
    background: none;
    border: none;
    padding: 0.5em;
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: 0.4s;
}
</style>