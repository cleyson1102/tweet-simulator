<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Simulador de Tweets</span>

      <button
        class="btn"
        :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
        @click="openCloseForm"
      >
        {{ !showForm ? "Nuevo Tweet" : "Cerrar Tweet" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: auto;
}
</style>
