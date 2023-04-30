import React, {Fragment} from "react";
import {SafetyEquipment} from "./forms/safety-equipment";
import {AirportEquipment} from "./forms/airport-equipment";
import {ElectronicFurniture} from "./forms/electronic-furniture";
import {OfficeFurniture} from "./forms/office-furniture";
import {Furniture} from "./forms/furniture";
import {AirportFurniture} from "./forms/airport-furniture";
import {AirportCar} from "./forms/airport-car";
import {IndustrialEquipment} from "./forms/industrial-equipment";
import {SupportItems} from "./forms/support-items";
import {Benefits} from "./forms/benefits";
import {DustrialEquipment} from "./forms/dustrial-equipment";
import {Required} from "../../required";

export const Forms =  (props) => {
    Required()
    return (
        <Fragment>
            <div className= 'd-flex justify-content-around m-4 w-100 rounded'>
                        <div className="card card-body gap-2">
                            <div className='d-flex'>
                                <form className='needs-validation col-7' noValidate>
                                    {(() => {

                                        if (props.showForm === 'safetyEquipment'){

                                            return (
                                                <Fragment>
                                              <SafetyEquipment/>
                                                 <div className='d-flex flex-column mt-2'>
                                                  <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                </div>
                                                    </Fragment>
                                            )
                                        }else if (props.showForm === 'airportEquipment'){
                                            return (
                                                <Fragment>
                                                 <AirportEquipment/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'electronicFurniture'){
                                            return (
                                                 <Fragment>
                                                     <ElectronicFurniture/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'officeFurniture'){
                                            return (
                                                <Fragment>
                                                     <OfficeFurniture/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'furniture'){
                                            return (
                                                <Fragment>
                                                     <Furniture/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'airportFurniture'){
                                            return (
                                                <Fragment>
                                                     <AirportFurniture/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'airportCar'){
                                            return (
                                                 <Fragment>
                                                     <AirportCar/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                                 </Fragment>
                                            )
                                        }else if (props.showForm === 'personalCar'){
                                            return (
                                                 <Fragment>
                                                     <AirportCar/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                                 </Fragment>
                                            )
                                        }else if (props.showForm === 'industrialEquipment'){
                                            return (
                                               <Fragment>
                                                 <IndustrialEquipment/>
                                                 <div className='d-flex flex-column mt-2'>
                                                 <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                 </div>
                                               </Fragment>
                                            )
                                        }else if (props.showForm === 'supportItems'){
                                            return (
                                              <Fragment>
                                                     <SupportItems/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                              </Fragment>
                                            )
                                        }else if (props.showForm === 'benefits'){
                                            return (
                                                <Fragment>
                                                     <Benefits/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                               </Fragment>
                                            )
                                        }else if (props.showForm === 'dustrialEquipment'){
                                            return (
                                               <Fragment>
                                                     <DustrialEquipment/>
                                                     <div className='d-flex flex-column mt-2'>
                                                     <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
                                                     </div>
                                               </Fragment>
                                            )
                                        }
                                    })()}
                                 </form>
                            </div>
                        </div>
            </div>
        </Fragment>
    )
}