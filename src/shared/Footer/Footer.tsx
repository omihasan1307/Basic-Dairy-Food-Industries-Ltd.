import Image from "next/image";
import { img } from "../constant/imgExport";

const Footer = async () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto  text-center ">
        <div className="flex items-center justify-center flex-col ">
          <Image src={img.Logo} alt="Logo" width={300} height={200} />
          <br />
          <p>
            Basic Dairy & Food Industries Ltd.. is a trusted brand specializing in the import and distribution of premium Foods in Bangladesh. we aim
            to bring high-quality products that enhance natural elegance and confidence. Our carefully curated selection includes renowned global
            brands to ensure the best for our customers. At Basic Dairy & Food Industries Ltd.. Experience beauty redefined with Basic Dairy & Food
            Industries Ltd..
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-500 py-4 px-4">
        <p className="">Copyright © {new Date().getFullYear()} Basic Dairy & Food Industries Ltd.. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
