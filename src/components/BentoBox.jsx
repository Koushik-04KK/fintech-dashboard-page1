import ClientImage from "../assets/Clients.png";
import RetainersImage from "../assets/Retainers.png";

const BentoBox = () => {
  return (
    <>
      <section className="bg-black h-[93vh] ">
        <div className="md:ml-[7vw] lg:ml-[5vw] w-[95vw] h-[100%]">
          <div className=" md:w-[90%] lg:w-[95%] h-[100%] mx-auto bg-black grid grid-cols-7 grid-rows-7 md:gap-y-1 md:gap-x-2 lg:gap-y-2 lg:gap-x-4 pb-2">
            <div className="bg-[#212121] col-span-4 row-span-2 pt-1 pl-3 rounded-2xl">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className=" md:text-sm lg:text-lg varela-round-regular text-white">
                    Expenses (AI)
                  </p>
                  <p className=" md:text-xl lg:text-3xl varela-round-regular text-white">
                    $21,000
                  </p>
                </div>
                <div className="pr-4 pt-2">
                  <svg
                    className="md:h-7 lg:h-8"
                    fill="#D9D9D9"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="2em"
                  >
                    <path d="M0 8a8 8 0 1016 0A8 8 0 000 8zm5.904 2.803a.5.5 0 11-.707-.707L9.293 6H6.525a.5.5 0 110-1H10.5a.5.5 0 01.5.5v3.975a.5.5 0 01-1 0V6.707l-4.096 4.096z" />
                  </svg>
                </div>
              </div>
              <div className="text-center text-white text-3xl">
                <p>Graph</p>
              </div>
            </div>

            <div className="col-span-3 row-span-2 bg-[#212121] border-[1.5px] border-solid border-[#f3f3f3] border-opacity-30 rounded-2xl text-white">
              Invoice
            </div>

            <div className=" col-span-2 row-span-3 bg-[#212121] border-[1.5px] border-solid border-[#f3f3f3] border-opacity-30 rounded-2xl text-white pt-1 pl-2">
              <div className="flex justify-between">
                <div className="">
                  <p className=" md:text-sm lg:text-lg varela-round-regular text-white">
                    Revenue (AI)
                  </p>
                  <p className="md:text-xl lg:text-3xl varela-round-regular text-white">
                    $36,000
                  </p>
                </div>
                <div className="md:pl-12 lg:pl-40 pt-2">
                  <svg
                    className="md:h-7 lg:h-8"
                    fill="#D9D9D9"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="2em"
                  >
                    <path d="M0 8a8 8 0 1016 0A8 8 0 000 8zm5.904 2.803a.5.5 0 11-.707-.707L9.293 6H6.525a.5.5 0 110-1H10.5a.5.5 0 01.5.5v3.975a.5.5 0 01-1 0V6.707l-4.096 4.096z" />
                  </svg>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>

            <div className="bg-[#C5FF22] col-span-1 row-span-1 rounded-2xl pt-1 pl-2">
              <div className="flex justify-between">
                <div>
                  <p className="varela-round-regular md:text-[10px] lg:text-lg font-bold">
                    Clients
                  </p>
                  <p className="font-['Urbanist'] md:text-[8px] lg:text-[10px] text-gray-800">
                    increased by 5%
                  </p>
                </div>
                <div className="flex justify-end md:pt-2 lg:pt-1 md:pr-2 lg:pr-3 lg:pb-2">
                  <img
                    src={ClientImage}
                    alt=""
                    className="md:h-[0.5em] lg:h-[1em]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 relative ">
                <div className="flex justify-center ">
                  <p className=" text-3xl absolute md:top-1 lg:-top-1 urbanist">
                    21
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#C5FF22] col-span-1 row-span-1 rounded-2xl pt-1 pl-2">
              <div className="flex justify-between">
                <div>
                  <p className="varela-round-regular md:text-[10px] lg:text-lg font-bold">
                    Retainers
                  </p>
                  <p className="font-['Urbanist'] md:text-[8px] lg:text-[10px] text-gray-800">
                    increased by 2%
                  </p>
                </div>
                <div className="flex justify-end pt-1 md:pr-2 lg:pr-3 lg:pb-2">
                  <img
                    src={RetainersImage}
                    alt=""
                    className="md:h-[0.75em] lg:h-[1.251em]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 relative ">
                <div className="flex justify-center ">
                  <p className=" text-3xl absolute md:top-1 lg:-top-1 urbanist ">
                    3
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#212121] col-span-3 row-span-2 rounded-2xl pt-2 pr-3 pl-4 border-[1.5px] border-solid border-[#f3f3f3] border-opacity-30">
              <div className="flex justify-between varela-round-regular">
                <p className="varela-round-regular md:text-sm lg:text-lg text-white">
                  Project Description
                </p>
                <div>
                  <svg
                    className="md:h-7 lg:h-8"
                    fill="#D9D9D9"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="2em"
                  >
                    <path d="M0 8a8 8 0 1016 0A8 8 0 000 8zm5.904 2.803a.5.5 0 11-.707-.707L9.293 6H6.525a.5.5 0 110-1H10.5a.5.5 0 01.5.5v3.975a.5.5 0 01-1 0V6.707l-4.096 4.096z" />
                  </svg>
                </div>
              </div>

              <div className="bg-[#737373] rounded-2xl border-solid border-[1.5px] font-['Urbanist'] border-white px-2 py-1 my-4 md:text-[8px] lg:text-sm text-[#d9d9d9]">
                <p>
                  The system will leverage machine learning algorithms to
                  analyze historical sales data, market trends, and external
                  factors to predict future sales figures accurately.
                </p>
              </div>

              <div className="flex justify-between mt-3 varela-round-regular">
                <div className="flex items-center bg-[#d9d9d9] md:gap-1 lg:gap-2 p-1 rounded-2xl md:h-5 lg:h-8 md:w-[95px] lg:w-[150px]">
                  <div className="bg-white rounded-full flex items-center justify-center md:w-5 lg:w-6">
                    <svg
                      className="md:h-[1.25em] lg:h-[1.5em]"
                      viewBox="0 0 1024 1024"
                      fill="#0478ff"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black md:text-[10px] lg:text-base">
                      Budget:{" "}
                      <span className="text-black text-opacity-55">$150</span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-end ">
                  <div className="flex items-center bg-[#d9d9d9] md:gap-1 lg:gap-2 p-1 rounded-2xl md:w-[140px] lg:w-[220px] lg:h-8 md:h-5">
                    <div className="bg-[#0478ff] rounded-full md:h-[1.25em] lg:h-[1.5em] lg:w-[1.5em] border-2 border-solid border-white flex justify-center items-center">
                      <svg
                        className="md:h-[0.9em] lg:h-[1.5em]"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fill="#ffffff"
                          d="M8 13a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 110-2 1 1 0 010 2zM11 16a1 1 0 102 0 1 1 0 00-2 0zM16 17a1 1 0 110-2 1 1 0 010 2zM11 12a1 1 0 102 0 1 1 0 00-2 0zM16 13a1 1 0 110-2 1 1 0 010 2zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z"
                        />
                        <path
                          fill="#ffffff"
                          fillRule="evenodd"
                          d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center ">
                      <p className="text-black lg:mr-1 md:text-[8px] lg:text-base">
                        Deadline:
                      </p>
                      <svg
                        className=" md:h-2 lg:h-9"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M19.5 4h-3V2.5a.5.5 0 00-1 0V4h-7V2.5a.5.5 0 00-1 0V4h-3A2.503 2.503 0 002 6.5v13A2.503 2.503 0 004.5 22h15a2.502 2.502 0 002.5-2.5v-13A2.502 2.502 0 0019.5 4zM21 19.5c0 .828-.672 1.5-1.5 1.5h-15C3.67 21 3 20.328 3 19.5V11h18v8.5zm0-9.5H3V6.5C3 5.672 3.67 5 4.5 5h3v1.5a.5.5 0 001 0V5h7v1.5a.5.5 0 001 0V5h3c.828 0 1.5.672 1.5 1.5V10z" />
                      </svg>
                      <p className="text-[#5F6368] lg:ml-1 md:text-[10px] lg:text-base ">
                        12-06-2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#C5FF22] col-span-2 row-span-2 rounded-2xl p-2">
              Remainders
            </div>

            <div className="bg-[#312f2f] col-span-3 row-span-1 py-3 rounded-2xl border-[1.5px] border-solid border-white border-opacity-25">
              <div className="flex justify-around">
                <div>
                  <p className="text-white md:text-xl lg:text-3xl varela-round-regular">
                    8h 39m
                  </p>
                  <p className="text-white text-opacity-90 md:text-sm  lg:text-md varela-round-regular">
                    Average Time Spent
                  </p>
                </div>

                <div className="bg-white rounded-full md:h-[2.5em] md:w-[2.5em]  lg:h-[3em] lg:w-[3em] flex items-center justify-center border-[0.5em] border-[#0478ff] border-solid">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="#0478ff"
                    height="3em"
                    width="3em"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 01-11.2 1.7L483.3 569.8a7.92 7.92 0 01-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" col-span-5 row-span-2 bg-[#212121] border-[1.5px] border-solid border-[#f3f3f3] border-opacity-30 rounded-2xl text-white">
              <div className=" flex justify-between items-center">
                <div>
                  <p className=" md:text-sm lg:text-lg varela-round-regular text-white pt-2 pl-3">
                    Project overview
                  </p>
                </div>
                <div className="flex gap-x-3">
                  <div className="flex mt-1 gap-x-1 bg-[#d9d9d9] rounded-full justify-center items-center px-1">
                    <p className="varela-round-regular md:text-xs lg:text-sm pl-1 text-black">Monthly Report</p>
                    <svg
                      viewBox="0 0 24 24"
                      fill="black"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </div>
                  <div className="pr-4 pt-2 flex items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#D9D9D9"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#C5FF22] col-span-2 row-span-1 px-4 py-1 rounded-2xl space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="md:text-sm lg:text-base">
                    Project Productivity
                  </p>
                </div>
              </div>

              <div className="flex gap-x-2 justify-between ">
                <div className="flex justify-center items-center">
                  <svg
                    fill="none"
                    viewBox="0 0 15 15"
                    height="1.25em"
                    width="1.25em"
                    className="md:mt-1 lg:mt-0 md:h-4 md:mb-3 lg:mb-0 lg:h-7"
                  >
                    <path
                      stroke="currentColor"
                      d="M3.5 0v5m8-5v5M5 8.5l2 2 3.5-4m-9-4h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                    />
                  </svg>
                  <p className="md:text-sm md:mt-1 lg:mt-0 md:mb-2 lg:text-lg lg:mb-0 varela-round-regular ml-2">
                    68{" "}
                    <span className="text-opacity-50 text-black">/ Month</span>
                  </p>
                </div>
                <div className="bg-[#C93A3A] rounded-xl flex justify-center items-center md:mb-2 lg:mb-1 lg:w-14 md:w-10">
                  <p className="varela-round-regular md:text-[10px] lg:text-sm md:p-1 text-white">
                    - 6.1%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#C5FF22] col-span-2 row-span-1 px-4 py-1 rounded-2xl space-y-4">
              <div>
                <div className="md:text-sm lg:text-base">
                  <p>Team Productivity</p>
                </div>
              </div>

              <div className="flex gap-x-3 justify-between ">
                <div className="flex justify-center items-center">
                  <svg
                    className="md:h-5 md:mt-1 lg:mt-0 lg:mb-1 lg:h-7"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                    />
                  </svg>
                  <p className="md:text-sm lg:text-lg md:mt-1 lg:mt-0 varela-round-regular lg:pl-2 md:pl-1">
                    50{" "}
                    <span className="text-opacity-50 text-black">/ Month</span>
                  </p>
                </div>
                <div className="bg-[#42A959] rounded-xl flex justify-center items-center lg:mb-1 md:w-10 lg:w-14">
                  <p className="varela-round-regular md:text-[10px] lg:text-sm md:p-1 text-white">
                    + 7.1%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BentoBox;
