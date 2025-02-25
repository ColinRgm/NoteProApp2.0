import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import GradesTables from '@/components/grade-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: '3ème année',
        href: '/thirdYear',
    },
];

export default function ThirdYear() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="1ère année" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle>3ème année</CardTitle>
                    <CardContent>
                        <GradesTables
                            moduleName="Module 12"
                            pdfUrl="test12.pdf"
                            grades={5}
                        />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
