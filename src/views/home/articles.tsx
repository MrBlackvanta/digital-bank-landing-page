import { articles } from "@/data/data";

export default function Articles() {
  return (
    <section aria-labelledby="articles-heading" className="px-6 md:px-20">
      <div className="v-page py-16 text-center md:py-20 xl:text-left">
        <h2 id="articles-heading" className="v-section-heading">
          Latest Articles
        </h2>

        <ul className="mt-12 grid v-reveal gap-4 text-left sm:grid-cols-2 md:mt-16 lg:grid-cols-4 xl:mt-14 xl:gap-7.5">
          {articles.map(({ author, title, excerpt, image }) => (
            <li
              key={title}
              className="overflow-hidden rounded-card bg-white pb-7"
            >
              <img
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-50 w-full object-cover"
              />
              <div className="px-8 pt-6 sm:px-10 lg:px-5">
                <p className="text-caption text-gray-600">By {author}</p>
                <h3 className="mt-4 text-heading-sm">
                  <a href="#" className="v-article-link">
                    {title}
                  </a>
                </h3>
                <p className="mt-2 text-body-sm text-gray-600">{excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
