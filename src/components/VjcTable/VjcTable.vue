<template>
    <table class="vjc-table">
        <component
            :is="headerComponent"
            :useFilters="useFilters"
            :useOrder="useOrder"
        />
    </table>
</template>

<script setup lang="ts">
import VjcTableFooter from '@/components/VjcTable/children/VjcTableFooter.vue'
import type { Component } from 'vue';

interface Props {
    headerComponent: Component
    useOrder: boolean
    usePagination: boolean
    useFilters: boolean
    useContextMenu: boolean
}

withDefaults(defineProps<Props>(), {
    headerComponent: VjcTableFooter,
    useOrder: false,
    usePagination: false,
    useFilters: false,
    useContextMenu: false,
})
</script>