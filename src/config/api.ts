import axios from "axios";
export const api = axios.create({
	//baseURL: "http://ayslenon.pythonanywhere.com/api/",
	baseURL: "http://localhost:8000/api/",
	timeout: 5000,
});

api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
