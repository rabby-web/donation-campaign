const Banner = ({ setInputValue, setIsTrueBtn }) => {
  const handleInputSearch = (e) => {
    e.preventDefault();
    setInputValue(e.target.search.value);
    e.target.search.value = "";
    setIsTrueBtn(true);
  };
  return (
    <div className="w-full h-[60vh] justify-center bg-[url(https://i.ibb.co/yp4ZVNr/Rectangle-4281.png)] bg-no-repeat bg-cover bg-center">
      <div className="text-center bg-[#FFFFFFF2] h-full w-full flex items-center justify-center">
        <div>
          <h1 className="text-[#0B0B0B] mt-32 md:mt-0 font-bold text-2xl px-4 md:text-4xl mb-10">
            I Grow By Helping People In Need
          </h1>
          <div>
            <div className="max-w-sm md:max-w-[470px] text-center mx-auto px-4 ">
              <form onSubmit={handleInputSearch}>
                <input
                  className="w-3/4 p-2 text-dark-1 placeholder:text-[#0B0B0B66] bg-white outline-none border border-gray-300 rounded-l-lg"
                  type="text"
                  name="search"
                  placeholder="Search here...."
                />
                <button className="w-1/4 text-white font-semibold p-2 rounded-r-lg bg-[#FF444A] border border-[#FF444A]">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
