/**
 * Data Table Component
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 * @description Komponen tabel yang dapat digunakan kembali dengan fitur striped dan navigasi
 */

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { ArrowUpDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        },
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    })

    // Fungsi untuk menghasilkan array nomor halaman
    const generatePaginationNumbers = () => {
        const currentPage = table.getState().pagination.pageIndex + 1
        const totalPages = table.getPageCount()
        const delta = 2 // Jumlah halaman yang ditampilkan di sekitar halaman aktif

        const range: (number | string)[] = []
        for (
            let i = Math.max(1, currentPage - delta);
            i <= Math.min(totalPages, currentPage + delta);
            i++
        ) {
            range.push(i)
        }

        // Tambahkan ellipsis dan nomor pertama/terakhir jika diperlukan
        if (range[0] && typeof range[0] === 'number') {
            const firstNumber = range[0] as number
            if (firstNumber > 1) {
                if (firstNumber > 2) {
                    range.unshift('...')
                }
                range.unshift(1)
            }
        }

        if (
            range[range.length - 1] &&
            typeof range[range.length - 1] === 'number'
        ) {
            const lastNumber = range[range.length - 1] as number
            if (lastNumber < totalPages) {
                if (lastNumber < totalPages - 1) {
                    range.push('...')
                }
                range.push(totalPages)
            }
        }

        return range
    }

    return (
        <div>
            <div className='rounded-md border border-none'>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead
                                        className='border-b border-foreground/50 text-foreground h-12'
                                        key={header.id}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className={
                                                    header.column.getCanSort()
                                                        ? 'cursor-pointer select-none flex items-center gap-1'
                                                        : ''
                                                }
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {header.column.getCanSort() && (
                                                    <ArrowUpDown className='h-4 w-4' />
                                                )}
                                            </div>
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className='border-b border-foreground/50'>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    className={`${
                                        index % 2 === 0 ? 'bg-background' : ''
                                    } h-12`}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell
                                            className='border-b border-foreground/50 text-muted-foreground'
                                            key={cell.id}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className='h-24 text-center'
                                >
                                    Tidak ada data
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className='flex items-center justify-between py-4'>
                <div className='flex items-center gap-2'>
                    <p className='text-sm text-muted-foreground'>Tampilkan</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={value => {
                            table.setPageSize(Number(value))
                        }}
                    >
                        <SelectTrigger className='h-8 w-[70px]'>
                            <SelectValue
                                placeholder={
                                    table.getState().pagination.pageSize
                                }
                            />
                        </SelectTrigger>
                        <SelectContent side='top'>
                            {[5, 10, 20, 30, 40, 50].map(pageSize => (
                                <SelectItem
                                    key={pageSize}
                                    value={`${pageSize}`}
                                >
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className='text-sm text-muted-foreground'>
                        data per halaman
                    </p>
                </div>
                <div className='flex items-center space-x-2'>
                    <Button
                        variant='ghost'
                        size='sm'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Sebelumnya
                    </Button>
                    {generatePaginationNumbers().map((pageNumber, idx) => (
                        <Button
                            key={idx}
                            variant={
                                pageNumber ===
                                table.getState().pagination.pageIndex + 1
                                    ? 'default'
                                    : 'ghost'
                            }
                            size='sm'
                            onClick={() => {
                                if (typeof pageNumber === 'number') {
                                    table.setPageIndex(pageNumber - 1)
                                }
                            }}
                            disabled={typeof pageNumber !== 'number'}
                            className={cn(
                                typeof pageNumber !== 'number'
                                    ? 'pointer-events-none px-2'
                                    : 'px-4'
                            )}
                        >
                            {pageNumber}
                        </Button>
                    ))}
                    <Button
                        variant='ghost'
                        size='sm'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Selanjutnya
                    </Button>
                </div>
            </div>
        </div>
    )
}
