import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
import sweetAlert from 'sweetalert2';

const Team = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // update variable
  const [uimage, setUimage] = useState('');
  const [utitle, setUtitle] = useState('');
  const [udescription, setUdescription] = useState('');
  const [selected, setSelected] = useState([]);
  const [id, setID] = useState('');
  const [did, setDid] = useState('');

  const onimageChange = (e: React.FormEvent<HTMLInputElement>) => {
    setImage(e.currentTarget.files[0]);
  };
  const ontitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const ondescChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  // handle onsubmit of add Features
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    const result = await axios
      .post('http://localhost:5000/teamadd', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        if (response.statusText === 'OK') {
          sweetAlert.fire('Team Member Added Successully', '', 'success');
          getSelectData();
          setTitle('');
          setDescription('');
        } else {
          sweetAlert.fire('Something wrong', '', 'error');
        }
      });
  };
  //
  const getSelectData = async () => {
    const result = await axios
      .get('http://localhost:5000/fetchteamtitle')
      .then((response) => {
        setSelected(response.data);
        console.log(response.data);
      });
  };
  useEffect(() => {
    getSelectData();
  }, []);

  const handleSelect = (e) => {
    let value = e.target.value;
    selected.forEach((element) => {
      if (element.title === value) {
        setID(element._id);
        setUtitle(element.title);
        setUdescription(element.description);
      }
    });
  };

  const handleSelectd = (e) => {
    let value = e.target.value;
    selected.forEach((element) => {
      if (element.title === value) {
        setDid(element._id);
      }
    });
  };

  const uonimageChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUimage(e.currentTarget.files[0]);
  };
  const uontitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUtitle(e.currentTarget.value);
  };
  const uondescChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUdescription(e.currentTarget.value);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', uimage);
    formData.append('title', utitle);
    formData.append('description', udescription);
    const result = await axios
      .put(`http://localhost:5000/updateteam/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        sweetAlert.fire('Team Member Updated Successully', '', 'success');
        console.log(response);
        setUtitle('');
        setUdescription('');
      });
  };

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = axios
      .delete(`http://localhost:5000/deleteteam/${did}`)
      .then((response) => {
        console.log(response);
        if (response.statusText === 'OK') {
          sweetAlert.fire('Features Deleted Successully', '', 'success');
          getSelectData();
        }
      });
  };

  return (
    <>
      <Breadcrumb pageName="Team" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update Team Form
              </h3>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Select Team Member
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    {/* <Select options={options} /> */}
                    <select
                      id="title"
                      onChange={handleSelect}
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Select Team Member</option>
                      {selected.map((item) => {
                        return <option value={item.title}>{item.title}</option>;
                      })}
                    </select>

                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Select Team Member Image{' '}
                    <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={uonimageChange}
                    required
                    placeholder="Select Team Member Image"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Team Member Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={utitle}
                    onChange={uontitleChange}
                    required
                    placeholder="Enter Team Member Name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Team Member Designation{' '}
                    <span className="text-meta-1">*</span>
                  </label>
                  <input
                    value={udescription}
                    onChange={uondescChange}
                    required
                    placeholder="Enter Team Member Designation"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Update Team Member
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
                Add Team Member Form
              </h3>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Select Team Member Image{' '}
                    <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={onimageChange}
                    required
                    placeholder="Select Team Member Image"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Team Member Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    onChange={ontitleChange}
                    value={title}
                    required
                    type="text"
                    placeholder="Enter Team Member Name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Team Member Designation{' '}
                    <span className="text-meta-1">*</span>
                  </label>
                  <input
                    onChange={ondescChange}
                    value={description}
                    required
                    placeholder="Enter Your Team Member Designation"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 mt-4 font-medium text-gray">
                  Add Team Member
                </button>
              </div>
            </form>
          </div>

          {/* <!-- Sign Up Form --> */}
        </div>

        {/* delete code start */}
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Delete Team Member Form
              </h3>
            </div>
            <form onSubmit={handleDelete}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Delete Team Member
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    {/* <Select options={options} /> */}
                    <select
                      id="title"
                      onChange={handleSelectd}
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Select Member</option>
                      {selected.map((item) => {
                        return <option value={item.title}>{item.title}</option>;
                      })}
                    </select>

                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Delete Team Member
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* delete code end */}
      </div>
    </>
  );
};

export default Team;
