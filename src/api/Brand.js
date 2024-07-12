import axios from "../../axios";

const demo_time_2 = () => {
  return axios.get("/api/brand/getlistbrand");
};

const getAllBrand = () => {
  return axios.get("/api/brand/getlistbrand");
};

const getAllBrandNotDetele = () =>{
  return axios.get("/api/brand/notdeletebrand")
}

const findByName = (brandName) => {
  return axios.get(`/api/brand/find/${brandName}`);
};
/* 
const data = {
    nameBrand: "trung nguyen",
    idDelete: false
};
*/
const createBrand = (data) => {
  return axios.post("/api/brand/addnew", data);
};

const deleteBrand = (idBrand) => {
  return axios.delete(`/api/brand/deletebrand/${idBrand}`);
};

const updateBrand = (idBrand, data) => {
  return axios.put(`/api/brand/editbrand/${idBrand}`, data);
};

export { getAllBrand, findByName, createBrand, deleteBrand, updateBrand , getAllBrandNotDetele , demo_time_2 };
