// src/app/privacy/page.tsx
import Container from "@/_components/container";

export default function PrivacyPage() {
  return (
    <main>
      <Container>
        <h1 className="text-3xl font-bold text-center my-8">Privacy Policy</h1>
        <article className="max-w-2xl mx-auto text-lg">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Introduction</h2>
            <p>We at UAANT take your privacy seriously. This policy explains the types of information we collect, how it is handled, and how we protect your personal data.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Information Collection</h2>
            <p>When you visit our website, we may collect certain information about your device and your interactions with our site.</p>
            {/* Add more paragraphs as needed */}
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Use of Information</h2>
            <p>The information we collect is used to provide services to you, to enhance your user experience, and to improve our website's functionality.</p>
            {/* Add more paragraphs as needed */}
          </section>

          {/* Continue with more sections as needed */}

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Your Rights</h2>
            <p>You have the right to request access to the personal information we hold about you and to ask for it to be
              corrected if it is inaccurate. If you have any concerns about our use of your personal data, you can also request that we delete or restrict the use of that data.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Cookies and Tracking Technology</h2>
            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Third-Party Services</h2>
            <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
          </section>
        </article>
      </Container>
    </main>
  )
}
