const Faq = () => {
  return (
    <div className="w-[90%] mx-auto my-10 text-justify">
      <h1 className="font-bold text-2xl my-6  text-center">
        User Guide & FAQs
      </h1>

      <h2 className="font-bold text-xl my-3">Introduction</h2>
      <p>
        Skyline Resident is an innovative building management platform designed
        to streamline the operations of residential communities. The system
        offers distinct functionalities for three user roles: Admin, Member, and
        User. This guide provides an overview of the Admin Dashboard and
        addresses frequently asked questions to enhance your experience with the
        platform.
      </p>

      <h2 className="font-bold text-xl my-3">Admin Dashboard Overview </h2>
      <p>
        The Admin Dashboard serves as the central hub for administrators to
        efficiently manage building operations and resident interactions. Key
        features include:
      </p>
      <ul  className="list-disc list-inside font-light space-y-2 my-4">
        <li>
          <span className="font-bold">User Management : </span>Admins can add, edit, or remove users,
          assign roles, and monitor user activity to ensure a secure and
          organized community environment.
        </li>
        <li>
          <span className="font-bold"> Facility Booking Management : </span> Oversee and approve
          facility reservations, manage schedules, and ensure optimal
          utilization of communal spaces.
        </li>
        <li>
          <span className="font-bold">Maintenance Requests : </span> Track and prioritize maintenance
          issues reported by residents, assign tasks to maintenance staff, and
          monitor resolution timelines.
        </li>
        <li>
          <span className="font-bold">Communication Center : </span> Broadcast important
          announcements, send personalized messages to residents, and facilitate
          effective communication within the community.
        </li>
        <li>
          <span className="font-bold">Reporting and Analytics : </span> Access comprehensive reports
          on building operations, user engagement, and other critical metrics to
          inform decision-making.
        </li>
      </ul>

      <h2 className="font-bold text-xl my-3">
        Frequently Asked Questions (FAQs){" "}
      </h2>

      <ol className="list-disc list-inside font-light space-y-2 my-4">
        <p className="font-bold" > 1. How do I add a new user to the platform?</p>
        <li>
          Navigate to the 'User Management' section in the Admin Dashboard.
        </li>
        <li>
          Click 'Add User' and fill in the required details, including username,
          display name, role assignment, and contact information.
        </li>
        <li>
          Set a temporary password for the new user, which they will be prompted
          to change upon first login.
        </li>
        <li>Save the information to create the new user account.</li>
      </ol>

      <ol className="list-disc list-inside font-light space-y-2 my-4">
        <p className="font-bold">2. Can I customize user roles and permissions?</p>
        <li>
          Yes, the platform allows customization of user roles and permissions.
        </li>
        <li>
          Within the 'User Management' section, select the user whose
          permissions you wish to modify.
        </li>
        <li>
          Adjust the role settings to grant or restrict access to specific
          features as needed.
        </li>
      </ol>
      <ol className="list-disc list-inside font-light space-y-2 my-4">
        <p className="font-bold"> 3. How do I manage facility bookings?</p>
        <li>
          Access the 'Facility Booking Management' section from the Admin
          Dashboard.
        </li>
        <li>
          Review pending booking requests and approve or decline them based on
          availability and community guidelines.
        </li>
        <li>
          View the calendar to monitor upcoming reservations and ensure there
          are no scheduling conflicts.
        </li>
      </ol>
      <ol className="list-disc list-inside font-light space-y-2 my-4">
        <p className="font-bold"> 4. What is the process for handling maintenance requests?</p>
        <li>
          Go to the 'Maintenance Requests' section in the Admin Dashboard.
        </li>
        <li>
          Review new requests submitted by residents, prioritize them based on
          urgency, and assign tasks to the appropriate maintenance personnel.
        </li>
        <li>
          Update the status of each request as it progresses to keep residents
          informed.
        </li>
      </ol>
      <ol className="list-disc list-inside font-light space-y-2 my-4">
        <p className="font-bold"> 5. How can I communicate important announcements to residents?</p>
        <li>Utilize the 'Communication Center' within the Admin Dashboard.</li>
        <li>
          Compose a new message or announcement, select the target audience
          (e.g., all residents, specific units), and send it through the
          platform.
        </li>
        <li>
          Residents will receive notifications via their preferred contact
          method, ensuring timely dissemination of information.
        </li>
      </ol>
    </div>
  );
};

export default Faq;
