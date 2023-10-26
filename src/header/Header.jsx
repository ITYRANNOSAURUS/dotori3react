import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);

    return (
        <div className="h p-5 my-bg-color text-white">
            <h2 className="my-text-size">
                <a href="http://localhost/home"><img className='title' src="/logo.png" alt="" /></a>
            </h2>
            <ul className="u navbar-nav mx-auto">
                <li className="nav-item dropdown mr-3">
                    <a className="nav-link dropdown-toggle active" href='http://localhost/map' id="infoDropdown" role="button" aria-haspopup="true" aria-expanded="false"
                        style={{ color: 'rgb(255, 179, 0)' }}>충전소 찾기</a>
                </li>

                <li className="nav-item dropdown mr-3"
                    onMouseEnter={() => setDropdownOpen2(true)}
                    onMouseLeave={() => setDropdownOpen2(false)}>
                    <a className="nav-link dropdown-toggle active" href="#" id="postsDropdown" role="button" aria-haspopup="true" aria-expanded="false"
                        style={{ color: 'rgb(255, 179, 0)' }}>게시판</a>
                    {dropdownOpen2 && (
                        <div className="dropdown-menu" aria-labelledby="infoDropdown">
                            <a className='dropdown-item' href='http://localhost/board/list'>공지사항</a>
                            <div className="dropdown">
                                <a className='dropdown-item' href='http://localhost/qna/list'>Q&A</a>
                            </div>
                        </div>

                    )}
                </li>

                <li className="nav-item dropdown mr-3"
                    onMouseEnter={() => setDropdownOpen3(true)}
                    onMouseLeave={() => setDropdownOpen3(false)}>
                    <a className="nav-link dropdown-toggle active" href="#" id="postsDropdown" role="button" aria-haspopup="true" aria-expanded="false"
                        style={{ color: 'rgb(255, 179, 0)' }}>미디어</a>
                    {dropdownOpen3 && (
                        <div className="dropdown-menu" aria-labelledby="infoDropdown">
                            <a className='dropdown-item' href='http://localhost/media/news?searchText=전기차'>전기차 뉴스</a>
                            <div className="dropdown">
                                <a className='dropdown-item' href='http://localhost/media/reels'>전기차 영상</a>
                                <div className="dropdown">
                                    <a className='dropdown-item' href='/'>전기차 주행거리</a>
                                    <div className="dropdown">
                                        <a className='dropdown-item' href='http://localhost/media/gamepage'>전기차 게임</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </li>

                <li className="nav-item dropdown mr-3"
                    onMouseEnter={() => setDropdownOpen4(true)}
                    onMouseLeave={() => setDropdownOpen4(false)}>
                    <a className="nav-link dropdown-toggle active" href="#" id="infoDropdown" role="button" aria-haspopup="true" aria-expanded="false"
                        style={{ color: 'rgb(255, 179, 0)' }}>멤버십</a>
                    {dropdownOpen4 && (
                        <div className="dropdown-menu" aria-labelledby="infoDropdown">
                            <a className='dropdown-item' href='http://localhost/exchange'>코인교환</a>
                            <div className="dropdown">
                                <a className='dropdown-item' href='http://localhost/coupon'>쿠폰함</a>
                                <div className="dropdown">
                                    <a className='dropdown-item' href='http://localhost/membership'>구독하기</a>
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