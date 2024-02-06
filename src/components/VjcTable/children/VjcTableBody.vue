<template>
    <tr
        v-for="(row, index) in rows"
        :key="index"
    >
        <component
            :is="rowDispatcher"
            :rows="row"
        />
    </tr>
</template>

<script setup lang="ts">
import type { Component } from "vue"
import type { VjcTableRow } from "../VjcTable"

interface Props {
    rowDispatcher: Component
    rows: VjcTableRow[]
}
defineProps<Props>()
</script>