export interface VjcTable {
    metadata: VjcTableMetadata,
    head: VjcTableHead,
    body: VjcTableBody,
    pagination: VjcTablePagination,
    footer: VjcTableFooter,
}

export interface VjcTableCeilCore {
    columnId: string,
}

export interface VjcTableHead {
    header: VjcTableHeadHeader[],
    filters: VjcTableHeadFilters[],
}

export interface VjcTableHeadHeader extends VjcTableCeilCore {
}

export interface VjcTableHeadFilters extends VjcTableCeilCore {
}

export interface VjcTableMetadata {
}

export interface VjcTableBody {
}

export interface VjcTablePagination {
}

export interface VjcTableFooter {
}