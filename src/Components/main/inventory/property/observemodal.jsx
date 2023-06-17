import React, {Fragment, useEffect, useRef, useState} from "react";

import {useReactToPrint} from "react-to-print";
import Url from "../../../config";

const ObserveModal = (props) => {
  const [property, setProperty] = useState([])
  const [repaired, setRepaired] = useState([])
  const componentPDF= useRef();

   const fetchData = async () => {
      if (props.idNumber !== null){
            const response = await fetch(`${Url}/api/${props.typeProperty}/`+ props.idNumber)
            const data = await response.json()
            setProperty(data)
      }
  }

  const fetchDataProducts = async () => {
              if (props.typeProperty !== '') {
                  const response = await fetch(`${Url}/api/${handleRepairedProperties()}/`)
                  const data = await response.json()
                  setRepaired(data)
              }
      }

  const handleRepairedProperties = () => {
       if (props.typeProperty === 'safetyequipment'){
           return 'repairedsafetyequipment'
       }else if (props.typeProperty === 'airportequipment'){
           return 'repairedairportequipment'
       }else if (props.typeProperty === 'digitalfurniture'){
           return 'repairedigitalfurniture'
       }else if (props.typeProperty === 'facilityfurniture'){
           return 'repairedfacilityfurniture'
       }else if (props.typeProperty === 'airportfurniture'){
           return 'repairedairportfurniture'
       }else if (props.typeProperty === 'electronicfurniture'){
           return 'repairedelectronicfurniture'
       }else if (props.typeProperty === 'officefurniture'){
           return 'repairedofficefurniture'
       }else if (props.typeProperty === 'airportvehicle'){
           return 'repairedairportvehicle'
       }else if (props.typeProperty === 'officevehicle'){
           return 'repairedofficevehicle'
       }else if (props.typeProperty === 'industrialtool'){
           return 'repairedindustrialtool'
       }

  }
  useEffect(() => {
          void fetchData()
          void fetchDataProducts()
          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
      [props.idNumber])

   const generatePDF= useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle:"Data",
    });

  return (
      <Fragment>
         <div className="modal fade"  data-bs-backdrop="static" data-bs-keyboard="false" id="observeModal" tabIndex="-1" aria-labelledby="observeModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-fullscreen" >
                        <div className="modal-content">
                            <div className="modal-header mx-4">
                                <div className="modal-title fs-5 h1 d-flex gap-2" id="exampleModalLabel"><span>{property.name}</span><span className="text-danger">{props.idNumber}</span></div>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                        <div className= 'd-flex gap-2 m-4'>
                                <button className="btn btn-outline-secondary material-symbols-outlined h-75" type="button" id="print" onClick={generatePDF}>print</button>
                       </div>
                  <hr className='bg-primary m-4'/>
                  <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '60vh'}}>
                      <table ref={componentPDF}
                           className="table table-hover table-fixed text-center align-middle table-striped table-bordered border-primary" style={{direction:'rtl'}}>
                            <thead className='bg-light'>
                            <tr>
                                <th scope="col">ردیف</th>
                                <th scope="col">نام تجهیزات</th>
                                <th scope="col">تاریخ ثبت</th>
                                <th scope="col">شرح</th>
                                <th scope="col">کد اموال</th>
                            </tr>
                            </thead>

                            <tbody>
                                {(repaired.length > 0 && repaired.filter(property => property.safety_equipment ===  props.idNumber).map((data,i) => (
                                    <tr key={data.id}>
                                        <th scope="row">{i}</th>
                                        <td>{data.name}</td>
                                        <td>{data.date}</td>
                                        <td>{data.description}</td>
                                        <td>{data.safety_equipment}</td>
                                    </tr>
                            ))) ||

                          <tr>
                            <td colSpan="17" className='h3'>داده ای یافت نشد .....</td>
                          </tr>

                                    }
                            </tbody>
                        </table>
                </div>
              </div>
                    <div className="modal-footer mx-4">
                        <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal">close</button>
                    </div>
                </div>
            </div>
        </div>
  </Fragment>
  );
};
export default ObserveModal