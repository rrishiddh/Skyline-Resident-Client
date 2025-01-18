import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";


const Announcements = () => {
  const axiosPublic = useAxiosPublic()


  const { data: announcement = []} = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcement");
      return res.data;
    },
  });


  return (
    <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3"> Announcements </h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">Checkout Some Latest Announcements From The Owner!</p>

      {
  announcement.map((notice, idx) => (
    <div key={idx} className="collapse collapse-arrow bg-base-200 mb-2">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-xl font-medium">
        {notice.title}
      </div>
      <div className="collapse-content text-sm">
        <p className="mb-2"><span className="font-semibold italic">Announcement About :</span> <span className="capitalize">{notice.category}</span></p>
        <p  className="mb-2"><span className="font-semibold italic">Announcement Details :</span> {notice.description}</p>
      </div>
    </div>
  ))
}

      

    
    </div>
  );
};

export default Announcements;
