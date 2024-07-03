<template>
  <router-link to="/" @click="isLoading.store.routeToMain = true"><img src="/logo.svg" alt="" /></router-link>
</template>

<script setup>
import { useLoadingStore } from '~/store';
const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>
