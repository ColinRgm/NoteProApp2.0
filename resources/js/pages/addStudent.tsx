import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Input } from '@/components/ui/input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter un apprenti',
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
                        <div className="flex flex-row items-center justify-center gap-5">
                            <label htmlFor="firstName">Prénom:</label>
                            <Input id="firstName" placeholder="Prénom" type="text" className="w-130" />
                        </div>

                        <div className="flex flex-row items-center justify-center gap-5">
                            <label htmlFor="firstName">Nom:</label>
                            <Input id="lastname" placeholder="Nom" type="text" className="w-130" />
                        </div>

                        <div className="flex flex-row items-center justify-center gap-5">
                            <label htmlFor="firstName">Email:</label>
                            <Input id="email" placeholder="Email" type="email" className="w-130" />
                        </div>

                        <button className="mt-[50px] w-xl rounded-lg bg-[#141e66] p-2 text-white">Ajouter</button>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
