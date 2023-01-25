import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiBuildingHouse } from 'react-icons/bi'
import { CiCalendarDate, CiLocationOn, CiTwitter } from 'react-icons/ci'
import { TbWorld } from 'react-icons/tb'

export default function GeneralInfo() {
  return (
    <div className="col d-flex gap-5 info_container p-4 ">
    <div className="d-flex flex-column gap-3  ">
      <div className="">
        <div className="d-flex align-items-center gap-1">
          <AiOutlineMail />
          <p className="m-0 ">Email</p>
        </div>
        <h6>lokendrachaulagain803@gmail.com</h6>
      </div>

      <div>
        <div className="d-flex align-items-center gap-1">
          <CiLocationOn />
          <p className="m-0 ">Location</p>
        </div>
        <h6>lokendrachaulagain803@gmail.com</h6>
      </div>

      <div>
        <div className="d-flex align-items-center gap-1">
          <CiTwitter />
          <p className="m-0 ">Twitter</p>
        </div>
        <h6>lokendrachaulagain803@gmail.com</h6>
      </div>
    </div>

    <div className="d-flex flex-column gap-3">
      <div className="">
        <div className="d-flex align-items-center gap-1">
          <BiBuildingHouse />
          <p className="m-0 ">Organization</p>
        </div>
        <h6>lokendrachaulagain803@gmail.com</h6>
      </div>

      <div>
        <div className="d-flex align-items-center gap-1">
          <CiCalendarDate />
          <p className="m-0 ">Joined Date</p>
        </div>
        <h6>lokendrachaulagain803@gmail.com</h6>
      </div>

      <div>
        <div className="d-flex align-items-center gap-1">
          <TbWorld />
          <p className="m-0 ">Website</p>
        </div>
        <h6>lokendrachaulagain803@gmail.com</h6>
      </div>
    </div>
  </div>
  )
}
