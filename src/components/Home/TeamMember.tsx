import SectionHeader from "@/shared/common/SectionHeader";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";

const items = [
  {
    img: img.man,
    title: "Ayaqub Ali Ref-Kobir MP",
    description: "Executive Director -Exports (Food)",
  },
  {
    img: img.man,
    title: "Md Rajon Hossen Ref-Babu",
    description: "Director (Accounts & Finance)",
  },
];

const TeamMember = () => {
  return (
    <div className="pb-20 text-center px-2 max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-center flex-col space-y-5">
        <SectionHeader text="Our Dedicated Team" icon={FaUsers} />
        <p className="text-5xl font-bold leading-tight">Meet the Team Members</p>
        <p className="text-gray-500">Together, we strive to bring you Best Food .</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 mt-20">
        {items.map((stage, index) => (
          <div key={index} className="flex items-center justify-center  gap-5 hover:scale-105 duration-300 group">
            <span className=" flex items-center justify-center group-hover:-rotate-12 duration-300">
              <Image src={stage.img} alt={"img"} className="rounded-full  w-32 h-32" />
            </span>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
