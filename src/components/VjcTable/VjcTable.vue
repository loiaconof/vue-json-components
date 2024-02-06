<template>
    <table class="vjc-table">
        <component
            :is="headerComponent"
            :filterDispatcher="headerFilterComponent"
            :head="head"
            :useFilters="useFilters"
            :useOrder="useOrder"
        />
        <component
            :is="bodyComponent"
            :cellDispatcher="cellDispatcherComponent"
            :rows="rows"
        />
        <component
            :is="footerComponent"
            :usePagination="usePagination"
        />
    </table>
</template>

<script setup lang="ts">
import VjcTableBody from './children/VjcTableBody.vue';
import VjcTableFooter from './children/VjcTableFooter.vue'
import VjcTableHeader from './children/VjcTableHeader.vue'
import VjcTableCellDispatcher from './children/VjcTableCellDispatcher.vue';
import VjcTableFilterDispatcher from './children/VjcTableFilterDispatcher.vue';
import type { Component } from 'vue';
import type { VjcTableHead, VjcTableRow } from './VjcTable';

interface Props {
    headerComponent: Component
    bodyComponent: Component
    footerComponent: Component
    headerFilterComponent: Component
    cellDispatcherComponent: Component
    head: VjcTableHead
    rows: VjcTableRow[]
    useOrder: boolean
    usePagination: boolean
    useFilters: boolean
    useContextMenu: boolean
}

withDefaults(defineProps<Props>(), {
    headerComponent: VjcTableHeader,
    bodyComponent: VjcTableBody,
    footerComponent: VjcTableFooter,
    headerFilterComponent: VjcTableFilterDispatcher,
    cellDispatcherComponent: VjcTableCellDispatcher,
    useOrder: false,
    usePagination: false,
    useFilters: false,
    useContextMenu: false,
})
</script>