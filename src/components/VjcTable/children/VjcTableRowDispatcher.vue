<template>
    <td v-for="ceil in rows.ceils">
        <p v-if="ceil.type === 'text'">
            {{ ceil.label }}
        </p>
    </td>
</template>

<script setup lang="ts">
import type { VjcTableCeil } from "../VjcTable"

interface Props {
    rows: VjcTableCeil[]
}
defineProps<Props>()
</script>