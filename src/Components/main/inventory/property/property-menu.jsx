import React, {Fragment} from "react";

export const PropertyMenu = (props) => {
    return (
        <Fragment>

            <div  className= 'd-flex justify-content-center gap-4 m-4' style={{height:'250px'}} >
                    <div >
                        <p>
                            <button  className="btn btn-primary property_menu" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseInstrument" aria-expanded="false"
                                    aria-controls="collapseInstrument">
                                تجهیزات
                            </button>
                        </p>
                        <div  style={{minHeight: '120px'}} >
                            <div className="collapse collapse-horizontal"  id="collapseInstrument">
                                <div className="card card-body gap-2 w-100" >
                                    <button  className='btn btn-primary d-flex justify-content-center gap-2' value='safetyEquipment' data-bs-toggle="collapse"
                                    data-bs-target="#collapseSafetyEquipment" onClick={(e) => props.setShowForm(e.target.value)}><span className="material-symbols-outlined">health_and_safety</span>
                                    تجهیزات ایمنی</button>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span
                                        className="material-symbols-outlined">mode_fan</span>تجهیزات فرودگاهی</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            <button className="btn btn-primary property_menu" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFurniture" aria-expanded="false"
                                    aria-controls="collapseFurniture">
                                اثاث
                            </button>
                        </p>
                        <div style={{minHeight: '120px'}}>
                            <div className="collapse collapse-horizontal" id="collapseFurniture">
                                <div className="card card-body gap-2 w-100">
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">ev_station</span>
                                    اثاثه الکترونیکی</button>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">desk</span>اثاثه اداری</button>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">luggage</span>اثاثه تاسیساتی</button>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">flight</span>اثاثه فرودگاهی</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            <button className="btn btn-primary property_menu" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseVehicle" aria-expanded="false"
                                    aria-controls="collapseVehicle"
                            style={{width:'200px'}}>
                                وسایل نقلیه
                            </button>
                        </p>
                        <div style={{minHeight: '120px'}}>
                            <div className="collapse collapse-horizontal" id="collapseVehicle">
                                <div className="card card-body gap-2 w-100" style={{width: '200px'}}>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span
                                    className="material-symbols-outlined">airport_shuttle</span>خودرو فرودگاهی</button>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">directions_car</span>
                                    خودرو اداری</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            <button className="btn btn-primary property_menu" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseMovableProperty" aria-expanded="false"
                                    aria-controls="collapseMovableProperty">
                                اموال منقول
                            </button>
                        </p>
                        <div style={{minHeight: '120px'}}>
                            <div className="collapse collapse-horizontal" id="collapseMovableProperty">
                                <div className="card card-body gap-2 w-100">
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">construction</span>
                                    ابزار آلات غیر صنعتی</button>
                                    <button className='btn btn-primary d-flex justify-content-center  gap-2'><span
                                    className="material-symbols-outlined float-end">storage</span>اقلام پشتیبانی</button>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">deskphone</span>امتیازات</button>
                                    <button className='btn btn-primary d-flex justify-content-center gap-2'><span className="material-symbols-outlined">engineering</span>
                                    ابزار آلات صنعتی</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}