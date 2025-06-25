export interface Column {
    label: string;
    key: string;
    align?: 'left' | 'right' | 'center';
    isBold?: (cellValue: any, row: Record<string, any>, rowIndex: number) => boolean;
}

export interface TableProps {
    columns: Column[];
    rows: Record<string, any>[];
}