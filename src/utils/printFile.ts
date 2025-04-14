/**
 * @description: 打印pdf文件
 * @param data 文件文档流
 */
export const printApplication = (data: Blob) => {
    const blob = new Blob([data], { type: 'application/pdf' });
    const date = new Date().getTime();
    const ifr = document.createElement('iframe');
    const cKey = 'frameborder';
    ifr.style[cKey] = 'no';
    ifr.style.display = 'none';
    ifr.style.pageBreakBefore = 'always';
    ifr.setAttribute('id', `printPdf${date}`);
    ifr.setAttribute('name', `printPdf${date}`);
    ifr.src = window.URL.createObjectURL(blob);
    console.log(
        '🚀  printApplication  window.URL.createObjectURL(blob)',
        window.URL.createObjectURL(blob)
    );
    document.body.appendChild(ifr);
    const iframeElement = document.getElementById(`printPdf${date}`) as HTMLIFrameElement;
    const ordonnance: any = iframeElement.contentWindow;
    setTimeout(() => {
        ordonnance.print();
    }, 100);
    window.URL.revokeObjectURL(ifr.src); // 释放URL 对象
};

/**
 * @description: 获取文件url
 */
export const getBlobUrl = (data: Blob) => {
    const blob = new Blob([data], { type: 'application/pdf' });
    return window.URL.createObjectURL(blob);
};
