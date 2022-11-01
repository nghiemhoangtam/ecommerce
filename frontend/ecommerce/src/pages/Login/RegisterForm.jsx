import axios from "axios";
import styles from "./index.module.css";
import { useState } from "react";

function RegisterForm(){
    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit= (event) =>{
        event.preventDefault();
        const data={
            "firstName": firstName,
            "lastName": lastName,
            "email" : email,
            "phone":phone,
            "password" : password
        }
        console.log(JSON.stringify(data));

        axios.post("http://localhost:8080/register",data)
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            });
        // axios.get('http://localhost:8080/api/products')
        //     .then((response)=>{
        //         console.log(response);
        //     });
    }
    return (
        <div>
            <form action="" method="post" id={styles["customer-login"]} onSubmit={handleSubmit}>
                <h1 className={styles["customer-login-title"]}>Đăng ký</h1>
                <input type="text" className={styles["form-control-customize"]} placeholder="Họ & tên đệm" onChange={(event)=>{setFirstName(event.target.value)}} />
                <input type="text" className={styles["form-control-customize"]} placeholder="Tên" onChange={(event)=>{setLastName(event.target.value)}} />
                <input type="text" className={styles["form-control-customize"]} placeholder="Điện thoại" onChange={(event)=>{setPhone(event.target.value)}} />
                <input type="text" className={styles["form-control-customize"]} placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}} />
                <input type="password" className={styles["form-control-customize"]} placeholder="Mật khẩu" onChange={(event)=>{setPassword(event.target.value)}} />

                <p className={styles.recover}>
                    <a href="http://">Quên mật khẩu?</a>
                </p>
                <button className="btn btn-danger w-100 py-3">ĐĂNG KÝ</button>
            </form>
        </div>
    );
}

export default RegisterForm;