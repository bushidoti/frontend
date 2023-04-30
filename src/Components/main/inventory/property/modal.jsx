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

const Modal = (props) => {
  return (
      <Fragment>
             <div className="modal fade " data-bs-backdrop="static" data-bs-keyboard="false" id="modalMain" tabIndex="-1" aria-labelledby="modalMainLabel"
             aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">ویرایش مدرک</h1>
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>

                    <form className='needs-validation' noValidate>
                        <div className="container modal-body">
                            {(() => {
                                if (props.typeProperty === 'تجهیزات ایمنی'){
                                    return <SafetyEquipment/>
                                }else if (props.typeProperty === 'تجهیزات فرودگاهی'){
                                    return <AirportEquipment/>
                                }else if (props.typeProperty === 'اثاثه الکترونیکی'){
                                    return <ElectronicFurniture/>
                                }else if (props.typeProperty === 'اثاثه اداری'){
                                    return <OfficeFurniture/>
                                }else if (props.typeProperty === 'اثاثه تاسیساتی'){
                                    return <Furniture/>
                                }else if (props.typeProperty === 'اثاثه فرودگاهی'){
                                    return <AirportFurniture/>
                                }else if (props.typeProperty === 'خودرو فرودگاهی' || props.typeProperty === 'خودرو اداری' ){
                                    return <AirportCar/>
                                }else if (props.typeProperty === 'ابزار آلات غیر صنعتی'){
                                    return <IndustrialEquipment/>
                                }else if (props.typeProperty === 'ابزار آلات صنعتی'){
                                    return <DustrialEquipment/>
                                }else if (props.typeProperty === 'اقلام پشتیبانی'){
                                    return <SupportItems/>
                                }else if (props.typeProperty === 'امتیازات'){
                                    return <Benefits/>
                                }
                            })()}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal">close</button>
                                <button type="submit" className="btn material-symbols-outlined btn-success">done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </Fragment>
  );
};

export default Modal