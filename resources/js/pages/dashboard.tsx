import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Tables from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard'
    }
];

interface Grade {
    id: number,
    name: string,
    pdf: string,
    grade: number
}

export default function Dashboard() {

    const [grades, setGrades] = useState<Grade[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/grades')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données...');
                }
                return response.json();
            })
            .then((data) => {
                setGrades(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erreur: ', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading)
        return (
            <AppLayout>
                <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                    <Card className="w-[70%] p-5">
                        <p>Chargement...</p>
                    </Card>
                </div>
            </AppLayout>
        );
    else if (error)
        return (
            <AppLayout>
                <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                    <Card className="w-[70%] p-5">
                        <p>Erreur: {error}</p>
                    </Card>
                </div>
            </AppLayout>
        );
    else {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />

                <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                    <div className="grid w-[70%] auto-rows-min gap-20 md:grid-cols-4">
                        <Card className="p-5">
                            <CardTitle size="lg">Culture générale</CardTitle>
                            <CardContent className="text-4xl">5</CardContent>
                        </Card>

                        <Card className="p-5">
                            <CardTitle size="lg">Base élargie</CardTitle>
                            <CardContent className="text-4xl">5</CardContent>
                        </Card>

                        <Card className="p-5">
                            <CardTitle size="lg" margin="small">
                                Informatique
                            </CardTitle>
                            <CardContent className="text-4xl">5</CardContent>
                        </Card>

                        <Card className="p-5">
                            <CardTitle size="lg">Culture générale</CardTitle>
                            <CardContent className="text-4xl">5</CardContent>
                        </Card>
                    </div>

                    <Card className="w-[70%] p-5">
                        <CardTitle size="xxl" margin="big">
                            5 dernière notes
                        </CardTitle>

                        {
                            /*
                             * Récupérer les 5 dernières notes (en fonction de la date)
                             * Limiter le nombre de lignes
                             */
                        }
                        <CardContent>
                            <Tables
                                col_one_title="Branche / modules"
                                col_two_title="PDF"
                                col_three_title="Note"

                                {
                                    grades.map(grade => (
                                        col_one_content = 'Module 231'
                                    col_two_content='test.pdf'
                                    col_three_content='5'
                                    ))
                                }
                            />
                        </CardContent>
                    </Card>

                    <div>
                        <button>
                            <Link href="/addGrade" prefetch>
                                <IoAddCircleOutline className="hover:[h-20 w-20] h-10 w-10" />
                            </Link>
                        </button>
                    </div>
                </div>
            </AppLayout>
        );
    }
}
