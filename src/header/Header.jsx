import React, { useState } from 'react';
import './Header.module.css';

const Header = () => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);

    return (
        <div className="p-5 my-bg-color text-white d-flex justify-content-between">
            <h1 className="my-text-size">
                <a href="http://localhost/home"><img className="title" src="/logo.png" alt="" /></a>
            </h1>
            <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown mr-3">
                    <a className="nav-link dropdown-toggle active" href="#" id="infoDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }} onClick={() => setDropdownOpen1(!dropdownOpen1)}>충전소 찾기</a>
                    {dropdownOpen1 && (
                        <div className="dropdown-menu" aria-labelledby="infoDropdown">
                            <a className='dropdown-item' href='http://localhost/map'>지도</a>
                            <div className="dropdown">
                                <a className='dropdown-item' href='http://localhost/post/a'>목록</a>
                            </div>
                        </div>
                    )}
                </li>

                <li className="nav-item dropdown mr-3">
                    <a className="nav-link dropdown-toggle active" href="#" id="postsDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }} onClick={() => setDropdownOpen2(!dropdownOpen2)}>게시판</a>
                    {dropdownOpen2 && (
                        <div className="dropdown-menu" aria-labelledby="infoDropdown">
                            <a className='dropdown-item' href='http://localhost/board/list'>공지사항</a>
                            <div className="dropdown">
                                <a className='dropdown-item' href='http://localhost/qna/list'>Q&A</a>
                                <div className="dropdown">
                                    <a className='dropdown-item' href='http://localhost/chlregister'>충전소 추가 요청</a>
                                </div>
                            </div>
                        </div>
                    )}
                </li>

                <li className="nav-item dropdown mr-3">
                    <a className="nav-link dropdown-toggle active" href="#" id="postsDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }} onClick={() => setDropdownOpen3(!dropdownOpen3)}>미디어</a>
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


                <li className="nav-item dropdown mr-3">
                    <a className="nav-link dropdown-toggle active" href="#" id="infoDropdown" role="button"
                        style={{ color: 'rgb(255, 179, 0)' }} onClick={() => setDropdownOpen4(!dropdownOpen4)}>멤버십</a>
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
