import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import GradesTables from '@/components/grade-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid w-[70%] auto-rows-min gap-20 md:grid-cols-4">
                    <Card className="p-5">
                        <CardTitle>Culture générale</CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>

                    <Card className="p-5">
                        <CardTitle>Base élargie</CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>

                    <Card className="p-5">
                        <CardTitle>Informatique</CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>

                    <Card className="p-5">
                        <CardTitle>Culture générale</CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>
                </div>

                <Card className="w-[70%] p-5">
                    <CardTitle>5 dernière notes</CardTitle>
                    <CardContent>
                        <GradesTables moduleName="1" pdfUrl="2" grades={3} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
