import MySwiper from "./MySwiper";

const AboutBuilding = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3 tinos">About Skyline Resident</h1>
      <p className="mx-auto max-sm:w-[85%] max-sm:text-justify text-center mb-6">Experience elevated living with stunning views and a range of exclusive amenities at Skyline Resident!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-clip">
        <div className="text-justify">
          <ul className="list-disc list-inside font-light">            
            <li>A Legacy of Excellence Since 2015</li>
            <li>Experience the epitome of urban living at Skyline Resident.</li>
            <li>
              Beyond luxurious living, Skyline Resident fosters a vibrant
              community. Enjoy exclusive access to a range of amenities.
            </li>
            <li>
              Nestled amidst breathtaking panoramas, Skyline Resident
              harmoniously fuses modern sophistication with timeless elegance.
              Our residences, designed with meticulous attention to detail,
              speak of refined living with spacious layouts that maximize
              natural light and afford breathtaking views.
            </li>
            <li>
              {" "}
              Whether it&apos;s a romantic dinner on a private balcony, a
              gathering of friends in the stylish comfort of a living room,
              Skyline Resident provides the perfect backdrop for a life of
              comfort and sophistication.
            </li>
            <li>
              At Skyline Resident, we are committed to providing an unparalleled
              living experience. Our dedicated team is always on hand to ensure
              your comfort and satisfaction.
            </li>
          </ul>
        </div>
        <div className="w-[80%] mx-auto my-auto">
          <MySwiper></MySwiper>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
