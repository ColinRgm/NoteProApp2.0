import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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

        </AppLayout>
    );
}
