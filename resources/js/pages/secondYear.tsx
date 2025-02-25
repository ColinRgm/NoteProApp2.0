import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import GradesTables from '@/components/grade-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: '2ère année',
        href: '/secondYear',
    },
];

export default function SecondYear() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="2ère année" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">2ème année</CardTitle>
                    <CardContent>
                        <GradesTables moduleName="Module 12" pdfUrl="test12.pdf" grades={4} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
