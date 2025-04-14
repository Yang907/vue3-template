import { dayjs } from 'element-plus';

export const formartNum = (num: number | undefined | string) => {
    return num && num.toString().replace(/(\d{1,4})(?=(\d{4})+$)/g, '$1 ');
};
export const transferPx = (px: number): number => {
    const scale = document.documentElement.clientHeight / (window as any).innerHeight;
    return px * scale;
};
export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 || 0;
        const v = c === 'x' ? r : (r && 0x3) || 0x8;
        return v.toString(16);
    });
};
// 文件大小转换
export const formatFileSize = (size: number | string | undefined) => {
    let fSize = '0kb';
    if (size && !Number.isNaN(Number(size))) {
        if (Number(size) < 1024) {
            // b
            fSize = '1kb';
        } else if (Number(size) < 1024 * 1024) {
            // kb
            fSize = `${(Number(size) / 1024).toFixed(1)}Kb`;
        } else if (Number(size) < 1024 * 1024 * 1024) {
            // m
            fSize = `${(Number(size) / 1024 / 1024).toFixed(1)}M`;
        } else {
            // g
            fSize = `${(Number(size) / 1024 / 1024 / 1024).toFixed(1)}M`;
        }
    }
    return fSize;
};

export const formatTime = (time: any, format: string = 'YYYY-MM-DD', replaceStr: string = '') => {
    if (!time) return '';
    return time ? dayjs(time).format(format) : replaceStr;
};
