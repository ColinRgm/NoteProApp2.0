import { useEffect, useState } from 'react';

interface Grade {
    id: number,
    name: string,
    pdf: string,
    note: number,
    branch_id: number
}

interface Branche {
    id: number,
    name: string
}




export default function Tables() {

    const [grades, setGrades] = useState<Grade[]>([]);
    const [branches, setBranches] = useState<Branche[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

        fetch('http://127.0.0.1:8000/api/branches')
            .then((response_branch) => {
                if (!response_branch.ok) {
                    throw new Error('Erreur lors de la récupération des données...');
                }
                return response_branch.json();
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
            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <p>Chargement...</p>
            </div>
        );
    else if (error)
        return (
            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <p>Erreur: {error}</p>
            </div>
        );
    else {
        return (
            <>
                {/* ----- Tableau de note ----- */}
                <table className="w-[100%] divide-y-1 divide-gray-300">
                    {/* ----- Entête du tableau ----- */}
                    <thead className="h-20">
                    <tr>
                        <th className="tg-0lax w-4/6 text-left text-xl">Branches / modules</th>
                        <th className="tg-0lax w-1/6 text-xl">PDF</th>
                        <th className="tg-0lax w-1/6 text-xl">Note</th>
                    </tr>
                    </thead>

                    {/* ----- Contenu du tableau ----- */}
                    <tbody className="divide-y divide-gray-300">
                    {/* ----- Condition d'ajout pour chaque ligne du tableau ----- */}

                    {
                        grades.map(grade => {
                            const branch = branches ? branches.find(b => b.id === grade.branch_id) : undefined;

                            console.log('grade.branch_id:', grade.branch_id);
                            console.log('branches:', branch);

                            return (
                                <tr className="h-15 text-center" key={grade.id}>
                                    <td className="tg-0lax text-left">{branch.name}</td>
                                    <td className="tg-0lax">
                                        <a href={grade.pdf} target="_blank">Ouvrir</a>
                                    </td>
                                    <td className="tg-0lax">{grade.note}</td>
                                </tr>

                            );
                        })
                    }

                    </tbody>
                </table>
            </>
        );

    }
}
