const ResidentTestimonials = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3 tinos">
        Resident Testimonials
      </h1>
      <p className="mx-auto max-sm:w-[85%] max-sm:text-justify text-center mb-6"></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* card-1  */}
        <div className="card bg-slate-100 shadow-xl">
          <div className="card-body">
            <svg
              className="w-7 h-7 mx-auto mb-3 text-gray-200 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-justify italic font-medium text-sm">
                Skyline Resident has completely transformed the way we manage
                our apartment complex. Paying maintenance fees, raising service
                requests, and even booking community halls have become
                effortless. The interface is user-friendly, and the support team
                is always responsive. Highly recommended!
              </p>
            </blockquote>

            <div className=" text-right justify-end ">
              
              <div className="rating rating-sm text-right justify-end items-end ">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              <p className="text-right">- Amit S.</p>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card bg-slate-100 shadow-xl">
          <div className="card-body">
            <svg
              className="w-7 h-7 mx-auto mb-3 text-gray-200 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-justify italic font-medium text-sm">
                I used to struggle with tracking my rent payments and
                maintenance issues, but Skyline Resident made everything so much
                easier. I love the visitor management feature, which keeps our
                community safe. A must-have for modern residential complexes!
              </p>
            </blockquote>

            <div className=" text-right justify-end ">
              
              <div className="rating rating-sm text-right justify-end items-end ">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              <p className="text-right">- Sarah M.</p>
            </div>
          </div>
        </div>
        {/* card-3  */}
        <div className="card bg-slate-100 shadow-xl">
          <div className="card-body">
            <svg
              className="w-7 h-7 mx-auto mb-3 text-gray-200 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
                
              <p className="text-justify italic font-medium text-sm">
                As a resident, I appreciate how Skyline Resident keeps
                everything organized. I receive real-time updates on community
                announcements and maintenance schedules. The convenience of
                paying bills online is a huge plus. It’s a well-designed system
                that every society should use!
              </p>
            </blockquote>

            <div className=" text-right justify-end ">
              
            <div className="rating rating-sm text-right justify-end items-end ">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
              <p className="text-right">- Rohit K.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentTestimonials;
