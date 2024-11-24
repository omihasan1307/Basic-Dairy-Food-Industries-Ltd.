const BottomInvitationSection = () => {
  return (
    <div className={`relative bg-[url(../../assets/food-ban2.jpg)] bg-cover bg-center bg-no-repeat`}>
      <div className="absolute inset-0 from-[#001524]/95 to-[#11001c]/25 bg-gradient-to-t md:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-48 sm:px-6 lg:flex lg:px-8">
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-4xl font-extrabold">
            Experience the Taste of Quality,
            <strong className="block font-extrabold text-basicColor"> Basic Dairy & Food Industries Ltd. </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Crafting premium food products to bring joy and nourishment to every table.
            <br /> Quality, taste, and trust in every bite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomInvitationSection;
