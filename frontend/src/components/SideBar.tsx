import  { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import { asset } from '../assets/assets';
const SideBar = () => {
    const context = useContext(StoreContext);
    const url = context?.url;
if (url === null || url === undefined) {
        throw new Error("ExampleComponent must be used within a StoreContextProvider");
    }
return (
  // shodow is not working need to do that
        <div className="p-2 box-border w-20 h-screen border-r-2  ">
    <div className="flex justify-between flex-col h-full  gap-1 items-center ">
    <div className="flex gap-12 flex-col items-center">
        <div className="profile">
          <img src={asset.logo} className="w-14" alt="profile-Icon " />
        </div>
        <div className="list3">
          <ul className="gap-5 flex flex-col w-12 items-center ">
            <li>
              <img src={asset.home} alt="home" className='w-8' />
            </li>
            <li>
              <img src={asset.message} alt="messages" className='w-8' />
            </li>
            <li>
              <img src={asset.pie} alt="analyses" className='w-8' />
            </li>
            <li>
              <img src={asset.search} alt="search" className='w-8' />
            </li>
            <li>
              <img src={asset.calendar} alt="calendar" className='w-8' />
            </li>
          </ul>
        </div>
    </div>
    <div className="setting">
        <img src={asset.gear} className="w-8" alt="settings_logo" />
    </div>
    </div>
</div>
)
}

export default SideBar