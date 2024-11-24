import { FaShippingFast, FaRegClock, FaStar } from "react-icons/fa";

const items = [
  {
    icon: FaShippingFast,
    title: "Fast Distribution",
    description: "Get your products delivered to your doorstep quickly and efficiently.",
  },
  {
    icon: FaRegClock,
    title: "24/7 Support",
    description: "Our team is available round the clock to assist you with your needs.",
  },
  {
    icon: FaStar,
    title: "Best Quality",
    description: "We ensure the highest quality standards in all our products.",
  },
];

const SecondarySection = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center py-20 px-2">
      <div className="grid gap-10 md:grid-cols-3">
        {items.map((stage, index) => (
          <div key={index} className="flex items-center justify-center  gap-5 hover:scale-105 duration-300 group">
            <span className="text-basicColor bg-gray-100 rounded-lg flex items-center justify-center  w-32 h-24 group-hover:-rotate-12 duration-300">
              <stage.icon size={40} />
            </span>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondarySection;
