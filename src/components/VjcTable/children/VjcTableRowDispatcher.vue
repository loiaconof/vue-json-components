<template>
    <template v-for="ceil in rows.ceils">
        <td v-if="ceil.type === 'text'">
            {{ ceil.label }}
        </td>
    </template>
</template>

<script setup lang="ts">
import type { VjcTableCeil } from "../VjcTable"

interface Props {
    rows: VjcTableCeil[]
}
defineProps<Props>()
</script>