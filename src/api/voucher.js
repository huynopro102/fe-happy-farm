import axios from "../../axios";

const demoVoucher = () => {
  return axios.get("/api/voucher/getlistvouchernotdelete")
}

const getlistvouchernotdelete = () => {
  return axios.get("/api/voucher/getlistvouchernotdelete")
}

const addNewVoucher =  (data) =>{
  return axios.post("/api/voucher/addnew",data)
}

const deleteVoucher = (id) =>{
  return axios.delete(`/api/voucher/delete/${id}`)
}

const UpdateVoucher = (data) =>{
  return axios.put("/api/voucher/editvoucher",data)
}

const apiCheckCode = (code) => {
  return axios({
    url: `/api/voucher/checkvalid?code=${code}`,
    method: "get",
  });
};

const apiGetBanner = () => {
  return axios({
    url: `/api/banner/getall`,
    method: "get",
  });
};

export { 
  apiCheckCode , 
  apiGetBanner ,
  getlistvouchernotdelete ,
  addNewVoucher ,
  deleteVoucher , 
  UpdateVoucher ,
  demoVoucher
};
