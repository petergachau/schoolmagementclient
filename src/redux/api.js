import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const deleteUser = (id) => API.delete(`/stats/${id}`);
export const createAdmission = (formData) => API.post("/admission", formData);

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const getMiles = () => API.get("/milestone");
export const createComplain = (formData) => API.post("/complain", formData);
export const createVacation = (formData) => API.post("/booksin", formData);
export const deleteMilestone = (id) => API.delete(`/milestone/${id}`);
export const deleteVacation = (id) => API.delete(`/vacation/${id}`);
export const deleteComplain = (id) => API.delete(`/complain/${id}`);
export const createBorrow = (formData) => API.post("/borrowbook", formData);

export const createMessage = (formData) => API.post("/examreg", formData);
export const createBoarding = (formData) => API.post("/boarding", formData);
export const createIssues = (formData) => API.post("/issues", formData);
export const createMedical = (formData) => API.post("/medical", formData);
export const createSupplies = (formData) => API.post("/supplies", formData);

export const createcaretakernotice = (formData) => API.post("/staff", formData);
// export const getTenants = () => API.get("/tenant");
// export const getTenant = (id) => API.get(`/tenant/${id}`);
// export const deleteTenant = (id) => API.delete(`/tenant/${id}`);
// export const getTenantByUser = (userId) => API.get(`/tenant/userProjects/${userId}`);

export const createCaretakerExpense = (formData) => API.post("/financeclinic", formData);


export const createCaretakerVacation = (formData) => API.post("/boadingfinanace", formData);
// export const getTenants = () => API.get("/tenant");
// export const getTenant = (id) => API.get(`/tenant/${id}`);
// export const deleteTenant = (id) => API.delete(`/tenant/${id}`);
// export const getTenantByUser = (userId) => API.get(`/tenant/userProjects/${userId}`);


export const createsummary = (formData) => API.post("/tokens", formData);
export const deleteSummary = (id) => API.delete(`/summary/${id}`);


export const createTenant = (formData) => API.post("/tenant", formData);
export const getTenants = () => API.get("/tenant");
export const getTenant = (id) => API.get(`/tenant/${id}`);
export const deleteTenant = (id) => API.delete(`/tenant/${id}`);
export const getTenantByUser = (userId) => API.get(`/tenant/userProjects/${userId}`);

//users
export const getUsers=()=>API.get('/usercrud/allusers')
export const deleteUsers = (id) => API.delete(`/usercrud/delete/${id}`);



export const createnotice = (formData) => API.post("/booksin", formData);
export const getnotices = () => API.get("/notice");
export const getnotice = (id) => API.get(`/notice/${id}`);
export const deletenotice = (id) => API.delete(`/notice/${id}`);
export const getNoticeByUser = (userId) => API.get(`/notice/userProjects/${userId}`);

export const createTour = (formData) => API.post("/project", formData);
export const getTours = () => API.get("/project");
export const getTour = (id) => API.get(`/project/${id}`);
export const deleteTour = (id) => API.delete(`/project/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/project/${id}`, updatedTourData);
  export const getProjectsByUser = (userId) => API.get(`/project/userProjects/${userId}`);
  export const getMilesByUser = (userId) => API.get(`/milestone/miles/${userId}`);
  export const createMile = (updateddata) => API.post("/milestone", updateddata);

export const getToursBySearch = (searchQuery) =>
  API.get(`/project/search?searchQuery=${searchQuery}`);

export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);
export const getRelatedTours = (tags) => API.post(`/tour/relatedTours`, tags);
export const likeTour = (id) => API.patch(`/tour/like/${id}`);
export const  createCareTaker = (formData) => API.get('/caretaker' ,formData);
export const getCaretaker = () => API.post('/caretaker');
export const getCaretakerByUser = (userId) => API.patch('/caretaker');