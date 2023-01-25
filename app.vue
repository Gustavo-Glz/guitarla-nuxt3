<script setup>
useHead({
  titleTemplate: (titlePage) =>
    titlePage ? `GuitarLA | ${titlePage}` : "GuitarLA",
  htmlAttrs: {
    lang: "es",
  },
});
</script>

<template>
  <TheHeader />
  <main class="container mx-auto">
    <NuxtPage />
  </main>
  <TheFooter />
</template>

