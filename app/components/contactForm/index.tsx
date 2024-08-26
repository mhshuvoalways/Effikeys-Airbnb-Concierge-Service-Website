interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="h-auto lg:h-[774px] mt-[100px] mb-40">
      <div className="myContainer h-auto lg:h-[612px] bg-[#FAF4E7] rounded-[10px] text-center py-[76px]  relative">
        <p className="font-semibold text-3xl">Have a Question ?</p>
        <p className="text-sm text-[#6B6B6B] mt-6">
          Fill out our contact form, and we will get back to you as soon as
          possible
        </p>
        <div
          className="bg-white static lg:absolute top-40 left-0 right-0 w-11/12 lg:w-[740px] mx-auto rounded-[10px] py-10 px-5 lg:px-32 mt-6 text-start space-y-6"
          style={{
            boxShadow: `10px 60px 100px 0px #DCD2C73B`,
          }}
        >
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
            <div className="w-full">
              <label className="text-[#231F20]">First Name</label>
              <input
                type="text"
                className="bg-[#EBEDEF8F] outline-0 rounded-md py-3 px-3 w-full mt-2"
                placeholder="Enter first name"
              />
            </div>
            <div className="w-full">
              <label className="text-[#231F20]">Last Name</label>
              <input
                type="text"
                className="bg-[#EBEDEF8F] outline-0 rounded-md py-3 px-3 w-full mt-2"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div>
            <label className="text-[#231F20]">Email Address</label>
            <input
              type="text"
              className="bg-[#EBEDEF8F] outline-0 rounded-md py-3 px-3 w-full mt-2"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label className="text-[#231F20]">Subject</label>
            <input
              type="text"
              className="bg-[#EBEDEF8F] outline-0 rounded-md py-3 px-3 w-full mt-2"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="text-[#231F20]">Message</label>
            <textarea
              className="bg-[#EBEDEF8F] outline-0 rounded-md py-3 px-3 w-full mt-2 h-[103px]"
              placeholder="Enter message"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-primary rounded px-11 py-[11.5px] font-semibold text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
