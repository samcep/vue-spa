<template>
  <section class="flex flex-col">
    <h1>Pokemon <small class="text-blue-500">100</small></h1>

    <img
      class="w-[200px] h-[200px] mt-5"
      width="200"
      height="200"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`"
    />
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: string;
}

defineProps<Props>();
</script>
