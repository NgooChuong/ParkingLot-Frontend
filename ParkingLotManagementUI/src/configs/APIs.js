import axios from 'axios'
const BASE_URL = 'http://localhost:8888/public/QuanLyBaiDoXe/api';
const USER_URL = 'http://localhost:8888/QuanLyBaiDoXe/api';

const IDENTITY_URL = 'http://localhost:8888/identity';

export let endpoints = {
'login': '/auth/token',// identity
'current-user': '/users/current-user',
'users': "/users/registration", // identity
'email': '/send-email',
'baixe': '/HomeBaiDoXe',
'updateUser':(user_id) => `/users/${user_id}`,
'detail': '/getChiTietBai',
'pic': '/getPic',
'phuongtien': '/phuongtien',
'getChoDoDaDangKy':'/getChoDoDaDangKy',
'comments': (baidoxeId) =>`/rating/baidoxe/${baidoxeId}`,
'add_comment':'/rating/baidoxe',
"papalSuccess": "/success",
"paypal": "/paypal/pay",
'paypalSuccess' :"/successPaypal",
"momo": "/momo/createPayment",
"LoginGG": "/auth/google/token",
'danhsachxe':'/xe/',
'lichsuChoDoXe':'/lichsudangky',
'updateCar':(xe_id) => `/xe/${xe_id}/`,
'getCar':(id) => `/xe/${id}/`,
'registerCar':"/xeAdd/",
"danhGia":"/rating/baidoxe",
'HuyDangKyCho':(id)=>`/thongtindangky/${id}`,
'UpdateActiveDangKyCho':(id)=>`/thongtindangkyupdate/${id}`,
'sendMail':'/send-email',
'saveThongTinDangKy':'/saveThongTinDangKy',


}

export const UserApi = (accessToken) => axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': accessToken
    }
})

export const identityApi = () => axios.create({
    baseURL: IDENTITY_URL,
})

export const identityTokenApi = (accessToken) => axios.create({
    baseURL: IDENTITY_URL,
    headers: {
        'Authorization': accessToken
    }
})
export const authApi = (accessToken) => axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': accessToken
    }
})
export default axios.create({
    baseURL:BASE_URL
})
