/**
 * Table Columns Definition
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 * @description Definisi kolom untuk data table
 */

import { ColumnDef } from '@tanstack/react-table'

// Definisikan tipe data untuk baris tabel
type DataType = {
    id: string
    name: string
    email: string
    role: string
}

export const columns: ColumnDef<DataType>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        enableSorting: true,
    },
    {
        accessorKey: 'name',
        header: 'Nama',
        enableSorting: true,
    },
    {
        accessorKey: 'email',
        header: 'Email',
        enableSorting: true,
    },
    {
        accessorKey: 'role',
        header: 'Role',
        enableSorting: true,
    },
]
