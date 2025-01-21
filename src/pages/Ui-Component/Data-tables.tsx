/**
 * Data Tables Page Component
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 * @description Halaman untuk menampilkan data dalam bentuk tabel dengan fitur striped dan navigasi
 */

import { PageTitle } from '@/components/ui/page-title'
import { DataTable } from '@/components/ui/data-table'
import { columns } from '@/components/tables/columns'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

// Data dummy untuk contoh
const data = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
    },
    {
        id: '3',
        name: 'Ahmad Rizki',
        email: 'ahmad@example.com',
        role: 'Editor',
    },
    {
        id: '4',
        name: 'Siti Nurhaliza',
        email: 'siti@example.com',
        role: 'User',
    },
    {
        id: '5',
        name: 'Budi Santoso',
        email: 'budi@example.com',
        role: 'Admin',
    },
    {
        id: '6',
        name: 'Dewi Putri',
        email: 'dewi@example.com',
        role: 'Editor',
    },
    {
        id: '7',
        name: 'Rudi Hermawan',
        email: 'rudi@example.com',
        role: 'User',
    },
    {
        id: '8',
        name: 'Nina Wati',
        email: 'nina@example.com',
        role: 'User',
    },
    {
        id: '9',
        name: 'Eko Prasetyo',
        email: 'eko@example.com',
        role: 'Editor',
    },
    {
        id: '10',
        name: 'Maya Sari',
        email: 'maya@example.com',
        role: 'Admin',
    },
    {
        id: '11',
        name: 'Doni Kusuma',
        email: 'doni@example.com',
        role: 'User',
    },
    {
        id: '12',
        name: 'Rina Melati',
        email: 'rina@example.com',
        role: 'User',
    },
    {
        id: '13',
        name: 'Agus Setiawan',
        email: 'agus@example.com',
        role: 'Editor',
    },
    {
        id: '14',
        name: 'Linda Wijaya',
        email: 'linda@example.com',
        role: 'User',
    },
    {
        id: '15',
        name: 'Hendra Gunawan',
        email: 'hendra@example.com',
        role: 'Admin',
    },
    {
        id: '16',
        name: 'Ani Sulistyo',
        email: 'ani@example.com',
        role: 'User',
    },
    {
        id: '17',
        name: 'Tono Pradana',
        email: 'tono@example.com',
        role: 'Editor',
    },
    {
        id: '18',
        name: 'Sri Wahyuni',
        email: 'sri@example.com',
        role: 'User',
    },
    {
        id: '19',
        name: 'Bambang Tri',
        email: 'bambang@example.com',
        role: 'User',
    },
    {
        id: '20',
        name: 'Yanti Kusuma',
        email: 'yanti@example.com',
        role: 'Admin',
    },
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
    },
    {
        id: '3',
        name: 'Ahmad Rizki',
        email: 'ahmad@example.com',
        role: 'Editor',
    },
    {
        id: '4',
        name: 'Siti Nurhaliza',
        email: 'siti@example.com',
        role: 'User',
    },
    {
        id: '5',
        name: 'Budi Santoso',
        email: 'budi@example.com',
        role: 'Admin',
    },
    {
        id: '6',
        name: 'Dewi Putri',
        email: 'dewi@example.com',
        role: 'Editor',
    },
    {
        id: '7',
        name: 'Rudi Hermawan',
        email: 'rudi@example.com',
        role: 'User',
    },
    {
        id: '8',
        name: 'Nina Wati',
        email: 'nina@example.com',
        role: 'User',
    },
    {
        id: '9',
        name: 'Eko Prasetyo',
        email: 'eko@example.com',
        role: 'Editor',
    },
    {
        id: '10',
        name: 'Maya Sari',
        email: 'maya@example.com',
        role: 'Admin',
    },
    {
        id: '11',
        name: 'Doni Kusuma',
        email: 'doni@example.com',
        role: 'User',
    },
    {
        id: '12',
        name: 'Rina Melati',
        email: 'rina@example.com',
        role: 'User',
    },
    {
        id: '13',
        name: 'Agus Setiawan',
        email: 'agus@example.com',
        role: 'Editor',
    },
    {
        id: '14',
        name: 'Linda Wijaya',
        email: 'linda@example.com',
        role: 'User',
    },
    {
        id: '15',
        name: 'Hendra Gunawan',
        email: 'hendra@example.com',
        role: 'Admin',
    },
    {
        id: '16',
        name: 'Ani Sulistyo',
        email: 'ani@example.com',
        role: 'User',
    },
    {
        id: '17',
        name: 'Tono Pradana',
        email: 'tono@example.com',
        role: 'Editor',
    },
    {
        id: '18',
        name: 'Sri Wahyuni',
        email: 'sri@example.com',
        role: 'User',
    },
    {
        id: '19',
        name: 'Bambang Tri',
        email: 'bambang@example.com',
        role: 'User',
    },
    {
        id: '20',
        name: 'Yanti Kusuma',
        email: 'yanti@example.com',
        role: 'Admin',
    },
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
    },
    {
        id: '3',
        name: 'Ahmad Rizki',
        email: 'ahmad@example.com',
        role: 'Editor',
    },
    {
        id: '4',
        name: 'Siti Nurhaliza',
        email: 'siti@example.com',
        role: 'User',
    },
    {
        id: '5',
        name: 'Budi Santoso',
        email: 'budi@example.com',
        role: 'Admin',
    },
    {
        id: '6',
        name: 'Dewi Putri',
        email: 'dewi@example.com',
        role: 'Editor',
    },
    {
        id: '7',
        name: 'Rudi Hermawan',
        email: 'rudi@example.com',
        role: 'User',
    },
    {
        id: '8',
        name: 'Nina Wati',
        email: 'nina@example.com',
        role: 'User',
    },
    {
        id: '9',
        name: 'Eko Prasetyo',
        email: 'eko@example.com',
        role: 'Editor',
    },
    {
        id: '10',
        name: 'Maya Sari',
        email: 'maya@example.com',
        role: 'Admin',
    },
    {
        id: '11',
        name: 'Doni Kusuma',
        email: 'doni@example.com',
        role: 'User',
    },
    {
        id: '12',
        name: 'Rina Melati',
        email: 'rina@example.com',
        role: 'User',
    },
    {
        id: '13',
        name: 'Agus Setiawan',
        email: 'agus@example.com',
        role: 'Editor',
    },
    {
        id: '14',
        name: 'Linda Wijaya',
        email: 'linda@example.com',
        role: 'User',
    },
    {
        id: '15',
        name: 'Hendra Gunawan',
        email: 'hendra@example.com',
        role: 'Admin',
    },
    {
        id: '16',
        name: 'Ani Sulistyo',
        email: 'ani@example.com',
        role: 'User',
    },
    {
        id: '17',
        name: 'Tono Pradana',
        email: 'tono@example.com',
        role: 'Editor',
    },
    {
        id: '18',
        name: 'Sri Wahyuni',
        email: 'sri@example.com',
        role: 'User',
    },
    {
        id: '19',
        name: 'Bambang Tri',
        email: 'bambang@example.com',
        role: 'User',
    },
    {
        id: '20',
        name: 'Yanti Kusuma',
        email: 'yanti@example.com',
        role: 'Admin',
    },
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
    },
    {
        id: '3',
        name: 'Ahmad Rizki',
        email: 'ahmad@example.com',
        role: 'Editor',
    },
    {
        id: '4',
        name: 'Siti Nurhaliza',
        email: 'siti@example.com',
        role: 'User',
    },
    {
        id: '5',
        name: 'Budi Santoso',
        email: 'budi@example.com',
        role: 'Admin',
    },
    {
        id: '6',
        name: 'Dewi Putri',
        email: 'dewi@example.com',
        role: 'Editor',
    },
    {
        id: '7',
        name: 'Rudi Hermawan',
        email: 'rudi@example.com',
        role: 'User',
    },
    {
        id: '8',
        name: 'Nina Wati',
        email: 'nina@example.com',
        role: 'User',
    },
    {
        id: '9',
        name: 'Eko Prasetyo',
        email: 'eko@example.com',
        role: 'Editor',
    },
    {
        id: '10',
        name: 'Maya Sari',
        email: 'maya@example.com',
        role: 'Admin',
    },
    {
        id: '11',
        name: 'Doni Kusuma',
        email: 'doni@example.com',
        role: 'User',
    },
    {
        id: '12',
        name: 'Rina Melati',
        email: 'rina@example.com',
        role: 'User',
    },
    {
        id: '13',
        name: 'Agus Setiawan',
        email: 'agus@example.com',
        role: 'Editor',
    },
    {
        id: '14',
        name: 'Linda Wijaya',
        email: 'linda@example.com',
        role: 'User',
    },
    {
        id: '15',
        name: 'Hendra Gunawan',
        email: 'hendra@example.com',
        role: 'Admin',
    },
    {
        id: '16',
        name: 'Ani Sulistyo',
        email: 'ani@example.com',
        role: 'User',
    },
    {
        id: '17',
        name: 'Tono Pradana',
        email: 'tono@example.com',
        role: 'Editor',
    },
    {
        id: '18',
        name: 'Sri Wahyuni',
        email: 'sri@example.com',
        role: 'User',
    },
    {
        id: '19',
        name: 'Bambang Tri',
        email: 'bambang@example.com',
        role: 'User',
    },
    {
        id: '20',
        name: 'Yanti Kusuma',
        email: 'yanti@example.com',
        role: 'Admin',
    },
]

const DataTablesPage: React.FC = () => {
    return (
        <div className='space-y-4'>
            <PageTitle title='Data Tables' />
            <Card>
                <CardHeader></CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={data} />
                </CardContent>
            </Card>
        </div>
    )
}

export default DataTablesPage
