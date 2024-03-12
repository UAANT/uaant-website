// src/app/_components/footer.tsx
import Container from "@/app/_components/container";
import Image from 'next/image';
import Link from "next/link";
import version from "../../../version";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between grid gap-y-10 gap-x-8 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <p className="text-lg font-semibold uppercase mb-2" id="about">About Us</p>
            <p>At UAANT, we are dedicated to fostering a vibrant and supportive community for Ukrainians in the Northern Territory of Australia. Our organization is committed to assisting Ukrainians who have chosen to make the Northern Territory their home by providing valuable resources, support, and a sense of community.</p>
          </div>

          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <p className="text-lg font-semibold uppercase mb-2">Get Involved</p>
            <p>Whether you're a newcomer seeking support or an individual passionate about contributing to our community, we welcome your involvement. Join us in building a strong and connected Ukrainian community in the Northern Territory.</p>
            <br />
            <p>For more information, reach out to us at uaant.inc@gmail.com</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">

          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-lg font-semibold uppercase mb-2" id="contact">Contact</p>
            <p>E: uaant.inc@gmail.com</p>
            <div className="flex mt-4">
              {/* Social Icons */}
              <a href="https://t.me/uaant_bot" target="_blank" rel="noopener noreferrer" className="mr-2">
                <Image src="/assets/telegram.webp" alt="Telegram" width={36} height={36} />
              </a>
              <a href="https://www.facebook.com/groups/uaant" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/assets/facebook.webp" alt="Facebook" width={36} height={36} />
              </a>
              <a href="https://www.instagram.com/uaant.inc/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/assets/instagram.webp" alt="Instagram" width={36} height={36} />
              </a>
            </div>
          </div>

        </div>
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between grid gap-x-8 grid-cols-2 md:grid-cols-4 border-t border-neutral-200">
          <Link href="/privacy" className="underline">Privacy Policy</Link>
          <Link href="/terms" className="underline">Terms and Conditions</Link>
          <div></div>
          <div className="text-sm">
            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
              alt="GitHub" width={14} height={14} className="inline-block" />&nbsp;
            <Link href="https://github.com/UAANT/uaant-website" target="_blank" className="underline">
              Open Source</Link>
            <br />
            <svg className="inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
            </svg>&nbsp;v.{version}&nbsp;<Link href="http://vasilkoff.com/contact-us" className="underline" target="_blank">Report a bug</Link>
            <br />© 2023-{new Date().getFullYear()} UAANT
          </div>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;
