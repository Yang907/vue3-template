/*
 * @Descripttion: AES对称加密
 * npm install crypto-js --save-dev
 */
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import CryptoJS from 'crypto-js'

const KEY = 'PL+kwG0IG1w2CapFwoh0Rw=='
const IV = CryptoJS.enc.Utf8.parse(KEY.substring(0, 16))
// 加密参数
const option = {
  iv: IV,
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
}
// AES加密
export const encrypt = (data: any) => {
  const key = CryptoJS.enc.Utf8.parse(KEY)
  const srcs = CryptoJS.enc.Utf8.parse(data)
  const encrypt = CryptoJS.AES.encrypt(srcs, key, option)
  const encryptData = encrypt.toString()
  return encryptData
}
// 解密
export const decrypto = (encryptData: string): string => {
  const decrypt = CryptoJS.AES.decrypt(encryptData, KEY, option)
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}
