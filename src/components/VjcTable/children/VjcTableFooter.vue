<template>
    {{ usePagination }}
</template>

<script setup lang="ts">

interface Props {
    usePagination: boolean
}
defineProps<Props>()
</script>