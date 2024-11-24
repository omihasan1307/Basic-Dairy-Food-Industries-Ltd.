/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "@/shared/common/SectionHeader";
import Link from "next/link";
import React from "react";
import { RiServiceFill } from "react-icons/ri";

const Cosmetics = [
  {
    id: 1,
    title: "The Secret to Flawless Skin",
    subtitle: "Discover tips and tricks to achieve radiant, healthy skin with minimal effort.",
    // featured_image: img.cos1,
  },
  {
    id: 2,
    title: "Top 10 Makeup Trends of 2024",
    subtitle: "Stay ahead in the beauty game with these top makeup trends for the upcoming year.",
    // featured_image: img.cos2,
  },
  {
    id: 3,
    title: "Why Natural Ingredients Matter",
    subtitle: "Learn about the benefits of using cosmetics made with natural, skin-friendly ingredients.",
    // featured_image: img.cos3,
  },
  {
    id: 4,
    title: "The Evolution of Cosmetics ",
    subtitle: "Take a fascinating journey through the history of cosmetics and how it shaped modern beauty.",
    // featured_image: img.cos4,
  },
  {
    id: 5,
    title: "Skincare Myths Debunked",
    subtitle: "Separate fact from fiction as we debunk common skincare myths.",
    // featured_image: img.cos5,
  },
  {
    id: 6,
    title: "How to Choose Perfect Choice",
    subtitle: "A comprehensive guide to finding the right foundation for your skin type and tone.",
    // featured_image: img.cos6,
  },
];

const CosmeticsPage = async () => {
  return (
    <div>
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Our Products" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Explore <span className="font-bold hover:text-sk"> Maya&lsquo;s Cosmetics</span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent Products</p>
      </div>

      {/* Section */}
      <div className="my-10 grid gap-5 md:grid-cols-3 max-w-screen-xl mx-auto">
        {Cosmetics?.map((project: any) => (
          <section key={project.id} className="w-full">
            <div className="rounded-xl bg-white dark:bg-black opacity-80 hover:opacity-100 p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <Link href={`/blog/${project.id}`} aria-label={`link to blog ${project.title}`}>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  {/* <Image src={project.featured_image} alt={project.title} width={400} height={400} loading="eager" className="w-full" /> */}
                </div>
                <div className="space-y-3 py-4 px-2">
                  <h3 className="text-xl font-semibold lg:text-2xl">
                    {project.title.length > 50 ? project.title.slice(0, 50) + "..." : project.title}
                  </h3>
                  <p>{project.subtitle.length > 100 ? project.subtitle.slice(0, 100) + "..." : project.subtitle}</p>
                </div>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CosmeticsPage;
