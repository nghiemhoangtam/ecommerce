import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper";

import "./swiper.css";
import styles from "./index.module.css"
import { Link } from 'react-router-dom';

// SwiperCore.use({EffectCoverflow,Navigation,Pagination})


function Home(){
    return (
        <div id="content">
            <div className="main-slider">
                <div className="container">
                    <Swiper
                        pagination={true}
                        autoplay={{delay:3000}}
                        modules={[Navigation, Pagination, Autoplay]}
                    >
                        <SwiperSlide>
                            <img src="https://vmart.exdomain.net/image/cache/catalog/vmart/slide/Slide3-1200x400.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media3.scdn.vn/img4/2022/10_31/NwNVjuVBXPjgsLg944dF.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media3.scdn.vn/img4/2022/10_27/psX5pHO9lPmHLnfhWqdO.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media3.scdn.vn/img4/2022/10_31/EZ173RTnvTQPrzM0P5eS.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="section-category">
                <div className="container">
                    <Swiper
                        navigation={true}
                        // effect={"coverflow"}
                        // centeredSlides={true}
                        slidesPerView={9}
                        spaceBetween={0}
                        modules={[Navigation]}

                    >
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/ban-phim-may-tinh">
                                    <img className={styles.lazyload} src="/images/icons/keyboard.png" alt="" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/chuot-may-tinh">
                                    <img className={styles.lazyload} src="/images/icons/mouse.png" alt="" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/laptop-theo-hang">
                                    <img className={styles.lazyload} src="/images/icons/laptop.png" alt="" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/loa-de-ban">
                                    <img className={styles.lazyload} src="/images/icons/speaker.png" alt="" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/may-choi-game">
                                    <img className={styles.lazyload} src="/images/icons/gaming.png" alt="" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/tablet">
                                    <img className={styles.lazyload} src="/images/icons/tablet.png" alt="" />
                                </Link>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/may-anh">
                                    <img className={styles.lazyload} src="/images/icons/camera.png" alt="" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/smartwatch">
                                    <img className={styles.lazyload} src="/images/icons/smartwatch.png" alt="" />
                                </Link> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/tai-nghe">
                                    <img src="/images/icons/headphone.png" alt="" />
                                </Link>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cate-item">
                                <Link to="/dien-thoai-theo-hang">
                                    <img className={styles.lazyload} src="/images/icons/smartphone.png" alt="" />
                                </Link>
                                
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
            
        </div>
    )
}

export default Home