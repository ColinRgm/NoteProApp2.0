import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une note',
        href: '/addGrade',
    },
];

interface Branch {
    id: number;
    name: string;
}

export default function AddGrade() {
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/branches')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données...');
                }
                return response.json();
            })
            .then((data) => {
                setBranches(data);
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
                <Head title="Ajouter une note" />

                <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                    <Card className="w-[70%] p-5">
                        <CardTitle size="xxl" margin="big">
                            Ajouter une note
                        </CardTitle>
                        <CardContent className="flex flex-col gap-5">
                            <Select>
                                <SelectTrigger className="w-[400px]">
                                    <SelectValue placeholder="Choix de la branche" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Modules</SelectLabel>
                                        {branches
                                            .filter((branch) => branch.name.toLowerCase().includes('module'))
                                            .map((branch) => (
                                                <SelectItem key={branch.id} value={branch.id.toString()}>
                                                    {branch.name}
                                                </SelectItem>
                                            ))}

                                        <SelectLabel>CIE</SelectLabel>
                                        {branches
                                            .filter((branch) => branch.name.toLowerCase().includes('cie'))
                                            .map((branch) => (
                                                <SelectItem key={branch.id} value={branch.id.toString()}>
                                                    {branch.name}
                                                </SelectItem>
                                            ))}

                                        <SelectLabel>Math / Anglais</SelectLabel>
                                        {branches
                                            .filter(
                                                (branch) =>
                                                    branch.name.toLowerCase().includes('math') || branch.name.toLowerCase().includes('anglais'),
                                            )
                                            .map((branch) => (
                                                <SelectItem key={branch.id} value={branch.id.toString()}>
                                                    {branch.name}
                                                </SelectItem>
                                            ))}

                                        <SelectLabel>ECG</SelectLabel>
                                        {branches
                                            .filter((branch) => branch.name.toLowerCase().includes('ecg'))
                                            .map((branch) => (
                                                <SelectItem key={branch.id} value={branch.id.toString()}>
                                                    {branch.name}
                                                </SelectItem>
                                            ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-[400px]">
                                    <SelectValue placeholder="Choix du semestre" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>1ère année</SelectLabel>
                                        <SelectItem value="semestre_1">Semestre 1</SelectItem>
                                        <SelectItem value="semestre_2">Semestre 2</SelectItem>

                                        <SelectLabel>2ème année</SelectLabel>
                                        <SelectItem value="semestre_3">Semestre 3</SelectItem>
                                        <SelectItem value="semestre_4">Semestre 4</SelectItem>

                                        <SelectLabel>3ème année</SelectLabel>
                                        <SelectItem value="semestre_5">Semestre 5</SelectItem>
                                        <SelectItem value="semestre_6">Semestre 6</SelectItem>

                                        <SelectLabel>4ème année</SelectLabel>
                                        <SelectItem value="semestre_7">Semestre 7</SelectItem>
                                        <SelectItem value="semestre_8">Semestre 8</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue placeholder="Choix de la note" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>En dessus de la moyenne</SelectLabel>
                                        <SelectItem value="note_6">6</SelectItem>
                                        <SelectItem value="note_5_5">5.5</SelectItem>
                                        <SelectItem value="note_5">5</SelectItem>
                                        <SelectItem value="note_4_5">4.5</SelectItem>
                                        <SelectItem value="note_4">4</SelectItem>

                                        <SelectLabel>En dessous de la moyenne</SelectLabel>
                                        <SelectItem value="note_3_5">3.5</SelectItem>
                                        <SelectItem value="note_3">3</SelectItem>
                                        <SelectItem value="note_2_5">2.5</SelectItem>
                                        <SelectItem value="note_2">2</SelectItem>
                                        <SelectItem value="note_1_5">1.5</SelectItem>
                                        <SelectItem value="note_1">1</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Button className="mt-4 w-xl border-1 border-[#141e66] bg-[#141e66] hover:border-1 hover:border-[#141e66] hover:bg-white hover:text-[#141e66]">
                                Ajouter
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </AppLayout>
        );
    }
}
