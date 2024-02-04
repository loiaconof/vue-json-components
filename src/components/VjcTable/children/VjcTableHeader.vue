<template>
    <tr>
        <th v-for="column in head.columns" :key="column.columnId">
            {{ column.label }}
        </th>
    </tr>
    <tr v-if="useFilters">
        <td v-for="column in head.columns" :key="column.columnId">
            <component
                :is="filterDispatcher"
                v-if="column.filter"
                :filter="column.filter"
            />
        </td>
    </tr>
</template>

<script setup lang="ts">
import type { Component } from "vue"
import type { VjcTableHead } from "../VjcTable"

interface Props {
    filterDispatcher: Component
    head: VjcTableHead
    useFilters: boolean
    useOrder: boolean
}
defineProps<Props>()
</script>