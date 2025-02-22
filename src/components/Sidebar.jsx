const SideBar = () => {
  return (
    <>
      <section className="md:w-[10vw] lg:w-[5vw] bg-black h-screen float-start">
        <div className="grid-rows-2">
          <div className="bg-black h-[50vh] grid grid-rows-3 place-items-center md:ml-4 lg:ml-2">
            <div className="bg-[#312F2F] rounded-full w-[3em] h-[3em] flex justify-center items-center">
              <svg
                fill="#575252"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M0 1a1 1 0 011-1h5a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm9 0a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1zm0 9a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5z" />
              </svg>
            </div>

            <div className="bg-[#312F2F] rounded-full w-[3em] h-[3em] flex justify-center items-center">
              <svg
                fill="none"
                stroke="#575252"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 3l-4 7h8z" />
                <path d="M20 17 A3 3 0 0 1 17 20 A3 3 0 0 1 14 17 A3 3 0 0 1 20 17 z" />
                <path d="M5 14 H9 A1 1 0 0 1 10 15 V19 A1 1 0 0 1 9 20 H5 A1 1 0 0 1 4 19 V15 A1 1 0 0 1 5 14 z" />
              </svg>
            </div>

            <div className="bg-[#312F2F] rounded-full w-[3em] h-[3em] flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                fill="#575252"
                height="1.5em"
                width="1.5em"
              >
                <path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 001 1h16a1 1 0 001-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z" />
                <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z" />
              </svg>
            </div>
          </div>
          <div className="bg-black h-[50vh] grid grid-rows-1 place-items-center md:ml-4 lg:ml-2">
            <div className="h-[90%] w-[95%] bg-[#312f2f] flex flex-col items-center gap-1 text-white varela-round-regular rounded-2xl border-solid border-[1.5px] border-[#B0AFAF] pt-2 ">
              <div className=" text-[10px] text-center mb-2">
                <p>List Your Company</p>
              </div>

              <div className=" h-[70%]">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="2.5em"
                  width="2.5em"
                >
                  <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 01.918 0l.064-.998A8.113 8.113 0 008 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 00-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 00-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 01.793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 00-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 00-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 00-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 00-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 000 1.046l.998-.064a7.117 7.117 0 010-.918l-.998-.064zM16 8a8.1 8.1 0 00-.017-.523l-.998.064a7.11 7.11 0 010 .918l.998.064A8.1 8.1 0 0016 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 01-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 00.524.905l.83-.556a6.999 6.999 0 01-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 01-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 01-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 01-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 01-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 001.012-.27l-.321-.948a6.954 6.954 0 01-.884.237l.194.98zm-2.083.135a8.1 8.1 0 001.046 0l-.064-.998a7.11 7.11 0 01-.918 0l-.064.998zM8.5 4.5a.5.5 0 00-1 0v3h-3a.5.5 0 000 1h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1h-3v-3z" />
                </svg>
              </div>

              <div className="rounded-full w-[3em] h-[3em] flex justify-center items-center ">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SideBar;
