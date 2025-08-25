import React from "react";
import { Card } from "@/components";
import { placeholderProducts } from "@/constants";

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section aria-labelledby="latest-shoes-heading">
        <h2
          id="latest-shoes-heading"
          className="text-heading-2 font-jost text-[--color-dark-900]"
        >
          Latest Shoes
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProducts.map((p) => (
            <Card
              key={p.id}
              imageSrc={p.imageSrc}
              title={p.title}
              subtitle={p.subtitle}
              meta={p.meta}
              price={p.price}
              badge={p.badge}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
