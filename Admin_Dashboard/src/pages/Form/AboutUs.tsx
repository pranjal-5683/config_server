import Breadcrumb from '../../components/Breadcrumb';

const AboutUs = () => {
  return (
    <>
      <Breadcrumb pageName="AboutUs" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update About Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
              <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    About Description <span className="text-meta-1">*</span>
                  </label>
                  <textarea
                  rows={6}
                    placeholder="Update Your About Decription"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Update Why 1 <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Update Your Icon"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                 
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Update Why 2 <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Update Your Icon"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
               
                </div>
                

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Update About
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
              Add Why Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
              <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Add Why 1 <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Update Your Icon"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Add Why 2 <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Update Your Icon"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 mt-4 font-medium text-gray">
                  Add Why
                </button>
              </div>
            </form>
          </div>

          {/* <!-- Sign Up Form --> */}
        
        </div>
      </div>
    </>
  );
};

export default AboutUs;
