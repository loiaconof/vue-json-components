<template>
    <component
        :is="rowDispatcher"
        :rows="rows"
    />
</template>

<script setup lang="ts">
import type { Component } from "vue"
import { VjcTableRow } from "../VjcTable"

interface Props {
    rowDispatcher: Component
    rows: VjcTableRow[]
}
defineProps<Props>()
</script>