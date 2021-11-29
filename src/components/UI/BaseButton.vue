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
}
.btn:hover {
    background-color: #fff;
    color: #000;
  }
</style>