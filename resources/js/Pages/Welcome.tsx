import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }: PageProps) {
    
    console.log(auth);
    
    return (
        <>
            <Head title="Inicio" />
            <div className="bg-gray-50 w-full max-w-5xl mx-auto py-6 px-2">
                <p>Hola</p>
            </div>
        </>
    );
}
