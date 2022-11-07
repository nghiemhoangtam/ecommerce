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
            <section>
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.138067327163!2d105.85158041430809!3d21.027160893210162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abeb3b3f82a5%3A0xbcd3ec0aac24bc9a!2zNzUgxJBpbmggVGnDqm4gSG_DoG5nLCBUcsOgbmcgVGnhu4FuLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513239003135" width="1200" height={500} frameborder="0"></iframe>
                </div>
            </section>
        </>
    );
}
export default Contact;