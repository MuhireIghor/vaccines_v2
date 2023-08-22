<script setup>
import { variants } from "../.nuxt/tailwind.config";
const isDark = ref(false);
const colorMode = useColorMode();
watchEffect(() => {
  if (isDark.value) {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
});
</script>
<template>
    <p class="font-semibold text-2xl text-center my-6">WELCOME TO <span class="text-[#0ea5e9] font-semibold">VACCINES</span></p>
  <slot />
</template>
