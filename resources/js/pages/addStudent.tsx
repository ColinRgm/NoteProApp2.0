import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une apprenti',
        href: '/addStudent',
    },
];

export default function AddStudent() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter un apprenti" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        Ajouter un apprenti
                    </CardTitle>
                    <CardContent className="flex flex-col gap-5">

                        <button className="bg-[#141e66] text-white rounded-lg p-2 w-xl mt-[50px]">Ajouter</button>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
