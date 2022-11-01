import { Link } from "react-router-dom";
import styles from "./index.module.css"

function Contact(){
    return (
        <>
            <section>
                <div className="container px-3">
                <ul className="d-flex list-unstyled py-1">
                        <li>
                            <Link to="/">
                                <span className={styles["home-link"]}> Trang chủ </span>
                                &nbsp;
                                /
                                &nbsp;
                            </Link>
                        </li>
                        <li>
                            <strong style={{color:"#ffb416", fontWeight:400}}>Liên hệ với chúng tôi</strong>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
export default Contact;