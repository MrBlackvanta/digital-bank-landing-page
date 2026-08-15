import { features } from "@/data/data";

export default function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-gray-100 px-6 md:px-20"
    >
      <div className="v-page py-16 text-center md:py-20 xl:py-24 xl:text-left">
        <h2 id="features-heading" className="v-section-heading">
          Why choose Digitalbank?
        </h2>
        <p className="mx-auto mt-4 max-w-130 v-lead md:mt-8 xl:mx-0 xl:max-w-160">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>

        <ul className="mt-12 grid v-reveal gap-y-8 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-16 md:mt-18 md:text-left lg:grid-cols-4 lg:gap-7.5">
          {features.map(({ title, description, Icon }) => (
            <li key={title}>
              <Icon className="mx-auto size-18 rounded-full v-gradient text-white md:mx-0" />
              <h3 className="mt-10 text-heading-md">{title}</h3>
              <p className="mt-6 text-body-sm text-gray-600 md:text-body">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
