<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { url } = route.params;


const { data } = await useFetch(`/guitarras?filters[url]=${url}&populate=imagen`, {
  baseURL: config.public.apiUrl,
});

const { nombre, descripcion, imagen, precio } = data.value.data[0].attributes;
const urlImg = imagen.data.attributes.formats.medium.url;

useHead({ 
  title: nombre,
  meta: [
    {
      name: "description", content: `Guitarras, venta de guitarras, guitarra ${nombre}` 
    }
  ], 
  })
</script>

<template>
  <div class="grid grid-cols-3 gap-4 items-center max-w-3xl mx-auto">
    <img :src="urlImg" :alt="`Imagen guitarra ${nombre}`">
    <div class="col-span-2 p-4 flex flex-col gap-3">
      <h3 class="text-orange-500 text-xl font-bold uppercase">{{ nombre }}</h3>
      <p class="text-justify">{{ descripcion }}</p>
      <p class="text-orange-500 text-3xl font-bold">${{ precio }}</p>
    </div>
  </div>
</template>