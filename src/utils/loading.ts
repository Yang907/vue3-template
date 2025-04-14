import { ElLoading } from 'element-plus';

let loadingInstance: any;
const showL = () => {
    loadingInstance = ElLoading.service({
        lock: true,
        text: '加载中',
        background: 'rgba(0, 0, 0, 0.1)'
    });
};
const hideL = () => {
    if (!loadingInstance) {
        return false;
    }
    loadingInstance.close();
    return undefined;
};
export { showL, hideL };
