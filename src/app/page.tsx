import React from "react";
import { Card } from "@/components";

const placeholderProducts = [
  {
    id: "p1",
    imageSrc: "/shoes/shoe-1.jpg",
    title: "Nike Air Force 1 Mid '07",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: "98.30",
    badge: { label: "Best Seller", tone: "orange" as const },
  },
  {
    id: "p2",
    imageSrc: "/shoes/shoe-4.webp",
    title: "Nike Pegasus Trail 4",
    subtitle: "Trail Running Shoes",
    meta: "4 Colour",
    price: "129.99",
  },
  {
    id: "p3",
    imageSrc: "/shoes/shoe-7.avif",
    title: "Air Jordan 1 Mid SE",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: "139.99",
  },
  {
    id: "p4",
    imageSrc: "/shoes/shoe-10.avif",
    title: "Nike Metcon 9",
    subtitle: "Training Shoes",
    meta: "2 Colour",
    price: "119.99",
  },
  {
    id: "p5",
    imageSrc: "/shoes/shoe-12.avif",
    title: "Nike ZoomX Vaporfly",
    subtitle: "Road Racing Shoes",
    meta: "2 Colour",
    price: "249.99",
  },
  {
    id: "p6",
    imageSrc: "/shoes/shoe-14.avif",
    title: "Nike Dunk Low Retro",
    subtitle: "Men's Shoes",
    meta: "5 Colour",
    price: "109.99",
  },
];

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
