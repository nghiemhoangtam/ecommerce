import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function LoginPage(){
    

    const [status,setStatus] = useState(true);

    return (
        <div id={styles["layout-login"]}>
            <div className={styles["login-header"]}>
                <div className="container">
                    <ul className="breadcrumb-arrows d-flex list-unstyled py-3">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home"></i>
                                <span> Trang chủ </span>
                                <i className="fa fa-angle-right"></i>
                                &nbsp;
                            </Link>
                        </li>
                        <li>
                            <Link to="/account">
                                <span> Tài khoản </span>
                                <i className="fa fa-angle-right"></i>
                                &nbsp;
                            </Link>
                        </li>
                        <li>
                            <span className="text-muted">{(status)?"Đăng nhập":" Đăng ký"}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles["login-content"]}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {(status)?<LoginForm />: <RegisterForm />}
                        </div>
                        <div className="col-6">
                            <div>
                                <form action="" method="post" id={styles["customer-login"]} onSubmit={(e)=>{ e.preventDefault(); setStatus(!status)}}>
                                    <h1 className={styles["customer-login-title"]}>Quyền lợi thành viên</h1>
                                    <p>
                                        Bằng việc tạo tài khoản bạn có thể mua sắm nhanh hơn, theo dõi trạng thái đơn hàng, và theo dõi đơn hàng mà bạn đã đặt.
                                    </p>
                                    <button className="btn btn-danger py-3 px-4">{(status)?"ĐĂNG KÝ":"ĐĂNG NHẬP"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;