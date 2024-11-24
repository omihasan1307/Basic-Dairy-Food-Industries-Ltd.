/* eslint-disable @typescript-eslint/no-explicit-any */

import SectionHeader from "@/shared/common/SectionHeader";

import Image from "next/image";
import { img } from "@/shared/constant/imgExport";
import { FaStar } from "react-icons/fa";

const BrandsName = [
  {
    id: 1,
    title: "Food",
    subtitle:
      "Delivering a diverse range of high-quality, nutritious, and delicious food products that cater to your everyday needs. We ensure freshness and excellence in every bite to promote a healthier and happier lifestyle for you and your family.",
    featured_image: img.brand1,
  },
  {
    id: 2,
    title: "Animal Nutrition",
    subtitle:
      "Offering scientifically formulated animal nutrition products designed to enhance health, growth, and productivity. Our solutions are crafted to support sustainable farming practices and ensure the well-being of animals for thriving agricultural ecosystems.",
    featured_image: img.brand2,
  },
  {
    id: 3,
    title: "Specialized Services",
    subtitle:
      "Providing tailored services and innovative solutions to meet unique customer demands. We specialize in bridging gaps with expertise, ensuring excellence and efficiency across various industries with a focus on quality and customer satisfaction.",
    featured_image: img.brand3,
  },
];

const TechnologySection = () => {
  return (
    <div className="py-10 text-center px-2 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center flex-col space-y-5">
        <SectionHeader text="Nourishing Lives, One Bite at a Time" icon={FaStar} />
        <p className="text-5xl font-bold leading-tight">Celebrating Flavor and Nutrition</p>
        <p className="text-gray-500">
          Basic Dairy & Food Industries Ltd. is dedicated to enriching lives with high-quality dairy and food products. From farm-fresh dairy to
          innovative food creations, we bring joy and nourishment to every table with care and precision.
        </p>
      </div>

      <div className=" mt-20 grid gap-8 md:grid-cols-3">
        {BrandsName?.map((project: any) => (
          <section key={project.id} className="w-full">
            <div className="flex items-center justify-center flex-col space-y-8">
              <div className="relative flex items-center justify-center overflow-hidden rounded-full border-8 border-basicColor  w-48 h-48 shadow-lg">
                <Image src={project.featured_image} alt={"image"} width={192} height={192} loading="eager" className="rounded-full object-cover" />
              </div>
              <div className="space-y-2 ">
                <h1 className="text-3xl font-semibold">{project?.title}</h1>
                <p className="text-justify">{project?.subtitle}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
