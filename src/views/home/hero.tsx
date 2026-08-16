import mockups from "@/assets/images/image-mockups.webp";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip xl:h-164">
      <div className="hidden xl:v-hero-backdrop xl:block" />

      <div className="relative h-[min(92vw,36.25rem)] overflow-hidden bg-[url(/bg-intro-mobile.svg)] bg-cover bg-top xl:contents">
        <img
          src={mockups.src}
          alt=""
          width={mockups.width}
          height={mockups.height}
          fetchPriority="high"
          decoding="async"
          className="pointer-events-none absolute top-[-18.5%] left-1/2 z-10 h-5/4 w-auto max-w-none -translate-x-1/2 xl:-top-41.5 xl:left-[calc(50%+5.25rem)] xl:h-auto xl:w-3xl xl:translate-x-0"
        />
      </div>

      <div className="relative px-6 md:px-20 xl:h-full">
        <div className="v-page pt-12 pb-14 text-center md:pb-18 xl:flex xl:h-full xl:flex-col xl:justify-center xl:py-0 xl:text-left">
          <h1 className="mx-auto max-w-[8em] text-heading-xl md:text-display xl:mx-0">
            Next generation digital banking
          </h1>
          <p className="mx-auto mt-6 max-w-111.75 v-lead xl:mx-0">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <a href="#" className="mx-auto mt-6 v-btn xl:mx-0">
            Request Invite
          </a>
        </div>
      </div>
    </section>
  );
}
