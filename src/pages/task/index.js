import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {PiClipboardTextBold } from "react-icons/pi";
import { MdLogout } from 'react-icons/md';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { LuClock4, LuClock8 } from 'react-icons/lu';
import { GrTextAlignFull } from 'react-icons/gr';


const Task = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <><section className="section1 float-left w-1/2 h-screen grid grid-cols-3">
      <div>
        <div>
            < Button
            type="submit"
            size="large"
            variant="taskButton"
            className="rounded-r-full"
            >
              <PiClipboardTextBold
              size={'20'}
              className="color-white mr-4 "/>Task
          </Button>
        </div>
        <div>
          <Link to={'/location'}><Button 
          type="submit"
          size="large"
          variant="locationButton"
          > <HiOutlineLocationMarker size={'20 '} className="mr-3"/>
          Location
          </Button>
          </Link>
        </div>
        <Link to={'/'}> 
        <div className="mt-96">
          <Button 
          type='submit'
          size="small"
          variant="logoutButton">
            <MdLogout size={"20"} className="mr-3"/>LogOut
            </Button></div></Link>
            
        </div>
      <div className="w-screen px-32">
        <h1 className="mt-11 font-bold text-lg text-slate-600 " onClick={() => setIsModalOpen(true)}>+Add new task</h1>
        <div>
          <h2 className="mt-5 font-bold text-lg text-slate-600">Incomplete</h2>
          <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
            <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600" onClick={()=> setShowModal(true)}>Submit my resume</label>
          </div>
          <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ Today, 17.00</p>
        </div>
        <div className="flex items-center mb-4 mt-3">
          <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
          <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Complete the test</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ Tomorrow, 10.00</p>
        <div className="flex items-center mb-4 mt-3">
          <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
          <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Meeting with Jack</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ 24 Feb, 15.00</p>
        <div className="flex items-center mb-4 mt-3">
          <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
          <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Buy a chocolate for Mom</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ 24 Feb, 11.00</p>
        <div className="flex items-center mb-4 mt-3">
          <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
          <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Facetime with Dad</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ 24 Feb, 18.00</p>
        <h2 className="mt-9 font-bold text-lg text-slate-600">Complete</h2>
        <div>
          <div className="flex items-center mb-4 mt-3">
            <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
            <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Respond to Jane email</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
            <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Rechedule weekly meeting</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
            <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Service my bike</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 border border-slate-300 bg-slate-400 rounded-2xl mt-1"></input>
            <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Recheck the agreement document</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 gray-checkbox rounded-2xl mt-1"></input>
            <label for="default-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Check the latest on Community</label>
          </div>
        </div>
      </div>
    </section>
    <NewTask setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <Reminder setShowModal={setShowModal} showModal={showModal}/>      
    </>
  )
}
export default Task;
const NewTask = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <div id="authentication-modal" tabindex="-1"
        className={`fixed pt-0 pb-0 pl-0 pr-0 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${isModalOpen ? '' : 'hidden'}`}>
        <div className="flex items-center justify-center h-screen bg-black bg-cover md:bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-100" style={{ width: '756px', height: '501px' }}>
            <div className="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                New Task
              </h3>
              <form className="space-y-6">
                <div className="flex justify-center items-center">
                  <BiMessageRoundedDetail size={'20'} className="absolute left-28" />
                  <input type="text"
                    className="w-4/5 p-2 pl-12 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 py-5"
                    placeholder="Summary" />
                </div>
                <div className="flex justify-center items-center">
                  <GrTextAlignFull size={'20'} className="mb-12 absolute left-28" />
                  <input type="text"
                    className="w-4/5 p-2 pl-12 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 pb-14"
                    placeholder="Description" />
                </div>
                <div className="flex justify-center items-center">
                  <LuClock8 size={'20'} className="absolute left-28" />
                  <input type="text"
                    className="w-4/5 p-2 py-5 pl-12 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 pb-5"
                    placeholder="Due Date" />
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Button
                    type="submit"
                    size="large"
                    className="rounded-full"
                    variant="formButton">
                      Save
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Button onClick={() => setIsModalOpen(false)}
                    type="submit"
                    size="large"
                    className="rounded-full font-bold"
                    variant="secondformButton">
                      Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const Reminder = ({showModal, setShowModal}) => {
  return (
    <>
    <div id="authentication-modal" tabindex="-1"
      className={`fixed pt-0 pb-0 pl-0 pr-0 w-full h-full p-2 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flow-right ${showModal ? '' : 'hidden'}`}>
      <div className="float-right mt-9 mr-9 h-screen bg-gray-200 bg-cover rounded-lg" style={{ width: '360px', height: '130px' }} >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-100 flow-root" style={{ width: '360px', height: '100px' }}>
          <div className="float-right bg-yellow-500 mt-6 mr-6 rounded-xl" style={{ height: '50px', width: '50px' }}>
            <LuClock4 className="absolute top-9 right-9" size={'25px'} />
          </div>
          <div className="px-3 py-3 lg:px-6">
            <h3 className="mb-4 text-l font-bold text-gray-900">
              Submit my resume
            </h3>
            <h3 className="absolute top-10 text-l text-gray-500">
              Send my resume to DigitalTolk
            </h3>
          </div>
        </div>
        <div className="absolute right-12">
          <button type="submit" className="mr-7" onClick={() => setShowModal(false)}>skip</button>
          <button type="submit" onClick={() => setShowModal(false)}>Remind me later</button>
        </div>
      </div>
    </div>
    </>
  );
}
