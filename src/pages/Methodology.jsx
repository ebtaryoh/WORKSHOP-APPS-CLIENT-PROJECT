import background from "../../src/images/background.png";
// import Circle from '../Portfolio/Circle'

const Methodology = () => {
  return (
    <div className="w-full py-[2rem]">
      <div className="relative ">
        <img src={background} alt="" className="md:w-full md:h-full" />
        <div className="absolute md:top-[30%] top-0 md:left-[28%] text-white text-center method-head">
          <h1 className="font-semibold md:text-[48px] text-[20px]  ">
            The Method of WorkshopApp
          </h1>
          <p className="text-[20px] md:mt-[2rem] ">
            Below is a step by step representation of the hiring process of
            WorshopApp
          </p>
        </div>
      </div>

      <div className="md:py-[5rem] px-[1rem] md:px-[7rem] method-overview-head">
        <h1 className="font-medium text-[32px] pb-[1.5rem]">Overview</h1>
        <p className="text-[24px] md:pr-[8rem] font-medium text-[#0000008f]">
          We are a virtual studio that only aims ay hiring only the best
          qualified people, hence to acheive this process, candidates are made
          to go through a series of task with already set requirements, this is
          done in order to test as well as bring out the best. Only qualified
          candidates gets hired. <br />
          The steps include:
        </p>
      </div>

      <div className="py-[1rem] method-overview-head">
        <h1 className="bg-[#F5F5F5] py-[2rem] text-[32px] font-medium md:px-[7rem] px-[1rem]">
          Selection Process
        </h1>
        <div className=" md:px-[7rem] px-[1rem] text-[24px] font-medium text-[#00000084] py-[2.5rem]">
          <h2>
            There are three various steps in this stage, and they are as
            follows:
          </h2>
        </div>

        <div className="md:px-[7rem] md:grid flex flex-col gap-[3rem] relative">
          <div className="text-white md:flex grid gap-[2rem] items-center ">
            <div>
              <div className="py-[.5rem] px-[.5rem] rounded-full bg-black border-black border-[1px] md:block hidden"></div>
            </div>
            <div className="border md:px-[4rem] py-[1rem] px-[2rem] text-center rounded-md md:py-[4rem] bg-[#292D32] md:ml-[8rem]">
              <h1 className="text-[28px] font-medium text-center mb-4">
                The Hiring Process
              </h1>
              <p className="text-[18px] text-[#B2B2B2] ">
                Applicants are hired in their numbers as long <br /> as their
                application is before the deadline of <br /> the company.
              </p>
            </div>

            {/* CIRCLE  */}

            <div className="md:pl-[15rem] text-black hidden md:block">
              <div className="md:py-[2rem] md:px-[2rem] rounded-full border-[20px] border-[#1f1f1f45] border-l-[#1f1f1f]">
                <div className="md:py-[1rem] md:px-[1rem] bg-white border-[#1f1f1f0b] border rounded-full">
                  <span className="font-bold  text-[36px]">1/3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white md:flex gap-[2rem] items-center ">
            <div>
              <div className="py-[.5rem] px-[.5rem] rounded-full bg-black border-black border-[1px] md:block hidden"></div>
            </div>
            <div className="border md:px-[2.5rem] px-[1rem] py-[2rem] text-center rounded-md md:py-[4rem] bg-[#292D32] md:ml-[8rem]">
              <h1 className="text-[28px] font-medium text-center mb-4">
                The Test Process
              </h1>
              <p className="text-[18px] text-[#B2B2B2] ">
                Applicants are then put through a number of test <br /> through
                competitions. This process is done to first <br /> reduce the
                number of candidates as well as <br /> challenge them into
                bringing out the best in them.
              </p>
            </div>

            {/* CIRCLE  */}

            <div className="pl-[15rem] text-black hidden md:block">
              <div className="py-[2rem] px-[2rem] rounded-full border-[20px] border-l-[#1f1f1f] border-b-[#1f1f1f] border-t-[#1f1f1f] border-[#1f1f1f45]">
                <div className="py-[1rem] px-[1rem] bg-white border-[#1f1f1f0b] border rounded-full">
                  <span className="font-bold  text-[36px]">2/3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white md:flex gap-[2rem] items-center mb-[5rem]">
            <div>
              <div className="py-[.5rem] px-[.5rem] rounded-full bg-black border-black border-[1px] md:block hidden"></div>
            </div>
            <div className="border md:px-[4.8rem] rounded-md md:py-[4rem] py-[2rem] px-[1rem] text-center bg-[#292D32] md:ml-[8rem]">
              <h1 className="text-[28px] font-medium text-center mb-4">
                The Hiring Process
              </h1>
              <p className="text-[18px] text-[#B2B2B2]">
                Applicants who don't meet up to the task <br /> requirements /
                deadlines, gets eliminated. <br /> This process continues until
                we are left <br /> with our desired number / the "Best".
              </p>
            </div>

            {/* CIRCLE  */}

            <div className="pl-[15rem] text-black hidden md:block">
              <div className="py-[2rem] px-[2rem] rounded-full border-[20px] border-[#1f1f1f]">
                <div className="py-[1rem] px-[1rem] bg-white border-[#1f1f1f0b] border rounded-full">
                  <span className="font-bold  text-[36px]">3/3</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='border-dashed border-l-[2px] border-black w-full relative'>
                    
                </div>
                <div className='text-white grid gap-[1rem]'>
                <div className='border w-full rounded-md p-[2rem] bg-[#292D32]'>
                    <h1 className='text-[28px] font-medium'>The Hiring Process</h1>
                    <p className='text-[18px]'>Applicants are hired in their numbers as long as their application is before the deadline of the company</p>
                </div>
                    <div className='border w-full rounded-md p-[2rem] bg-[#292D32]'>
                        <h1 className='text-[28px] font-medium'>The Test Process</h1>
                        <p className='text-[18px]'>Applicants are then put through a number of test through competitions. This process is done to first reduce the number of candidates as well as challenge them into bringing out the best in them.</p>
                    </div>
                    <div className='border w-full rounded-md p-[2rem] bg-[#292D32]'>
                        <h1 className='text-[28px] font-medium'>The Elimination Process</h1>
                        <p className='text-[18px]'>Applicants who don't meet up to the task requirements / deadlines, gets eliminated. This process continues until we are left with our desired number / the "Best".</p>
                    </div>
                </div> */}

          <div className="border-l-[2px] border-dashed w-[20rem] p-[14rem] top-[10rem] left-[7.5rem] border-black absolute md:block hidden"></div>
          <div className="border-l-[2px] border-dashed w-[10rem] p-[14rem] top-[35.9rem] left-[7.5rem] border-black absolute md:block hidden"></div>
        </div>
      </div>
      <div>
        <h1 className="bg-[#F5F5F5] md:py-[2rem] py-[1rem] text-[32px] font-medium md:px-[7rem] px-[1rem] method-overview-head">
          What Happens After Selection
        </h1>

        <div className="method-overview-head md:px-[7rem] px-[1rem] text-[24px] font-medium text-[#00000084] py-[2.5rem]">
          <h2>
            There are three various steps in this stage, and they are as
            follows:
          </h2>
        </div>

        <div className="md:px-[7rem] grid gap-[3rem] relative">
          <div className="text-white md:flex gap-[2rem] items-center ">
            <div>
              <div className="py-[.5rem] px-[.5rem] rounded-full bg-black border-black border-[1px] hidden md:block"></div>
            </div>
            <div className="border md:px-[2.5rem] px-[1rem] py-[1rem] text-center rounded-md md:py-[4rem] bg-[#292D32] md:ml-[8rem]">
              <h1 className="text-[28px] font-medium text-center mb-4">
                The Victorious
              </h1>
              <p className="text-[18px] text-[#B2B2B2]">
                Applicants who have emerged victorious are then <br /> merged
                into teams of competent individuals.
              </p>
            </div>

            {/* CIRCLE  */}

            <div className="pl-[15rem] text-black hidden md:block">
              <div className="py-[2rem] px-[2rem] rounded-full border-[20px] border-[#1f1f1f45] border-l-[#1f1f1f]">
                <div className="py-[1rem] px-[1rem] bg-white border-[#1f1f1f0b] border rounded-full">
                  <span className="font-bold  text-[36px]">1/2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white md:flex gap-[2rem] items-center ">
            <div>
              <div className="py-[.5rem] px-[.5rem] rounded-full bg-black border-black border-[1px] hidden md:block"></div>
            </div>
            <div className="border md:px-[3.2rem] px-[1rem] py-[1rem] rounded-md md:py-[4rem] bg-[#292D32] md:ml-[8rem]">
              <h1 className="text-[28px] font-medium text-center mb-4">
                The Team Work
              </h1>
              <p className="text-[18px] text-[#B2B2B2] ">
                Once merged into teams, the team are then <br /> assigned
                projects to work on as well as receive <br /> guidance into
                turning such project into reality.
              </p>
            </div>

            {/* CIRCLE  */}

            <div className="pl-[15rem] text-black hidden md:block">
              <div className="py-[2rem] px-[2rem] rounded-full border-[20px] border-l-[#1f1f1f] border-b-[#1f1f1f] border-t-[#1f1f1f] border-[#1f1f1f45]">
                <div className="py-[1rem] px-[1rem] bg-white border-[#1f1f1f0b] border rounded-full">
                  <span className="font-bold  text-[36px]">2/2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-l-[2px] border-dashed w-[20rem] p-[11.5rem] top-[9rem] left-[7.5rem] border-black absolute hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
