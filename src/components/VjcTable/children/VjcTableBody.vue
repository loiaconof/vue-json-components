<template>
    <tr
        v-for="(row, index) in rows"
        :key="index"
    >
        <td 
            v-for="(cell, index) in row.cells"
            :key="index"
        >
            <template v-if="Array.isArray(cell)">
                <component
                    :is="cellDispatcher"
                    v-for="(element, index) in cell"
                    :key="index"
                    :cell="element"
                />
            </template>

            <component
                :is="cellDispatcher"
                v-else
                :cell="cell"
            />
        </td>
    </tr>
</template>

<script setup lang="ts">
import type { Component } from "vue"
import type { VjcTableRow } from "../VjcTable"

interface Props {
    cellDispatcher: Component
    rows: VjcTableRow[]
}
defineProps<Props>()
</script>