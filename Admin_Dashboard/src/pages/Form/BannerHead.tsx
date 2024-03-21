import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
import sweetAlert from 'sweetalert2';

const BannerHead = () => {
  const id = '65250513b379f1e4a667c0bb';
  const [title, setTitle] = useState();
  const [paragraph, setParagraph] = useState();

  const ontitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onparaChange = (e: React.FormEvent<HTMLInputElement>) => {
    setParagraph(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/headerupdate/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        paragraph: paragraph,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
        console.log(data.status);
        setTitle('');
        setParagraph('');
        sweetAlert.fire('Heading Updated Successully', '', 'success');
      });
  };

  return (
    <>
      <Breadcrumb pageName="Banner And Heading" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Banner and Heading Form
              </h3>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Heading <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={ontitleChange}
                    value={title}
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    About your site
                  </label>
                  <textarea
                    required
                    rows={5}
                    onChange={onparaChange}
                    value={paragraph}
                    placeholder="Select subject"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Update Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHead;
