import React, {Fragment} from "react";

const BillCheckModal = (props) => {
      function refreshPage() {
        window.location.reload();
         }

  return (
      <Fragment>
         <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="billCheckModal" tabIndex="-1" aria-labelledby="billCheckModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-xl" >
                        <div className="modal-content">
                            <div className="modal-header mx-4">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{(() => {
                                    if (props.modalTitle === 'factor'){
                                        return  'شماره فاکتور'
                                    }else if (props.modalTitle === 'check') {
                                        return 'شماره حواله'
                                    }
                                })()} 18-ب/189</h1>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close" onClick={refreshPage}></button>
                            </div>
                            <div className="modal-body">
                                 <div className= 'd-flex mx-4 my-2'>
                                <button className= 'btn btn-primary material-symbols-outlined'  id='export&print'>print</button>
                                </div>
                                <hr className='bg-primary mx-4'/>
                                  <div className= 'mx-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                                    <table className="table table-hover text-center table-striped align-middle">
                                        <thead className= 'bg-light'>
                                        <tr>
                                            <th scope="col">ردیف</th>
                                            <th scope="col">کد کالا</th>
                                            <th scope="col">نام کالا</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">
                                            {(() => {
                                                if (props.modalTitle === 'factor'){
                                                    return  'خریدار'
                                                }else if (props.modalTitle === 'check') {
                                                    return 'گیرنده'
                                                }
                                            })()}
                                            </th>
                                            <th scope="col">تاریخ</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>12/پ-789</td>
                                            <td>مداد</td>
                                            <td>20</td>
                                            <td>سجاد شاه محمدلو</td>
                                            <td>1401/12/20</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <div className="modal-footer mx-4">
                        <button type="button" className="btn material-symbols-outlined btn-danger" onClick={refreshPage} data-bs-dismiss="modal">close</button>
                        <button type="submit" className="btn material-symbols-outlined btn-success">done</button>
                    </div>
                </div>
            </div>
        </div>
  </Fragment>
  );
};
export default BillCheckModal