<template>
    {{ useFilters }} - {{ useOrder }}
</template>

<script setup lang="ts">

interface Props {
    useFilters: boolean
    useOrder: boolean
}
defineProps<Props>()
</script>