import { type BreadcrumbItem } from '@/types';

import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Apprentis',
        href: 'students',
    },
];

export default function Students() {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid w-[70%] auto-rows-min gap-20 md:grid-cols-4">
                    <Card>
                        <CardTitle>

                        </CardTitle>

                        <CardContent>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
