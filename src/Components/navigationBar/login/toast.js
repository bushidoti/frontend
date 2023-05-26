import React, {useEffect, useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import axios from "axios";

function ToastLogin() {
  const [showA, setShowA] = useState(true);
  const [message, setMessage] = useState('');

    useEffect(() => {
            (async () => {
                const {data} = await (await axios.get('http://localhost:8000/home/', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
              }));
              setMessage(data.message);
        })()
    }, []);

  const toggleShowA = () => setShowA(!showA);
  return (
        <Toast className='toast end-1 position-fixed m-2  align-items-center text-white bg-success border-0' style={{bottom: '75px'}} show={showA} autohide={true} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">با موفقیت وارد شدید</strong>
          </Toast.Header>
          <Toast.Body>خوش آمدید {message} !</Toast.Body>
        </Toast>
  )
}

export default ToastLogin;