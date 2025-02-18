import Announcements from "../Dashboard/Announcements";

const AnnouncementAndOther = () => {
  return (
    <div className="min-h-screen mb-10">
      <Announcements></Announcements>
      <div className="w-[90%] mx-auto my-6 ">
        <h2 className="text-center text-2xl font-bold mb-3 tinos">
          About Our Project:
        </h2>

        <ul className="list-disc list-outside font-light space-y-2">
          <li>
            {" "}
            <span className="font-bold text-lg">
              Elevated Living Experience :{" "}
            </span>{" "}
            Enjoy stunning views and exclusive amenities at Skyline Resident.
          </li>
          <li>
            <span className="font-bold text-lg">Legacy of Excellence:</span>{" "}
            Established in 2015, Skyline Resident offers a tradition of quality
            and sophistication.
          </li>
          <li>
            <span className="font-bold text-lg">Prime Location: </span>Situated
            in the heart of Gulshan-1,Dhaka, enjoy convenient access to the
            city&apos;s finest dining, shopping and entertainment.
          </li>
          <li>
            <span className="font-bold text-lg">Modern Sophistication:</span>{" "}
            Experience harmoniously blended modern design with timeless
            elegance.
          </li>
          <li>
            <span className="font-bold text-lg">Vibrant Community:</span> Become
            part of a thriving community of like-minded individuals.
          </li>
          <li>
            <span className="font-bold text-lg">Limited Residences: </span>Only
            30 apartments are available, ensuring exclusivity and privacy.
          </li>
          <li>
            <span className="font-bold text-lg">Total Number of Floors: </span>
            The building comprises 10 stories, offering a mix of residential
            options.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnnouncementAndOther;
