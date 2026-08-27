import { LogoIcon } from "@/components/icons";
import { footerLinks, socialLinks } from "@/data/data";

export default function SiteFooter() {
  return (
    <footer className="bg-blue-950 px-6 text-white md:px-20">
      <div className="v-page flex flex-col items-center py-14 xl:flex-row xl:items-start xl:py-12">
        <div className="flex flex-col items-center xl:items-start">
          <a href="#" aria-label="Digitalbank home">
            <LogoIcon className="h-5.5 w-38.5" />
          </a>
          <ul className="mt-8 flex gap-4 xl:mt-14">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="-m-2 block p-2 hover:text-teal-500"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="mt-8 xl:mt-0 xl:ml-30">
          <ul className="flex flex-col items-center gap-4 text-body-sm xl:grid xl:auto-cols-40 xl:grid-flow-col xl:grid-rows-3 xl:items-start xl:gap-x-8 xl:gap-y-6">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="v-footer-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col items-center xl:mt-0 xl:ml-auto xl:items-end">
          <a href="#" className="v-btn">
            Request Invite
          </a>
          <p className="mt-6 text-body-sm text-white/55">
            © Digitalbank. All Rights Reserved
          </p>
        </div>
      </div>

      <p className="pb-0.5 text-center text-body-sm text-white/55">
        Coded by{" "}
        <a
          className="v-attribution-link"
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
