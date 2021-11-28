<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    background: none;
    border: 2px solid #fff;
    margin: 0.5em 0.5em;
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 600;
    line-height: 1;
    color: white;
    text-decoration: none;
    cursor: pointer;
}
.button:hover {
    background-color: #898888;
    transition: 0.4s;
  }
</style>