import { Base64 } from 'js-base64';
// import { imageFormats } from '@/constants/common';

export const downFile = (data: string, fileName: string) => {
    const url = window.URL.createObjectURL(
        new Blob([data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        })
    );
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const viewFile = (data: string) => {
    const url = window.URL.createObjectURL(
        new Blob([data], {
            type: 'application/pdf'
        })
    );
    window.open(url);
};

export const downFileByUrl = async (url: string, fileName: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = blobUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// 判断文件类型
export const isFileType = (url: any) => {
    try {
        const fileExtension = url.slice(url.lastIndexOf('.') + 1).toLowerCase();
        return fileExtension; // doc docx xls xlsx pdf ....
    } catch (error) {
        return '';
    }
};

/**
 * 文件展示拼接加转码
 * @param url 文件url
 * @returns 完整可直接访问的 url
 */

export const getFilePreview = (url: string) => {
    // const type = url.substring(url.lastIndexOf('.'));
    // if (imageFormats.includes(type)) {
    //     return `${import.meta.env.VITE_PREVIEW}?url=${encodeURIComponent(
    //         Base64.encode(url || '')
    //     )}`;
    // }
    // const preUrl =
    //     import.meta.env.MODE === 'production'
    //         ? 'http://minio.adas.com:9100'
    //         : 'http://minio-test.adas.com:9000';
    // const newUrl = url.replace(/^https?:\/\/.*?\/mino/g, preUrl);
    // console.log(newUrl, 'newUrl');

    return `${import.meta.env.VITE_PREVIEW}?url=${encodeURIComponent(Base64.encode(url || ''))}`;
};
