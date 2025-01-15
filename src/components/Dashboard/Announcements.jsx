const Announcements = () => {
  return (
    <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3"> Announcements </h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">Checkout Some Latest Announcements From The Owner!</p>


      <div className="collapse collapse-arrow bg-base-200 mb-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

    
    </div>
  );
};

export default Announcements;
