import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiClipboardTextBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
const Location = () => {
  return (
    <>
      <section className="section1 float-left w-1/2 h-screen grid grid-cols-3">
        <div>
          <div>
            <Link to={"/task"}>
              <Button
                type="submit"
                size="large"
                variant="taskButton"
                className="rounded-r-full"
              >
                <PiClipboardTextBold
                  size={"20"}
                  className="color-white mr-4 "
                />
                Task
              </Button>
            </Link>
          </div>
          <div>
            <Link to={"/Location"}>
              <Button type="submit" size="large" variant="locationButton">
                <HiOutlineLocationMarker size={"20"} className="mr-3" />
                Location
              </Button>
            </Link>
          </div>
          <Link to={"/"}>
            <div className="mt-96">
              <Button type="submit" size="large" variant="logoutButton">
                <MdLogout size={"20"} className="mr-3" />
                Log out
              </Button>
            </div>
          </Link>
        </div>
        <div className="w-screen px-32">
          <h1 className="mt-11 font-bold text-lg text-slate-600">+Check In</h1>
          <div>
            <h2 className="mt-5 font-bold text-lg text-slate-600">
              Current Location
            </h2>
            <div class="flex items-center mb-4">
              <label className="ml-0 text-lg font-semibold text-slate-600 mt-1">
                {" "}
                📍 Pustegränd, Stockholm, SE
              </label>
            </div>
            <p className="-mt-4 ml-5 text-sm font-semibold text-slate-400">
              59.3293° N, 18.0686° E
            </p>
          </div>
          <h2 className="mt-9 font-bold text-lg text-slate-600">
            Perivous location
          </h2>
          <div>
            <div class="flex items-center mb-4">
              <label className="ml-0 text-lg font-semibold text-slate-600 mt-4">
                {" "}
                📍 Halsingegätan, Stockholm, SE
              </label>
            </div>
            <p className="-mt-4 ml-5 text-sm font-semibold text-slate-400">
              59.3293° N, 18.0686° E
            </p>
          </div>
          <div class="flex items-center mb-4">
            <label className="ml-0 text-lg font-semibold text-slate-600 mt-4">
              {" "}
              📍 Pustegränd, Stockholm, SE
            </label>
          </div>
          <p className="-mt-4 ml-5 text-sm font-semibold text-slate-400">
            59.3293° N, 18.0686° E
          </p>
          <div class="flex items-center mb-4">
            <label className="ml-0 text-lg font-semibold text-slate-600 mt-4">
              {" "}
              📍 Långa Gatan, Stockholm, SE
            </label>
          </div>
          <p className="-mt-4 ml-5 text-sm font-semibold text-slate-400">
            59.3293° N, 18.0686° E
          </p>
          <div class="flex items-center mb-4">
            <label className="ml-0 text-lg font-semibold text-slate-600 mt-4">
              {" "}
              📍 Djurgården, Stockholm, SE
            </label>
          </div>
          <p className="-mt-4 ml-5 text-sm font-semibold text-slate-400">
            59.3293° N, 18.0686° E
          </p>
          <div class="flex items-center mb-4">
            <label className="ml-0 text-lg font-semibold text-slate-600 mt-4">
              {" "}
              📍 Svartensgatan, Stockholm, SE
            </label>
          </div>
          <p className="-mt-4 ml-5 text-sm font-semibold text-slate-400">
            59.3293° N, 18.0686° E
          </p>
        </div>
      </section>
    </>
  );
};
export default Location;
