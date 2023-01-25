<script setup>
useHead({ title: "Tienda" });
const config = useRuntimeConfig();

const { data, error } = await useFetch("/guitarras?populate=imagen", {
  baseURL: config.public.apiUrl,
});
const guitarras = data.value.data;

</script>

<template>
  <h2 class="text-orange-500 text-4xl text-center font-bold my-20">
    Nuestra Colección
  </h2>
  <h3 v-if="error">Estamos actualizando la tienda</h3>
  <div v-else class="grid gap-20 md:grid-cols-2 lg:grid-cols-3 mb-16">
    <Guitarra v-for="guitarra in guitarras" :guitarra="guitarra" />
  </div>
</template>
