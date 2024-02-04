export interface VjcTableCeilCore {
    columnId: string,
}

export interface VjcTableHead {
    columns: VjcTableHeadColumn[]
}

export interface VjcTableHeadColumn extends VjcTableCeilCore {
    label: string
    filter: VjcTableHeadColumnFilter
}

export interface VjcTableHeadColumnFilter {
    type: string
    value: any
}

export interface VjcTableRow {
    utilities: VjcTableUtility[]
    ceils: VjcTableCeil[]
}

export interface VjcTableCeil extends VjcTableCeilCore {
    type: string
    label: string
}

export interface VjcTableUtility {
    type: string
}