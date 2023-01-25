<script setup>
useHead({
  title: "Blog",
});
const config = useRuntimeConfig();

const { data, error } = await useFetch("/posts?populate=imagen", {
  baseURL: config.public.apiUrl,
});

const posts = toRaw(data.value.data)
</script>

<template>
  <section>
    <h2 class="text-orange-500 text-4xl text-center font-bold my-20">Blog</h2>
    <div>
      <Post v-for="post in posts" :post="post" />
    </div>
  </section>
</template>
