<template>
    <button class="icon-btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.icon-btn {
    background: none;
    border: none;
    border-radius: 10px;
    margin: 0.5em;
    padding: 0.2em 0.4em;
    font-size: 1.0em;
    color: white;
    cursor: pointer;
}
.icon-btn:hover {
    background-color: #898888;
    transition: 0.4s;
  }
</style>