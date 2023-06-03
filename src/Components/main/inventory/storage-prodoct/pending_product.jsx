import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import Modal from "./main_modal";
import {useFormik} from "formik";

const PendingProduct = (props) => {
   const [pendingList, setPendingList] = useState([])
   const [message, setMessage] = useState('');
   const [idNumberProduct, setIdNumberProduct] = useState(null)
   const [products, setProducts] = useState([])

   const formik = useFormik({
    initialValues: {
      name: products.name || "",
      input: products.input || "",
      scale: products.scale || "",
      inventory_src: products.inventory_src || "",
      inventory_dst: products.inventory_dst || "",
      receiver: products.receiver || "",
      factor: products.factor || "",
      checkBill: products.checkBill || "",
      document_type: products.document_type || "",
      document_code: products.document_code || "",
      agree: products.agree || "",
      disagree: products.disagree || "",
      amendment: products.amendment || "",
      date: products.date || "",

    },
    enableReinitialize: true,
    });
    useEffect(() => {
            (async () => {
                const {data} = await axios.get('http://localhost:8000/home/', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
              });
              setMessage(data.message);
        })()
    }, []);

   const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/pendingProducts`)
        const data = await response.json()
        setPendingList(data)
      }

   const fetchDataAllProducts = async () => {
        if (idNumberProduct !== null) {
            const response = await fetch(`http://127.0.0.1:8000/api/pendingProducts/` + idNumberProduct)
            const data = await response.json()
            setProducts(data)
        }
      }
   useEffect(() => {
            void fetchData()
            void fetchDataAllProducts()
          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [idNumberProduct])
    return (
        <Fragment>
            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                <table className="table table-hover text-center table-striped align-middle table-bordered border-primary">
                    <thead className= 'bg-light'>
                    <tr>
                        <th scope="col">نام</th>
                        <th scope="col">ورود</th>
                        <th scope="col">مقیاس</th>
                        <th scope="col">مبدا</th>
                        <th scope="col">مقصد</th>
                        <th scope="col">تاریخ</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                 {(pendingList.length > 0 && pendingList.filter(product => product.inventory_dst ===  message || product.inventory_src ===  message ).map((data) => (
                    <tr key={data.id}>
                        <th scope="row">{data.name}</th>
                        <td>{data.input}</td>
                        <td>{data.scale}</td>
                        <td>{data.inventory_src}</td>
                        <td>{data.inventory_dst}</td>
                        <td>{data.date}</td>
                        <td>
                            <button id='exitBtn' className= 'btn btn-danger   material-symbols-outlined ms-2'
                            title="رد" onClick={() => {
                                setIdNumberProduct(data.id)
                            }} disabled={data.inventory_src ===  message}>close</button>
                            <button id='entryBtn' className= 'btn btn-success   material-symbols-outlined ms-2'
                            title="تایید" onClick={() => {
                                setIdNumberProduct(data.id)
                            }} disabled={data.inventory_src ===  message}>done</button>
                        </td>
                    </tr>
                         ))) ||
                         <tr>
                            <td colSpan="6" className='h3'>داده ای یافت نشد .....</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
            </div>
        </Fragment>
    )
}

export default PendingProduct