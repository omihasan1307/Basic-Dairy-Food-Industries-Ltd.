/* eslint-disable @typescript-eslint/no-explicit-any */
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="px-2 lg:grid grid-cols-2 items-center gap-8">
      <Image src={img.About} alt={"about"} height={200} width={700} className="rounded-lg" data-aos="fade-right" />
      <div className="lg:py-10 lg:px-5 space-y-5 w-full" data-aos="fade-left">
        <p className="tracking-widest font-bold text-baseColor uppercase mt-5">About Us</p>
        <p className="text-2xl lg:text-4xl font-semibold">Nurturing Excellence, One Product at a Time</p>
        <p className="text-gray-400">
          Basic Dairy & Food Industries Ltd. takes pride in crafting exceptional food products that prioritize quality, taste, and innovation. With a
          legacy of excellence, we deliver nutritious and delectable solutions that cater to diverse culinary needs. Experience the perfect blend of
          tradition and innovation with every bite.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
