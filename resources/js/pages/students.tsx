import { type BreadcrumbItem } from '@/types';

import { Head, Link } from '@inertiajs/react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Tables from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { IoAddCircleOutline } from 'react-icons/io5';

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
                <div className="grid w-[70%] auto-rows-min">
                    <Card className="p-5">
                        <CardTitle size="xxl" margin="big">
                            Liste des apprentis
                        </CardTitle>

                        <CardContent>
                            <Tables
                                col_one_title="Prénom"
                                col_two_title="Nom"
                                col_three_title="Année"

                                col_one_content="Jean"
                                col_two_content="Dupont"
                                col_three_content="2021"
                            />
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <button>
                        <Link href="/addStudent" prefetch>
                            <IoAddCircleOutline className="hover:[h-20 w-20] h-10 w-10" />
                        </Link>
                    </button>
                </div>
            </div>
        </AppLayout>
    );
}
