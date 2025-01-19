const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black  border-base-300 border-t px-7 py-4 ">
        <aside className="grid-flow-col max-sm:grid-flow-row items-center">
          <img src="https://img.icons8.com/?size=100&id=9ECnYpBa4VDd&format=png&color=000000" className="w-10 mx-auto" />
          <p>
          <span className="tinos font-bold md:text-lg">Skyline Resident - Where Comfort Meets Community!</span>
            <br />
        Copyright © {new Date().getFullYear()} - All right reserved by Skyline Resident

          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end max-sm:mx-auto">
          <div className="grid grid-flow-col gap-4">
            <a>
              <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" className="w-8" />
            </a>
            <a>
              <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" className="w-8"  />
            </a>
            <a>
            <img src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" className="w-9"  />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
