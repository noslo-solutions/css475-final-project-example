import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {DataGrid} from "@mui/x-data-grid";

export default function Dashboard({ auth , meetings}) {
    console.log('meetings', meetings)
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'startTime', headerName: 'Start Time', width: 150 },
        { field: 'purpose', headerName: 'Purpose', width: 150 },
    ];
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Meetings</h2>}
        >
            <Head title="Meetings" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <DataGrid columns={columns} rows={meetings}></DataGrid>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
