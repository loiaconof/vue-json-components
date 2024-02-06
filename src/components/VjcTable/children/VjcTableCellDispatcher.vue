<template>
    <p v-if="cell.type === 'text'">
        {{ cell.label }}
    </p>
</template>

<script setup lang="ts">
import type { VjcTableCell } from "../VjcTable"

interface Props {
    cell: VjcTableCell
}
defineProps<Props>()
</script>