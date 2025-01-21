/**
 * Table Columns Definition
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 * @description Definisi kolom untuk data table dengan konfigurasi alignment
 */

import { ColumnDef } from '@tanstack/react-table'

// Definisikan tipe data untuk baris tabel
type DataType = {
    id: string
    name: string
    email: string
    role: string
}

// Gunakan type intersection untuk menambahkan properti kustom
type CustomColumnDef<T> = ColumnDef<T, unknown> & {
    cellClassName?: string
    headerClassName?: string
}

export const columns: CustomColumnDef<DataType>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        enableSorting: true,
        headerClassName: 'text-center',
        cellClassName: 'text-center',
    },
    {
        accessorKey: 'name',
        header: 'Nama',
        enableSorting: true,
        headerClassName: 'text-center',
        cellClassName: 'text-center',
    },
    {
        accessorKey: 'email',
        header: 'Email',
        enableSorting: true,
        headerClassName: 'text-center',
        cellClassName: 'text-left',
    },
    {
        accessorKey: 'role',
        header: 'Role',
        enableSorting: true,
        headerClassName: 'text-center',
        cellClassName: 'text-center',
    },
]
