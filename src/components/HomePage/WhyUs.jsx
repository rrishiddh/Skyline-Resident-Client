const WhyUs = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-center text-2xl font-bold mb-3 tinos">Why Choose Us?</h1>
      <p className="mx-auto max-sm:w-[85%] max-sm:text-justify text-center mb-6">
        Skyline Resident is designed to make residential community management
        seamless, efficient and hassle-free. <br /> Here’s why you should choose
        our platform:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto text-justify">
        {/* div 1  */}
        <div>
          <ul className="list-disc list-inside font-light space-y-2">
            <span className="font-bold"> Effortless Apartment Booking</span>

            <li>
              Users can easily browse available apartments and request bookings.
            </li>
            <li>
              Admins manage and approve requests, ensuring a smooth onboarding
              process.
            </li>
            <li>
              Secure Stripe payment integration for quick and safe transactions.
            </li>
          </ul>
        </div>
        {/* div 2 */}
        <div>
          <ul className="list-disc list-inside font-light space-y-2">
            <span className="font-bold"> Membership & Community Management</span>

            <li>
            Residents become verified members after payment approval.

            </li>
            <li>
            Exclusive access to community features like events, visitor logs, and service requests.
            </li>
            <li>
            Secure database management for easy tracking of member information.
            </li>
          </ul>
        </div>
        {/* div 3  */}
        <div>
          <ul className="list-disc list-inside font-light space-y-2">
            <span className="font-bold"> Secure Online Payments & Coupons</span>

            <li>
            Integrated Stripe payment gateway for seamless transactions.
            </li>
            <li>
            Users can apply discount coupons before checkout.
            </li>
            <li>
            Transparent billing system with easy-to-access transaction history.
            </li>
          </ul>
        </div>
        {/* div 4  */}
        <div>
          <ul className="list-disc list-inside font-light space-y-2">
            <span className="font-bold"> Advanced Security & Visitor Management</span>

            <li>
            Residents can pre-register visitors for a hassle-free check-in process.

            </li>
            <li>
            Admins can monitor visitor logs and restrict unauthorized access.

            </li>
            <li>
            Enhances community security and ensures peace of mind.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
