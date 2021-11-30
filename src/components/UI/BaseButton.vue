<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    background: none;
    cursor: pointer;
    transition: 0.4s;
    font-family: 'Roboto Slab', serif;
}
.btn:hover {
    background-color: #fff;
    color: #000;
  }
</style>