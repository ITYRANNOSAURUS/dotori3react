import React from 'react';
import Lottie from 'lottie-react';
import LoadingAnimation from '../lottie/loading.json'; // 로딩 애니메이션 JSON 파일 경로

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Lottie animationData={LoadingAnimation} loop autoPlay />
        </div>
    );
};

export default Loading;