import axios from "axios";
import styles from "./index.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../App";



function LoginForm(){
    const [isLoginFailed,setIsLoginFailed]=useState(false);
    const userContext = useContext(UserContext);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit= (event) =>{
        event.preventDefault();
        const data={
            "email" : email,
            "password" : password
        }

        axios.post("http://localhost:8080/login",data)
            .then((response)=>{
                const data=response.data;
                console.log(data);
                localStorage.setItem("user",JSON.stringify(data));
                userContext[1](JSON.stringify(data));
                setIsLoginFailed(false);
            })
            .catch((error)=>{
                console.log(error.response);
                setIsLoginFailed(true);
                console.log(isLoginFailed);
            });
        // axios.get('http://localhost:8080/api/products')
        //     .then((response)=>{
        //         console.log(response);
        //     });
    }
    return (
        <div>
            <form action="" method="post" id={styles["customer-login"]} onSubmit={handleSubmit}>
                <h1 className={styles["customer-login-title"]}>Đăng nhập</h1>
                {(isLoginFailed)?(<div class="alert alert-danger" role="alert">Username or password is not correct!</div>):""}
                <input type="text" className={styles["form-control-customize"]} placeholder="Địa chỉ Email" onChange={(event)=>{setEmail(event.target.value)}} />
                <input type="password" className={styles["form-control-customize"]} placeholder="Mật khẩu" onChange={(event)=>{setPassword(event.target.value)}} />
                <p className={styles.recover}>
                    <a href="http://">Quên mật khẩu?</a>
                </p>
                <button className="btn btn-danger w-100 py-3">ĐĂNG NHẬP</button>
                
            </form>
        </div>
    );
}

export default LoginForm;