import { type BreadcrumbItem } from '@/types';

import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Apprentis',
        href: '/settings/students',
    },
];

export default function Password() {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modification du mot de passe" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Modifier le mot de passe" />


                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
