import axios from "axios";
import cookie from "react-cookies";

const BASE_URL = 'http://localhost:8888/public/QuanLyBaiDoXe/api';
const IDENTITY_URL = 'http://localhost:8888/identity';

export const endpoints = {
  "login": "/auth/token",
  "face": "/auth/face/token",
  "current-user": "/users/current-user",
  "staffBaiDoXe": "/staffBaiDoXe",
  "getKhuDoXeByBaiDoXe": "/getKhuDoXeByBaiDoXe",
  "getChoDoByKhuAndBaiId": "/getChoDoByKhuAndBaiId",
  "thongtindangky": "/thongtindangky",
  "detail": "/getChiTietBai",
  "phuongtien": "/phuongtien",
  "refund": "/paypal/refund",
  "addHoanTien": '/userHoanTien',
  "hoadon": (ttdk_id) => `/Hoadon/${ttdk_id}`
};

export const identityApi = () => axios.create({
  baseURL: IDENTITY_URL,
})

export const authAPIs = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: cookie.load("token"),
    },
  });
};

export default axios.create({
  baseURL: BASE_URL,
});
