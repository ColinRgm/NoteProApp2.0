import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une note',
        href: '/addGrade',
    },
];

export default function AddGrade() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter une note" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        Ajouter un note
                    </CardTitle>
                    <CardContent>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choisir une branche" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Module</SelectLabel>
                                    <SelectItem value="241">Module 241</SelectItem>

                                    <SelectLabel>CIE</SelectLabel>
                                    <SelectItem value="213">CIE 213</SelectItem>

                                    <SelectLabel>Math / Anglais</SelectLabel>
                                    <SelectItem value="math">Math</SelectItem>
                                    <SelectItem value="anglais">Anglais</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
