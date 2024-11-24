import SectionHeader from "@/shared/common/SectionHeader";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import React from "react";
import { RiServiceFill } from "react-icons/ri";

const CosmeticSection = async () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-2">
      <div className="flex items-center justify-center flex-col text-center space-y-5">
        <SectionHeader text="Our Cosmetics" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Redefining Beauty with <span className="font-bold hover:text-sk">Innovation</span>
        </div>
        <p className="text-gray-500">Basic Dairy & Food Industries Ltd. brings its commitment to quality and excellence into the world . </p>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-3 items-center w-full ">
        <div>
          <Image src={img.brand4} alt={"Delicious food items"} className="rounded-lg" />
        </div>
        <div className="col-span-2 space-y-4">
          <h1 className="text-4xl font-bold text-basicColor">Delightful Creations</h1>
          <p className="text-gray-600 w-full ">
            Experience the richness of flavor and quality with our premium food items, crafted with care and dedication. From wholesome ingredients to
            delectable treats, we bring joy to your table with every bite. At Basic Dairy & Food Industries Ltd., we believe in delivering more than
            just food – we deliver moments of happiness and nourishment. Our commitment to excellence ensures that every product embodies the perfect
            blend of taste, quality, and innovation. Whether it&lsquo;s a hearty meal or a simple snack, trust us to make your dining experience
            unforgettable, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CosmeticSection;
