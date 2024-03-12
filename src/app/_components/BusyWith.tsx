import Link from "next/link";

// src/app/_components/BusyWith.tsx
const BusyWith = () => {
    const sections = [
        {
            title: "What We Do",
            items: [
                "Visa Assistance",
                "Settlement Services",
                "Cultural Integration",
                "Organization of events",
                "Support in Difficult Times",
                "Advocacy",
                "Visa agent",
            ],
            gradient: "from-black to-blue-900",
            hover: "accent-2",
            link: "/volunteer",
        },
        {
            title: "Our Events",
            items: [
                "Christmas",
                "New Year",
                "Flag day",
                "Independence Day",
                "Territory Day",
                "Constitution Day",
                "Scheduled meetings",
                "Parliamentary rallies",
            ],
            gradient: "from-accent-1 to-hover-accent-1",
            hover: "accent-2",
            link: "/volunteer",
        },
        {
            title: "Our Projects",
            items: [
                "Help refugees from Ukraine",
                "Help in obtaining a driver's license",
                "Assistance in obtaining a visa",
                "Psychological support",
                "Online petitions for obtaining permanent resident after visa 786",
                "Online consultation with a visa agent",
            ],
            gradient: "from-yellow-500 to-yellow-600",
            hover: "hover-accent-1",
            link: "/volunteer",
        },
        {
            title: "Get Involved",
            content: "Whether you're a newcomer seeking support or an individual passionate about contributing to our community, we welcome your involvement. Join us in building a strong and connected Ukrainian community in the Northern Territory.",
            gradient: "from-indigo-900 to-black",
            hover: "accent-2",
            link: "/volunteer",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {sections.map((section, index) => (
                <div key={index} className={`bg-gradient-to-r p-8 text-white ${section.gradient}`}>
                    <h3 className="font-bold text-lg mb-3 text-white underline">{section.title}</h3>
                    {section.items ? (
                        <ul className="list-disc list-inside text-sm">
                            {section.items.map((item, itemIndex) => (
                                <li className={`hover:text-${section.hover}`} key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={`hover:text-${section.hover} text-sm`}>{section.content}</p>
                    )}
                    <p className={`hover:text-${section.hover} text-lg`}>
                        <Link href={section.link} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BusyWith;
