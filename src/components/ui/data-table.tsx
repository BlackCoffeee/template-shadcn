/**
 * Data Table Component
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 * @description Komponen tabel yang dapat digunakan kembali dengan fitur striped, navigasi, dan pencarian
 */

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    getFilteredRowModel,
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
import {
    ArrowUpDown,
    Search,
    ChevronsLeft,
    ChevronsRight,
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

// Gunakan type intersection untuk custom column definition
type CustomColumnDef<T> = ColumnDef<T, unknown> & {
    cellClassName?: string
    headerClassName?: string
}

interface DataTableProps<TData> {
    columns: CustomColumnDef<TData>[]
    data: TData[]
}

export function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState<string>('')

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting,
            globalFilter,
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
            <div className='flex justify-end mb-4'>
                <div className='relative w-64'>
                    <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                    <Input
                        placeholder='Cari...'
                        value={globalFilter ?? ''}
                        onChange={e => setGlobalFilter(e.target.value)}
                        className='pl-8'
                    />
                    {globalFilter && (
                        <Button
                            variant='ghost'
                            onClick={() => setGlobalFilter('')}
                            className='absolute right-0 top-0 h-full px-3 hover:bg-transparent'
                        >
                            <X className='h-4 w-4' />
                        </Button>
                    )}
                </div>
            </div>

            <div className='rounded-md border border-none'>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead
                                        className={cn(
                                            'border-b border-foreground/50 text-foreground h-12',
                                            (
                                                header.column
                                                    .columnDef as CustomColumnDef<TData>
                                            ).headerClassName
                                        )}
                                        key={header.id}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className={cn(
                                                    header.column.getCanSort()
                                                        ? 'cursor-pointer select-none flex items-center gap-1'
                                                        : '',
                                                    'flex items-center',
                                                    (
                                                        header.column
                                                            .columnDef as CustomColumnDef<TData>
                                                    ).headerClassName ===
                                                        'text-center'
                                                        ? 'justify-center'
                                                        : (
                                                                header.column
                                                                    .columnDef as CustomColumnDef<TData>
                                                            )
                                                                .headerClassName ===
                                                            'text-right'
                                                          ? 'justify-end'
                                                          : 'justify-start'
                                                )}
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
                                            className={cn(
                                                'border-b border-foreground/50 text-muted-foreground',
                                                (
                                                    cell.column
                                                        .columnDef as CustomColumnDef<TData>
                                                ).cellClassName
                                            )}
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
                        size='icon'
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronsLeft className='h-4 w-4' />
                    </Button>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft className='h-4 w-4' />
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
                        size='icon'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight className='h-4 w-4' />
                    </Button>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() =>
                            table.setPageIndex(table.getPageCount() - 1)
                        }
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronsRight className='h-4 w-4' />
                    </Button>
                </div>
            </div>
        </div>
    )
}
