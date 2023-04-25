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

export const Forms =  (props) => {
    return (
        <Fragment>
            <div className= 'd-flex justify-content-around m-4' style={{height:'425px'}} >
                        <div className="card card-body gap-2" style={{width:'1500px'}}>
                            <div className='d-flex'>
                                <form className='needs-validation' noValidate>
                                    {(() => {
                                        if (props.showForm === 'safetyEquipment'){
                                            return (
                                              <SafetyEquipment/>
                                            )
                                        }else if (props.showForm === 'airportEquipment'){
                                            return (
                                              <AirportEquipment/>
                                            )
                                        }else if (props.showForm === 'electronicFurniture'){
                                            return (
                                              <ElectronicFurniture/>
                                            )
                                        }else if (props.showForm === 'officeFurniture'){
                                            return (
                                              <OfficeFurniture/>
                                            )
                                        }else if (props.showForm === 'furniture'){
                                            return (
                                              <Furniture/>
                                            )
                                        }else if (props.showForm === 'airportFurniture'){
                                            return (
                                              <AirportFurniture/>
                                            )
                                        }else if (props.showForm === 'airportCar'){
                                            return (
                                              <AirportCar/>
                                            )
                                        }else if (props.showForm === 'personalCar'){
                                            return (
                                              <AirportCar/>
                                            )
                                        }else if (props.showForm === 'industrialEquipment'){
                                            return (
                                              <IndustrialEquipment/>
                                            )
                                        }else if (props.showForm === 'supportItems'){
                                            return (
                                              <SupportItems/>
                                            )
                                        }else if (props.showForm === 'benefits'){
                                            return (
                                              <Benefits/>
                                            )
                                        }else if (props.showForm === 'dustrialEquipment'){
                                            return (
                                              <DustrialEquipment/>
                                            )
                                        }
                                    })()}
                                 </form>
                                <div className='m-4'>
                                </div>
                            </div>
                        </div>
            </div>
        </Fragment>
    )
}