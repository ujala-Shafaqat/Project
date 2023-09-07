import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { PiNotepadBold} from "react-icons/pi";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {MdLogout} from "react-icons/md";
import { Button } from '../Button';
const SideBar = () => {
    const location = useLocation();
    const isLocationPage = location.pathname ==="/location";
  return (
    <>
    <aside id="default-sidebar" className="fixed top-0 left-0  w-64 h-screen" aria-label="sidebar">
    <div class="h-full py-2">
    <div>
      <Link to={'/Task'}> <Button
         type="submit"
         size='large'
         className="rounded-r-full"
         variant={isLocationPage ? "locationButton" : "taskButton"}
      >
        < PiNotepadBold size={'21'} className="color-white mr-3" />
         Task
    </Button>
      </Link>
    </div>
    <div>
      <Link to={'/Location'}> <Button
         type="submit"
         size='large'
         variant={isLocationPage ? "taskButton" : "locationButton"}
      >
        < HiOutlineLocationMarker size={'21'} className="mr-3" />
         Location
       </Button>
      </Link>
    </div>
      <Link to={'/'}> <div className="mt-96">
      <Button
         type="submit"
         size='large'
         variant={isLocationPage ? "taskButton" : "locationButton"}
      >
        < MdLogout size={'21'} className="mr-3" />
         Log out
       </Button>
       </div>
      </Link>
    </div>
</aside>
 </>
    )
}
export default  SideBar;
