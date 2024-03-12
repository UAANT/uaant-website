// src/app/_components/SupportAssociation.tsx
import Link from 'next/link';
import PPDonate from './PPDonate';

const SupportAssociation = () => {
    return (
        <section className="text-center" id='donate'>
            <div className='py-24'>
                <h2 className="text-4xl font-bold mb-4 text-accent-1">Support the association</h2>
                <p className="mb-6">
                    Even a little help can turn into a list of good things to do. Together we can improve this world.
                </p>
                <div className="inline-flex gap-4">
                    <PPDonate />
                </div>
            </div>
        </section>
    );
};

export default SupportAssociation;
