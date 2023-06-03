import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {useFormik} from "formik";
import Swal from "sweetalert2";

const PendingProduct = () => {
   const [pendingList, setPendingList] = useState([])
   const [message, setMessage] = useState('');
   const [idNumberProduct, setIdNumberProduct] = useState(null)
   const [products, setProducts] = useState([])
   const [inventoryCode, setInventoryCode] = useState([])

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
              await setMessage(data.message);
        })()
    }, []);

   const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/pendingProducts`)
        const data = await response.json()
        setPendingList(data)
      }

   const fetchDataInventory = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/product`)
        const data = await response.json()
        setInventoryCode(data)
      }

   const fetchDataAllProducts = async () => {
       if (idNumberProduct !== null){
           const response = await fetch(`http://127.0.0.1:8000/api/pendingProducts/` + idNumberProduct)
            const data = await response.json()
             await setProducts(data)
       }


      }

   useEffect(() => {
            void fetchData()
            void fetchDataAllProducts()
            void fetchDataInventory()

          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [idNumberProduct])

      function refreshPages() {
            window.location.reload()
        }

      let today = new Date().toLocaleDateString('fa-IR');

      const postHandlerProduct = async () => {
           await axios.post(
            `http://127.0.0.1:8000/api/allproducts/`,
              {
              input: products.input,
              afterOperator: (products.filter(products => products.product ===  1020006).reduce((a,v) =>   a + v.input , 0 ))
                - (products.filter(products => products.product ===  1020006).reduce((a,v) =>   a + v.output , 0 )) + formik.values.input,
              name: formik.values.name,
              scale: formik.values.scale,
              date: today.replaceAll('/' , '-'),
              receiver:formik.values.receiver,
              operator:'ورود',
              document_type: formik.values.document_type,
              document_code: formik.values.document_code,
              product: inventoryCode.filter(product => product.inventory === message && product.name === formik.values.name)[0].code,
              checkBill: formik.values.checkBill,
              factor: formik.values.factor,
              amendment: formik.values.amendment,
         })
           setTimeout(
                    refreshPages, 3000)
        }


    const postAlert = () => {
          Swal.fire({
              title: 'مطمئنید?',
              text: "آیا از ثبت جا به جایی این کالا مطمئنید ؟",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'انصراف',
              confirmButtonText: 'بله, ثبت کن!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'ثبت شد!',
                  'کالا ثبت شد.',
                  'success',
                  'ok',
                  postHandlerProduct(),
                )
              }
            })
      }

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
                                console.log(inventoryCode.filter(product => product.inventory === message && product.name === formik.values.name)[0].code)


                            }} disabled={data.inventory_src ===  message}>close</button>
                            <button id='entryBtn' className= 'btn btn-success   material-symbols-outlined ms-2'
                            title="تایید" onClick={() => {
                               setIdNumberProduct(data.id)
                                postAlert()


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