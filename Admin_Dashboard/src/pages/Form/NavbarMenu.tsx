import Breadcrumb from '../../components/Breadcrumb';
import CheckboxFive from '../../components/CheckboxFive';
import CheckboxFour from '../../components/CheckboxFour';
import CheckboxOne from '../../components/CheckboxOne';
import CheckboxThree from '../../components/CheckboxThree';
import CheckboxTwo from '../../components/CheckboxTwo';
import SwitcherFour from '../../components/SwitcherFour';
import SwitcherOne from '../../components/SwitcherOne';
import SwitcherThree from '../../components/SwitcherThree';
import SwitcherTwo from '../../components/SwitcherTwo';

const NavbarMenu = () => {
  return (
    <>
      <Breadcrumb pageName="Navbar Menuyyy" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
              Menu Items
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">

              <div>
                <label className="mb-3 block text-black dark:text-white">
                FEATURES
                </label>
                <input
                  type="text"
                  placeholder=" Input" required
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                ABOUT
                </label>
                <input
                  type="text"
                  placeholder=" Input" required
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                SERVICES
                </label>
                <input
                  type="text"
                  placeholder=" Input" required
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                GALLERY
                </label>
                <input
                  type="text"
                  placeholder=" Input" required
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                TEAM
                </label>
                <input
                  type="text"
                  placeholder=" Input" required
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                CONTACT
                </label>
                <input
                  type="text"
                  placeholder=" Input" required
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );

};

export default NavbarMenu;
