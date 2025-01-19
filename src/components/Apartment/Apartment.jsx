import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { AuthContext } from "../Authentication/AuthProvider";
import Pagination from "./Pagination";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";
import useMember from "../hooks/useMember";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Apartment = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [apartmentList, setApartmentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [selectedRange, setSelectedRange] = useState("");
  const navigate = useNavigate();

  const [isAdmin] = useAdmin();
  const [isMember] = useMember();

  const priceRanges = [
    { label: "10000 - 15000", min: 10000, max: 15000 },
    { label: "15000 - 20000", min: 15000, max: 20000 },
    { label: "20000 - 25000", min: 20000, max: 25000 },
    { label: "25000 - 30000", min: 25000, max: 30000 },
  ];

  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartment");
      setApartmentList(res.data);
      setFilteredApartments(res.data);
      return res.data;
    },
  });
  const handleSearch = () => {
    if (!selectedRange) {
      setFilteredApartments(apartmentList);
      return;
    }

    const range = priceRanges.find((range) => range.label === selectedRange);
    if (range) {
      const filtered = apartmentList.filter(
        (apartment) =>
          apartment.rent >= range.min && apartment.rent <= range.max
      );
      setFilteredApartments(filtered);
      setCurrentPage(1);
    }
  };

  const handleAgreement = async (apartment) => {
    if (!user) {
      return navigate("/auth/login");
    }
    const currentDateTime = new Date().toISOString();

    const agreementData = {
      userName: user.displayName,
      userEmail: user.email,
      floorNo: apartment.floorNo,
      blockName: apartment.blockName,
      apartmentNo: apartment.apartmentNo,
      rent: parseFloat(apartment.rent),
      status: "pending",
      requestDate: currentDateTime,
      acceptOrRejectDate: "",
    };

    try {
      const response = await axiosPublic.post(
        "/agreements",
        agreementData
      );
      if (response.data.result.insertedId) {
        Swal.fire({
          title: "Agreement request submitted successfully.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Failed to submit agreement:", error);
      Swal.fire({
        title: `${error.response.data.message}`,
        icon: "warning",
      });
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredApartments.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="w-[90%] mx-auto min-h-screen my-6">
      <div>
        <h1 className="text-center text-2xl font-bold mb-3 tinos">Apartment</h1>
        <p className="mx-auto max-sm:w-[85%] max-sm:text-justify text-center mb-6">
          Explore our apartment options at Skyline Resident. Discover spacious
          layouts, high-end finishes and breathtaking views!
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 mb-6">
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="select select-bordered max-sm:w-[80%] sm:w-[50%]  "
        >
          <option value="">Select Price Range</option>
          {priceRanges.map((range, idx) => (
            <option key={idx} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
      {filteredApartments && filteredApartments.length ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mx-auto">
            {currentPosts.map((apartment, idx) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                key={idx}
                className="card card-compact mx-auto bg-slate-100 shadow-xl grid-cols-1 grid "
              >
                <figure>
                  <img src={apartment.imageUrl} alt={apartment.floorNo} />
                </figure>
                <div className="card-body text-justify">
                  <h2 className="card-title tinos uppercase">Floor No : {apartment.floorNo}</h2>

                  <p className="text-sm">Block Name : {apartment.blockName}</p>
                  <p className="text-sm">
                    Apartment No : {apartment.apartmentNo}
                  </p>
                  <p className="text-sm">
                    Rent : <span className="text-xl">৳</span>
                    {apartment.rent}
                  </p>
                  <div className="card-actions justify-end">
                    {user && user?.email ? (
                      <>
                        {isAdmin || isMember ? (
                          ""
                        ) : (
                          <button
                            onClick={() => handleAgreement(apartment)}
                            className="btn btn-sm btn-ghost text-xs bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] border-blue-400"
                          >
                            Agreement
                          </button>
                        )}
                      </>
                    ) : (
                      <Link to={"/auth/login"}>
                        <button className="btn btn-sm btn-ghost text-xs  bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] border-blue-400">
                          Agreement
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mx-auto my-7 flex">
            <Pagination
              totalPosts={filteredApartments.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Pagination>
          </div>
        </>
      ) : (
        <div className="justify-center items-center flex my-auto">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Apartment;
