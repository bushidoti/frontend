import React, {Fragment, useState} from "react";
import {SafetyEquipment} from "./forms/safety-equipment";
import {AirportEquipment} from "./forms/airport-equipment";
import {ElectronicFurniture} from "./forms/electronic-furniture";
import {OfficeFurniture} from "./forms/office-furniture";
import {Furniture} from "./forms/furniture";
import {AirportFurniture} from "./forms/airport-furniture";
import {Vehicles} from "./forms/airport-car";
import {IndustrialEquipment} from "./forms/industrial-equipment";
import {SupportItems} from "./forms/support-items";
import {Benefits} from "./forms/benefits";
import {DustrialEquipment} from "./forms/dustrial-equipment";
import  {Contextform} from "./contextform"
import {DigitalFurniture} from "./forms/digital-furniture";

const Modal = (props) => {
  const [isRepair , setIsRepair] = useState('')
  return (
     <Contextform.Provider value={{
                    isRepair:isRepair,
                    setIsRepair:setIsRepair,
                    editStatus:props.editStatus,
                    idNumber:props.idNumber
        }}>
      <Fragment>
             <div className="modal fade " data-bs-backdrop="static" data-bs-keyboard="false" id="modalMain" tabIndex="-1" aria-labelledby="modalMainLabel"
             aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">ویرایش مدرک</h1>
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                            aria-label="Close" onClick={() => {
                                props.setIdNumber('')
                                props.setEditStatus(false)
                            }}></button>
                        </div>
                        <div className="container modal-body">
                            {(() => {
                                if (props.typeProperty === 'safetyequipment'){
                                    return <SafetyEquipment/>
                                }else if (props.typeProperty === 'airportequipment'){
                                    return <AirportEquipment/>
                                }else if (props.typeProperty === 'electronicfurniture'){
                                    return <ElectronicFurniture/>
                                }else if (props.typeProperty === 'officefurniture'){
                                    return <OfficeFurniture/>
                                }else if (props.typeProperty === 'digitalfurniture'){
                                    return <DigitalFurniture/>
                                }else if (props.typeProperty === 'facilityfurniture'){
                                    return <Furniture/>
                                }else if (props.typeProperty === 'airportfurniture'){
                                    return <AirportFurniture/>
                                }else if (props.typeProperty === 'airportvehicle' || props.typeProperty === 'officevehicle' ){
                                    return <Vehicles/>
                                }else if (props.typeProperty === 'noneindustrialtool'){
                                    return <IndustrialEquipment/>
                                }else if (props.typeProperty === 'industrialtool'){
                                    return <DustrialEquipment/>
                                }else if (props.typeProperty === 'supportitem'){
                                    return <SupportItems/>
                                }else if (props.typeProperty === 'benefit'){
                                    return <Benefits/>
                                }
                            })()}
                            </div>
                    </div>
                </div>
            </div>
          </Fragment>
     </Contextform.Provider>
  );
};

export default Modal