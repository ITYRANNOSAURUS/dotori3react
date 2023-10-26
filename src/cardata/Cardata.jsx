import { useState, useEffect } from 'react';
import style from './Cardata.module.css'
import ReactPlayer from 'react-player';


const Cardata = () => {
    const [carDatas, setCarDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("/media/cardata")
            .then((res) => res.json())
            .then((data) => setCarDatas(data));
    }, []);

    return (
        <div className={style['react']}>
            <p className={style['right-top-text']}>react + springboot 활용한 페이지입니다.</p>
            <div className={style['car-data-container']}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=KFGES0sESy0"
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                />
                <h1 className="car-data-heading">전기차 주행거리</h1>
                <p className={style['car-data-distance']}>전기차 주행거리 : 한 번 충전으로 주행할 수 있는 거리</p>
                <p className={style['car-data-intro']}>주행거리 상위 250개 전기자동차 목록입니다.<br /><br />
                    알고 싶은 차종을 검색해 보세요!</p>
                <div className={style['search-bar']}>
                    <input
                        type="text"
                        placeholder="차 종류 입력"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                    <button className={style['search-button']}>검색</button>
                </div>
            </div>

            {carDatas.filter((val) => {
                if (searchTerm === "") {
                    return val;
                } else if (val.model.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((car) => (
                <div key={car.id} className={style['car-item']}>
                    <p>{car.model}</p>
                    <p className={style.Km}>{car.km} km</p>
                </div>
            ))}
        </div>
    );
}

export default Cardata;