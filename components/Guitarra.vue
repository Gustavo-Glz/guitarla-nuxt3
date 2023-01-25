<script setup>
const props = defineProps(["guitarra"]);
const { nombre, descripcion, imagen, url, precio } = props.guitarra.attributes;
const urlImg = imagen.data.attributes.formats.medium.url;
</script>

<template>
  <div class="grid grid-cols-3 gap-4 items-center">
    <img :src="urlImg" :alt="`Imagen guitarra ${nombre}`" />
    <div class="col-span-2 p-4 flex flex-col gap-3">
      <h3 class="text-orange-500 text-xl font-bold uppercase">{{ nombre }}</h3>
      <p class="line-clamp-4 text-justify">{{ descripcion }}</p>
      <p class="text-orange-500 text-3xl font-bold">${{ precio }}</p>
      <NuxtLink
        class="block bg-black text-white text-center text-sm font-bold uppercase p-2 rounded-md transition-all ease-in-out duration-700 lg:hover:bg-orange-500"
        :to="`/guitarras/${url}`"
      >
        Ver Producto
      </NuxtLink>
    </div>
  </div>
</template>
