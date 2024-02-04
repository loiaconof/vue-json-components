<template>
    <div v-if="htmlInputTypes.includes(filter.type)">
        <input
            type="text"
            v-model="filter.value"
        />
    </div>
</template>

<script setup lang="ts">
import type { VjcTableHeadColumnFilter } from "../VjcTable"

const htmlInputTypes = [
    'text',
    'date',
    'number',
]

interface Props {
    filter: VjcTableHeadColumnFilter
}
defineProps<Props>()
</script>