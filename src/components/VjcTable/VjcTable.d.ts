export interface VjcTableCellCore {
    columnId: string,
}

export interface VjcTableHead {
    columns: VjcTableHeadColumn[]
}

export interface VjcTableHeadColumn extends VjcTableCellCore {
    label: string
    filter: VjcTableHeadColumnFilter
}

export interface VjcTableHeadColumnFilter {
    type: string
    value: any
}

export interface VjcTableRow {
    utilities: VjcTableUtility[]
    cells: VjcTableCell[]
}

export interface VjcTableCell extends VjcTableCellCore {
    type: string
    label: string
}

export interface VjcTableUtility {
    type: string
}