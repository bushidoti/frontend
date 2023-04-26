import React, {Fragment, useEffect, useRef, useState} from "react";

export const PropertyMenu = (props) => {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState('');

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
          console.log(isMenuOpen)

        setIsMenuOpen('');
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

    return (
        <Fragment>
            <div  className= 'd-flex justify-content-center gap-4 m-4' >
                <div className="dropdown">
                    <button className="btn btn-primary property_menu dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        تجهیزات
                    </button>
                    <ul className="dropdown-menu mt-2 w-100">
                        <li><button  className='btn  d-flex gap-2 dropdown-item' value='safetyEquipment' onClick={(e) => props.setShowForm(e.target.value)}>
                        <span className="material-symbols-outlined">health_and_safety</span>
                        تجهیزات ایمنی</button></li>
                        <li><button className='btn  d-flex gap-2 dropdown-item' value='airportEquipment' onClick={(e) => props.setShowForm(e.target.value)}><span
                        className="material-symbols-outlined">mode_fan</span>تجهیزات فرودگاهی</button></li>
                    </ul>
                </div>

                 <div className="dropdown">
                    <button className="btn btn-primary property_menu dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        وسایل نقلیه
                    </button>
                    <ul className="dropdown-menu mt-2 w-100">
                        <li><button className='btn d-flex gap-2 dropdown-item' value='airportCar' data-bs-toggle="collapse"
                                    data-bs-target="#collapse" onClick={(e) => props.setShowForm(e.target.value)}><span
                                    className="material-symbols-outlined">airport_shuttle</span>خودرو فرودگاهی</button></li>
                        <li><button className='btn d-flex gap-2 dropdown-item' value='personalCar' data-bs-toggle="collapse"
                        data-bs-target="#collapse" onClick={(e) => props.setShowForm(e.target.value)}><span className="material-symbols-outlined">directions_car</span>
                        خودرو اداری</button></li>
                    </ul>
                </div>
                     <div className="dropdown">
                    <button className="btn btn-primary property_menu dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        اثاث
                    </button>
                    <ul className="dropdown-menu mt-2 w-100">
                        <li><button className='btn d-flex  gap-2 dropdown-item' value='electronicFurniture'
                        onClick={(e) => props.setShowForm(e.target.value)}><span className="material-symbols-outlined">ev_station</span>
                        اثاثه الکترونیکی</button></li>
                        <li><button className='btn d-flex  gap-2 dropdown-item' value='officeFurniture' onClick={(e) => props.setShowForm(e.target.value)}>
                        <span className="material-symbols-outlined">desk</span>اثاثه اداری</button></li>
                         <li><button className='btn d-flex gap-2 dropdown-item' value='furniture' onClick={(e) => props.setShowForm(e.target.value)}>
                         <span className="material-symbols-outlined">luggage</span>اثاثه تاسیساتی</button></li>
                        <li><button className='btn d-flex  gap-2 dropdown-item' value='airportFurniture' onClick={(e) => props.setShowForm(e.target.value)}>
                        <span className="material-symbols-outlined">flight</span>اثاثه فرودگاهی</button></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-primary property_menu dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        اموال منقول
                    </button>
                    <ul className="dropdown-menu mt-2 w-100">
                        <li><button className='btn d-flex gap-2 dropdown-item' value='industrialEquipment' onClick={(e) => props.setShowForm(e.target.value)}>
                        <span className="material-symbols-outlined">construction</span>ابزار آلات غیر صنعتی</button></li>
                        <li><button className='btn d-flex  gap-2 dropdown-item' value='supportItems' onClick={(e) => props.setShowForm(e.target.value)}>
                        <span className="material-symbols-outlined float-end">storage</span>اقلام پشتیبانی</button></li>
                         <li><button className='btn d-flex gap-2 dropdown-item' value='benefits' onClick={(e) => props.setShowForm(e.target.value)}>
                         <span className="material-symbols-outlined">deskphone</span>امتیازات</button></li>
                        <li><button className='btn d-flex gap-2 dropdown-item' value='dustrialEquipment' onClick={(e) => props.setShowForm(e.target.value)}>
                        <span className="material-symbols-outlined">engineering</span>
                        ابزار آلات صنعتی</button></li>
                    </ul>
                </div>
                </div>
        </Fragment>
    )
}