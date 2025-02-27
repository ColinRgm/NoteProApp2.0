import { PencilIcon } from 'lucide-react';

interface TablesProps {

    col_one_title: string,
    col_two_title: string,
    col_three_title: string,

    col_one_content: string,
    col_two_content: string,
    col_three_content: string,
}

export default function Tables(
    {
        col_one_title,
        col_one_content,
        col_two_title,
        col_two_content,
        col_three_title,
        col_three_content
    }: TablesProps) {

    return (
        <>
            {/* ----- Tableau de note ----- */}
            <table className="w-[100%] divide-y-1 divide-gray-300">
                {/* ----- Entête du tableau ----- */}
                <thead className="h-20">
                <tr>
                    <th className="tg-0lax w-4/6 text-left text-xl">{col_one_title}</th>
                    <th className="tg-0lax w-1/6 text-xl">{col_two_title}</th>
                    <th className="tg-0lax w-1/6 text-xl">{col_three_title}</th>
                </tr>
                </thead>

                {/* ----- Contenu du tableau ----- */}
                <tbody className="divide-y divide-gray-300">
                {/* ----- Condition d'ajout pour chaque ligne du tableau ----- */}
                <tr className="h-15 text-center">
                    <td className="tg-0lax text-left">{col_one_content}</td>
                    <td className="tg-0lax">{col_two_content}</td>
                    <td className="tg-0lax">{col_three_content}</td>
                </tr>
                </tbody>
            </table>
        </>
    );

}
