import GradesTables from '@/components/ui/table';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Tables from '@/components/ui/table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: '1ère année',
        href: '/firstYear',
    },
];



export default function FirstYear() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="1ère année" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        1ère année
                    </CardTitle>
                    <CardContent>
                        <Tables
                            col_one_title="Branche / modules"
                            col_two_title="PDF"
                            col_three_title="Note"
                            col_one_content="Module 231"
                            col_two_content="test.pdf"
                            col_three_content="5"
                        />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
