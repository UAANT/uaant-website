// src/app/volunteer/page.tsx
import Container from "@/app/_components/container";
import Link from 'next/link';

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      title: "Visa Assistance",
      description: "Help newcomers navigate the complex visa application process.",
    },
    {
      title: "Cultural Integration",
      description: "Assist with cultural events and initiatives that promote Ukrainian culture.",
    },
    // Add additional opportunities as needed
  ];

  return (
    <main>
      <Container>
        <h1 className="text-3xl font-bold text-center my-8">Volunteer</h1>

        <div className="text-center mb-8">
          <p>Join us in making a difference in our community. Your skills and passion can contribute to the valuable work we do at UAANT.</p>
          <Link href="/join" passHref>
            <span className="mt-4 inline-block bg-accent-1 text-white py-2 px-6 rounded hover:bg-accent-1-light transition duration-300 cursor-pointer">Join Us Now</span>
          </Link>
        </div>

        {volunteerOpportunities.map((opportunity, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{opportunity.title}</h2>
            <p>{opportunity.description}</p>
          </section>
        ))}

        <div className="text-center my-8">
          <p>Ready to take the next step? Become a volunteer and be a part of our community's growth and success.</p>
          <Link href="/join" passHref>
            <span className="mt-4 inline-block bg-accent-1 text-white py-2 px-6 rounded hover:bg-accent-1-light transition duration-300 cursor-pointer">Join Us Now</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
