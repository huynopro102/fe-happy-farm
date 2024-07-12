import axios from "../../axios";

const demo = async () => {
  return await axios.get("/api/fertilizer/listfer?numberOfPage=0&sizeOfPage=5");
};

const getAll = async () => {
  return await axios.get("/api/fertilizer/listfer?numberOfPage=0&sizeOfPage=5");
};

const getAllPagi = async (page = 0, limitP = 8) => {
  return await axios({
    url: `/api/fertilizer/listfer?numberOfPage=${+page}&sizeOfPage=${+limitP}`,
    method: "get",
  });
};

const apiFilterBrand = async (page = 0, limitP = 8, brand = "Không có") => {
  return await axios({
    url: `/api/fertilizer/filterbybrand?pageNumber=${page}&sizeOfPage=${limitP}&brand=${brand}`,
    method: "get",
  });
};
const ListFerNotDelete = (numberOfPage, sizeOfPage) => {
  return axios.get(
    `/api/fertilizer/listallfer?numberOfPage=${numberOfPage}&sizeOfPage=${sizeOfPage}`
  );
};

// const getAll = async (numberOfPage , sizeOfPage) => {
//   return await axios.get(`/api/fertilizer/listallfer?numberOfPage=${numberOfPage}&sizeOfPage=${sizeOfPage}`);
// };

const getById = (id_Fertilizer) => {
  return axios.get(`/api/fertilizer/getfertilizer/${id_Fertilizer}`);
};

const deleteFertilizer = (id) => {
  return axios.delete(`/api/fertilizer/deletefer/${id}`);
};

const editfertilizer = (id, data) => {
  return axios.put(`/api/fertilizer/editfertilizer/${id}`, data);
};

const addToCart = (idItems, quantity, idUser) => {
  return axios({
    url: `/api/cart/additems?idItems=${idItems}&quantity=${quantity}&idUser=${idUser}`,
    method: "post",
  });
};

const apiCreateProduct = (data) => {
  return axios({
    url: "/api/fertilizer/addnew",
    method: "post",
    data,
  });
};

const apiMostBuy = () => {
  return axios({
    url: "/api/fertilizer/mostbuy",
    method: "get",
  });
};

const apiRecentAdd = () => {
  return axios({
    url: "/api/fertilizer/recentadd",
    method: "get",
  });
};

const apiCheapPrice = () => {
  return axios({
    url: "/api/fertilizer/cheaper",
    method: "get",
  });
};

const apiExpensive = () => {
  return axios({
    url: "/api/fertilizer/expensive",
    method: "get",
  });
};

export {
  getAll,
  getById,
  addToCart,
  editfertilizer,
  apiCreateProduct,
  apiCheapPrice,
  apiMostBuy,
  apiExpensive,
  apiRecentAdd,
  ListFerNotDelete,
  deleteFertilizer,
  getAllPagi,
  apiFilterBrand,
  demo
};
