import axios from "../../axios";


const demo = (idUser, data) => {
  return axios.post(`/api/user/editUser/${idUser}`, data);
};

const updateUser = (idUser, data) => {
  return axios.post(`/api/user/editUser/${idUser}`, data);
};
const getAllUsers = () => {
  return axios.get("/api/user/getListUsers");
};

const getListUsersNotBanned = () => {
  return axios.get("/api/user/getListUsersNotBanned");
};

const bannedUser = (idUser) => {
  return axios.delete(`/api/user/bannedUser/${idUser}`);
};

const createUser = (formData) => {
  return axios.post("/api/user/addNew", formData);
};

const apiLogin = (username, password) => {
  return axios({
    url: `/api/user/login?username=${username}&password=${password}`,
    method: "post",
  });
};

const getCartUser = (id) => {
  return axios({
    url: `/api/cart/getlistitem?idUser=${id}`,
    method: "get",
  });
};

const deleteCartUser = (idUser, idProduct) => {
  return axios({
    url: `/api/cart/removeitems?idUser=${idUser}&items=${idProduct}`,
    method: "delete",
  });
};

const apiCheckOut = (idUser, data) => {
  return axios({
    url: `/api/checkout/getinfouser?idUser=${idUser}`,
    method: "post",
    data,
  });
};

export {
  getAllUsers,
  createUser,
  apiLogin,
  deleteCartUser,
  getCartUser,
  apiCheckOut,
  updateUser,
  bannedUser,
  getListUsersNotBanned,
  demo
};
