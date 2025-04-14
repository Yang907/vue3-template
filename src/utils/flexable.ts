const flexable = () => {
    let browerWidth = window.innerWidth; // 浏览器可视宽度
    const baseWidth = 1920; // 设计稿宽度
    let zoomValue = browerWidth / baseWidth; // 缩放比例计算
    document.getElementById('appContent')!.style.transform = `scale(${zoomValue},${zoomValue})`;
    document.getElementById('appContent')!.style.transformOrigin = '0 0';
    window.onresize = () => {
        // 窗口尺寸变化时，重新计算和缩放
        browerWidth = window.innerWidth;
        zoomValue = browerWidth / baseWidth;
        document.getElementById('appContent')!.style.transform = `scale(${zoomValue},${zoomValue})`;
        document.getElementById('appContent')!.style.transformOrigin = '0 0';
    };
};

export default flexable;
