<script setup>
const rutas = [
  { path: "/", text: "Inicio" },
  { path: "/nosotros", text: "Nosotros" },
  { path: "/tienda", text: "Tienda" },
  { path: "/blog", text: "Blog" },
];
</script>

<template>
  <nav>
    <RouterLink
      class="text-white text-sm font-bold uppercase py-1 px-2"
      v-for="{ path, text } in rutas"
      :to="path"
    >
      {{ text }}
    </RouterLink>
  </nav>
</template>
