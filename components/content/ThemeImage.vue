<script setup lang="ts">
const props = defineProps(['name', 'ext', 'alt'])
const colorMode = useColorMode()

const src = ref('')

onMounted(() => {
  console.log('init')
  updateImageSrc()
})

watch(colorMode, () => {
  console.log('changed')
  updateImageSrc()
})

function getTheme () {
  return colorMode.value
}

function updateImageSrc () {
  const theme = getTheme()
  console.log(theme)
  src.value = `${props.name}_${theme}.${props.ext}`
}
</script>

<template>
  <p>
    <img :src="src" :alt="alt"/>
  </p>
</template>
