// src/app/_components/footer.tsx
import Container from "@/app/_components/container";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <p className="text-lg font-semibold uppercase mb-2">About Us</p>
            <p>At UAANT, we are dedicated to fostering a vibrant and supportive community for Ukrainians in the Northern Territory of Australia. Our organization is committed to assisting Ukrainians who have chosen to make the Northern Territory their home by providing valuable resources, support, and a sense of community.</p>
          </div>
          
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <p className="text-lg font-semibold uppercase mb-2">Get Involved</p>
            <p>Whether you're a newcomer seeking support or an individual passionate about contributing to our community, we welcome your involvement. Join us in building a strong and connected Ukrainian community in the Northern Territory.</p>
            <p>For more information, reach out to us at uaant.inc@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-lg font-semibold uppercase mb-2">Contact</p>
            <p>E: uaant.inc@gmail.com</p>
            <div className="flex mt-4">
              {/* Icons */}
              <a href="https://t.me/uaant" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/assets/telegram.webp" alt="Telegram" width={24} height={24} />
              </a>
              <a href="https://facebook.com/uaant" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/assets/facebook.webp" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com/uaant" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/assets/instagram.webp" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
          
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
