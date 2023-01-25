<template>
  <header class="bg-hero-pattern bg-cover bg-center py-12">
    <section
      class="container mx-auto flex flex-col items-center gap-10 md:flex-row md:justify-between"
    >
      <NuxtLink to="/">
        <nuxt-img class="w-40" src="/img/logo.svg" alt="Logo" />
      </NuxtLink>
      <Nav class="flex gap-5"/>
    </section>
  </header>
</template>

<style lang="pcss">
header nav .router-link-active {
  @apply bg-orange-500
}
header nav a {
  @apply rounded-sm transition-all ease-in duration-300 hover:bg-orange-500;
}
</style>