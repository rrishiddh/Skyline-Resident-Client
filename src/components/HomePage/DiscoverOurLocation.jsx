const DiscoverOurLocation = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3">Discover Our Location</h1>
      <p className="mx-auto max-sm:w-[80%] text-center mb-6">
        Skyline Resident is situated in close proximity to Gulshan-1 Circle. Conveniently accessible from both the Badda and Mohakhali bus stops, our property offers excellent connectivity for residents!
      </p>
      <div className="grid grid-cols-3 gap-4 my-4">
        {/* div 1 */}
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title"><img src="https://img.icons8.com/?size=100&id=103775&format=png&color=000000" className="w-6" /> +880 1102384589</h2>
            <p className="font-light ">Call now to book an appointment!</p>            
          </div>
        </div>
        {/* div 2 */}
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title"><img src="https://img.icons8.com/?size=100&id=42050&format=png&color=000000" className="w-6" /> abc@sky.com</h2>
            <p className="font-light">Any queries? Just send us an email with your thoughts!</p>            
          </div>
        </div>
        {/* div 3*/}
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title"><img src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" className="w-6" /> Gulshan-1, Dhaka.</h2>
            <p className="font-light">City living meets tranquil haven at Skyline Resident!</p>            
          </div>
        </div>
      </div>

      <div className="items-center mt-6 ">              
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0703717837773!2d90.41366137362544!3d23.780508287623014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79c1fc0be71%3A0x40f0e2b548db81b3!2sNavana%20Tower!5e0!3m2!1sen!2sbd!4v1736840205748!5m2!1sen!2sbd" className="h-[100%] w-[100%] rounded-xl ring ring-gray-700 ring-offset-2"  allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default DiscoverOurLocation;
