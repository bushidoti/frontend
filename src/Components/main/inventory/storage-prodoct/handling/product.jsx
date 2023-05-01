import React, {Fragment} from "react";

export const Product = () => {
    return (
           <Fragment>
                 <div className='m-4'>
                    <div className="input-group mb-3">
                        <input type="text"  id='searchBox' className="form-control" placeholder='جستجو براساس کد کالا'
                        aria-label="searchBox" aria-describedby="search" />
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                    </div>
                </div>

                <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                    <table className="table table-hover text-center table-striped align-middle">
                        <thead className= 'bg-light'>
                        <tr>
                            <th scope="col">بایگانی</th>
                            <th scope="col">کد</th>
                            <th scope="col">نام</th>
                            <th scope="col">ورود</th>
                            <th scope="col">خروج</th>
                            <th scope="col">مانده</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <input id='archiveBtn' type='checkbox' className= 'form-check-input'/>
                            </td>
                            <th scope="row">101100</th>
                            <td>مداد</td>
                            <td>20</td>
                            <td>10</td>
                            <td>10</td>
                            <td>
                                <button id='visibilityBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#observeModal" title="کاردکس">visibility</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                 </div>
            </Fragment>
    )
}