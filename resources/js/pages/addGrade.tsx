import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

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
                        Ajouter une note
                    </CardTitle>
                    <CardContent className="flex flex-col gap-5">
                        <Select>
                            <SelectTrigger className="w-[400px]">
                                <SelectValue placeholder="Choix de la branche" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        /*
                                         * Récupérer les modules / branches depuis la DB
                                         */
                                    }
                                    <SelectLabel>Module</SelectLabel>
                                    <SelectItem value="241">Module 241</SelectItem>

                                    <SelectLabel>CIE</SelectLabel>
                                    <SelectItem value="213">CIE 213</SelectItem>

                                    <SelectLabel>ECG</SelectLabel>
                                    <SelectItem value="213">ECG</SelectItem>

                                    <SelectLabel>Math / Anglais</SelectLabel>
                                    <SelectItem value="math">Math</SelectItem>
                                    <SelectItem value="anglais">Anglais</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-[400px]">
                                <SelectValue placeholder="Choix du semestre" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {/* Récupérer les semestres depuis la DB */}
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


                        <Button className="mt-4 w-xl border-1 border-[#141e66] bg-[#141e66] hover:bg-white hover:border-[#141e66] hover:border-1 hover:text-[#141e66]">
                            Ajouter
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
