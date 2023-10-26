import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);

    return (
        <div className={styles.container}>
            <h1 className="my-text-size">
                <a href="http://localhost/home"><img className={styles.title} src="/logo.png" alt="" /></a>
            </h1>
            <ul className={`navbar-nav ${styles.navbarNav}`}>

                <li className={styles.dropdown_category}>
                    <a className="nav-link dropdown-toggle active" href='http://localhost/map' id="infoDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }}>충전소 찾기</a>
                </li>

                <li className={styles.dropdown_category}
                    onMouseEnter={() => setDropdownOpen2(true)}
                    onMouseLeave={() => setDropdownOpen2(false)}>
                    <a className="nav-link dropdown-toggle active" href="#" id="postsDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }}>게시판</a>
                    {dropdownOpen2 && (
                        <div class="dropdown-menu" aria-labelledby="infoDropdown">
                            <a class='dropdown-item' href='http://localhost/board/list'>공지사항</a>
                            <div class="dropdown">
                                <a class='dropdown-item' href='http://localhost/qna/list'>Q&A</a>
                            </div>
                        </div>

                    )}
                </li>

                <li className={styles.dropdown_category}
                    onMouseEnter={() => setDropdownOpen3(true)}
                    onMouseLeave={() => setDropdownOpen3(false)}>
                    <a className="nav-link dropdown-toggle active" href="#" id="postsDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }}>미디어</a>
                    {dropdownOpen3 && (
                        <div class="dropdown-menu" aria-labelledby="infoDropdown">
                            <a class='dropdown-item' href='http://localhost/media/news?searchText=전기차'>전기차 뉴스</a>
                            <div class="dropdown">
                                <a class='dropdown-item' href='http://localhost/media/reels'>전기차 영상</a>
                                <div class="dropdown">
                                    <a class='dropdown-item' href='/'>전기차 주행거리</a>
                                    <div class="dropdown">
                                        <a class='dropdown-item' href='http://localhost/media/gamepage'>전기차 게임</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </li>

                <li className={styles.dropdown_category}
                    onMouseEnter={() => setDropdownOpen4(true)}
                    onMouseLeave={() => setDropdownOpen4(false)}>
                    <a className="nav-link dropdown-toggle active" href="#" id="infoDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }}>멤버십</a>
                    {dropdownOpen4 && (
                        <div class="dropdown-menu" aria-labelledby="infoDropdown">
                            <a class='dropdown-item' href='http://localhost/exchange'>코인교환</a>
                            <div class="dropdown">
                                <a class='dropdown-item' href='http://localhost/coupon'>쿠폰함</a>
                                <div class="dropdown">
                                    <a class='dropdown-item' href='http://localhost/membership'>구독하기</a>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Header;