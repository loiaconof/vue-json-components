# Table - Introduction

<vjc-table
    :head='head'
    :rows='rows'
    :useFilters='true'
    :usePagination='true'
/>

<script setup>
import VjcTable from '../../../../src/components/VjcTable/VjcTable.vue'

const head = {
    columns: [
        {
            columnId: '1',
            label: 'column 1',
        },
        {
            columnId: '2',
            label: 'column 2',
            filter: {
                type: 'text',
                value: 'a'
            }
        },
        {
            columnId: '3',
            label: 'column 3',
            filter: {
                type: 'date',
                value: ''
            }
        },
    ]
}
const rows = {
    /*utilities: [

    ],*/
    ceils: [
        {
            columnId: '1',
            label: 'r1 c1',
            type: 'text',
        },
        {
            columnId: '2',
            label: 'r1 c2',
            type: 'text',
        },
        {
            columnId: '3',
            label: 'r1 c3',
            type: 'text',
        },
    ]
}
</script>