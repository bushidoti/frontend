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
import {DigitalFurniture} from "./forms/digital-furniture";

export const Forms =  (props) => {
    Required()
    return (
        <Fragment>
            <div className= 'd-flex justify-content-around m-4 w-100 rounded'>
                        <div className="card card-body gap-2">
                            <div className='d-flex'>
                                <div className='needs-validation col-7'>
                                    {(() => {
                                        if (props.showForm === 'safetyEquipment'){
                                            return (
                                                <Fragment>
                                              <SafetyEquipment/>
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
                                        }else if (props.showForm === 'digitalFurniture'){
                                            return (
                                                <Fragment>
                                                     <DigitalFurniture/>
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
                                 </div>
                                {(() => {
                                        if (props.showForm === 'safetyEquipment'){

                                            return (
                                                <img className='m-2' src={require('./assets/saftey-equipment.jpg')} style={{width:'50vw' , height:'20vw'}}  alt="..."/>
                                            )
                                        }else if (props.showForm === 'airportEquipment'){
                                            return (
                                                <Fragment>
                                                    <img className='m-2' src={require('./assets/airport-equipments.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'electronicFurniture'){
                                            return (
                                                 <Fragment>
                                                       <img className='m-2' src={require('./assets/electronic-furniture.png')} style={{width:'50vw' , height:'50vh'}}  alt="..."/>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'officeFurniture'){
                                            return (
                                                <Fragment>
                                                    <img className='m-3 img-fluid'  src={require('./assets/office-furniture.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'furniture'){
                                            return (
                                                <Fragment>
                                                    <img className='m-3 img-fluid'  src={require('./assets/utility-furniture.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'airportFurniture'){
                                            return (
                                                <Fragment>
                                                    <img className='m-3' src={require('./assets/airport-furniture.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'digitalFurniture'){
                                            return (
                                               <Fragment>
                                                      <img className='m-3' src={require('./assets/digital-furniture.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                               </Fragment>
                                            )
                                        }else if (props.showForm === 'airportCar'){
                                            return (
                                                 <Fragment>
                                                      <img className='m-2' src={require('./assets/airport-vehicles.jpg')} style={{width:'50vw' , height:'50vh'}}  alt="..."/>
                                                 </Fragment>
                                            )
                                        }else if (props.showForm === 'personalCar'){
                                            return (
                                                 <Fragment>
                                                     <img className='m-2' src={require('./assets/personal-vehicles.png')} style={{maxWidth:'30vw' , height:'50vh'}}  alt="..."/>
                                                 </Fragment>
                                            )
                                        }else if (props.showForm === 'industrialEquipment'){
                                            return (
                                               <Fragment>
                                                   <img className='m-3' src={require('./assets/none-industrial-equipments.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                               </Fragment>
                                            )
                                        }else if (props.showForm === 'supportItems'){
                                            return (
                                              <Fragment>
                                                    <img className='m-3' src={require('./assets/support-tools.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                              </Fragment>
                                            )
                                        }else if (props.showForm === 'benefits'){
                                            return (
                                                <Fragment>
                                                    <img className='m-2' src={require('./assets/benefits.jpg')} style={{width:'50vw' , height:'20vw'}}  alt="..."/>
                                                </Fragment>
                                            )
                                        }else if (props.showForm === 'dustrialEquipment'){
                                            return (
                                               <Fragment>
                                                      <img className='m-3' src={require('./assets/industrial-equipment.jpg')} style={{width:'31vw' , height:'50vh'}}  alt="..."/>
                                               </Fragment>
                                            )
                                        }
                                    })()}

                            </div>
                        </div>
            </div>
        </Fragment>
    )
}