// src/app/terms/page.tsx
import Container from "@/app/_components/container";

export default function TermsPage() {
  return (
    <main>
      <Container>
        <h1 className="text-3xl font-bold text-center my-8">Terms and Conditions</h1>
        <article className="max-w-2xl mx-auto text-lg">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Introduction</h2>
            <p>Welcome to UAANT! These terms and conditions outline the rules and regulations for the use of UAANT's Website, located at uaant.org.au.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Consent</h2>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use UAANT if you do not agree to take all of the terms and conditions stated on this page.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">License</h2>
            <p>Unless otherwise stated, UAANT and/or its licensors own the intellectual property rights for all material on UAANT. All intellectual property rights are reserved.</p>
          </section>

          {/* Add more sections as needed */}

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Disclaimer</h2>
            <p>The information provided on the UAANT website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind.</p>
          </section>

          {/* You can continue adding sections specific to your terms, like "User Responsibilities", "Governing Law", "Limitation of Liability",
etc.*/}


          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">User Responsibilities</h2>
            <p>Users are expected to use the website responsibly and adhere to the publishing guidelines of the site. Any misuse of the site or its content may result in suspension or termination of access to the service.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the Northern Territory of Australia, without regard to its conflict of law provisions.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Limitation of Liability</h2>
            <p>Our website and its content are provided on an as-is and as-available basis. UAANT shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from the use of or inability to use the website.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
            <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us for further clarification.</p>
          </section>

        </article>
      </Container>
    </main>
  );
}

