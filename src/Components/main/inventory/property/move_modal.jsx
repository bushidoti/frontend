import React, {Fragment, useEffect, useState} from "react";

import {useFormik} from "formik";
import Url from "../../../config";

const MoveModal = (props) => {
  const [property, setProperty] = useState([])

  const formik = useFormik({
    initialValues: {
          code: property.code || '',
          name: property.name || '',
          inventory: property.inventory || '',
          install_location: property.install_location || '',
          user: property.user || '',
          use_for: property.use_for || '',
          description: property.description || '',
          type_register: property.type_register || '',
          model: property.model || '',
          year_made: property.year_made || '',
          owner: property.owner || '',
          plate1: property.plate1 || '',
          using_location: property.using_location || '',
          plate2: property.plate2 || '',
          plate3: property.plate3 || '',
          plate4: property.plate4 || '',
          motor: property.motor || '',
          chassis: property.chassis || '',
          year_buy: property.year_buy || '',
          phone_feature: property.phone_feature || '',
          cpu: property.cpu || '',
          motherboard: property.motherboard || '',
          ram: property.ram || '',
          power: property.power || '',
          hdd: property.hdd || '',
          case: property.case || '',
          type_furniture: property.type_furniture || '',
          type_item: property.type_item || '',
          number_type: property.number_type || '',
          number: property.number || '',


        },
        enableReinitialize: true,
        });

     const fetchData = async () => {
        if (props.typeProperty !== '' && props.idNumber !== null){
                const response = await fetch(`${Url}/api/${props.typeProperty}/${props.idNumber}`)
                const data = await response.json()
                setProperty(data)
        }
    }

     useEffect(() => {
            void fetchData()
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [props.typeProperty, formik.values , props.idNumber])

  return (
      <Fragment>
             <div className="modal fade " data-bs-backdrop="static" data-bs-keyboard="false" id="moveModal" tabIndex="-1" aria-labelledby="moveModalLabel"
             aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">جا به جایی</h1>
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                            aria-label="Close" onClick={() => {
                                props.setIdNumber('')
                                formik.resetForm()
                                props.setEditStatus(false)
                            }}></button>
                        </div>
                        <div className="container modal-body">

                        </div>
                    </div>
                </div>
            </div>
          </Fragment>
  );
};

export default MoveModal