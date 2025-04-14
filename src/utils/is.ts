/*
 * @file: 判断工具
 * @author: DontK
 * @LastEditTime: 2023-10-07 15:03:28
 * @description copy to vben-admin
 */

const { toString } = Object.prototype;
/**
 * @description: 判断变量类型
 */
export const is = (val: unknown, type: string) => {
    return toString.call(val) === `[object ${type}]`;
};
/**
 * @description: 判断是否是对象
 */
export const isObject = (val: any): val is Record<any, any> => {
    return val !== null && is(val, 'Object');
};
/**
 * @description: 判断是否是数组
 */
export const isArray = (val: any): val is Array<any> => {
    return val && Array.isArray(val);
};
/**
 * @description: 判断是否是字符串
 */
export const isString = (val: unknown): val is string => {
    return is(val, 'String');
};
/**
 * @description: 判断是否是Number
 */
export const isNumber = (val: unknown): val is number => {
    return is(val, 'Number');
};
/**
 * @description: 判断是否是布尔值
 */
export const isBoolean = (val: unknown): val is boolean => {
    return is(val, 'Boolean');
};
/**
 * @description: 判断是否是Date
 */
export const isDate = (val: unknown): val is Date => {
    return is(val, 'Date');
};
/**
 * @description: 判断不是undefined
 */
export const isDefined = <T = unknown>(val?: T): val is T => {
    return typeof val !== 'undefined';
};
/**
 * @description: 判断是undefined
 */
export const isUnDefined = <T = unknown>(val?: T): val is T => {
    return !isDefined(val);
};
/**
 * @description: 判断是null
 */
export const isNull = (val: unknown): val is null => {
    return val === null;
};
/**
 * @description: 判断是否是方法
 */
export const isFunction = (val: unknown): val is Function => {
    return typeof val === 'function';
};
/**
 * @description: 判断是否是异步
 */
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
    return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
/**
 * @description: 判断是否为正则
 */
export const isRegExp = (val: unknown): val is RegExp => {
    return is(val, 'RegExp');
};
/**
 * @description: 判断是否是undefined和null
 */
export const isNullAndUnDef = (val: unknown): val is null | undefined => {
    return isUnDefined(val) && isNull(val);
};
/**
 * @description: 判断是否是undefined或null
 */
export const isNullOrUnDef = (val: unknown): val is null | undefined => {
    return isUnDefined(val) || isNull(val);
};
/**
 * @description: 判断是否为空字符串/空对象/空数组/空集合
 */
export const isEmpty = <T = unknown>(val: T): val is T => {
    if (isArray(val) || isString(val)) {
        return val.length === 0;
    }
    if (val instanceof Map || val instanceof Set) {
        return val.size === 0;
    }
    if (isObject(val)) {
        return Object.keys(val).length === 0;
    }
    return false;
};
/**
 * @description: 判断是否为空值
 */
export const isEmptyVal = (val: any): boolean => {
    return val === '' || val === null || val === undefined;
};
/**
 * @description: 判断是否为window
 */
export const isWindow = (val: any): val is Window => {
    return typeof window !== 'undefined' && is(val, 'Window');
};
/**
 * @description: 判断是否为element
 */
export const isElement = (val: unknown): val is Element => {
    return isObject(val) && !!val.tagName;
};
/**
 * @description: 判断是否为集合
 */
export const isMap = (val: unknown): val is Map<any, any> => {
    return is(val, 'Map');
};
/**
 * @description: 判断是否为url地址
 */
export const isUrl = (path: string): boolean => {
    const reg =
        /(((^https?:(?:\/\/)?)(?:[-:&=\\+\\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-:&=\\+\\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\w-_]*)?\??(?:[-\\+=&%@.\w_]*)#?(?:[\w]*))?)$/;
    return reg.test(path);
};
/**
 * @description: 是否是图片链接
 */
export const isImgPath = (path: string): boolean => {
    return /(https?:\/\/|data:image\/).*?\.(png|jpg|jpeg|gif|svg|webp|ico)/gi.test(path);
};

export const isServer = typeof window === 'undefined';
export const isClient = !isServer;
