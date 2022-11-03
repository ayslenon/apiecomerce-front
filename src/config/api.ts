import axios from "axios";
export const api = axios.create({
	baseURL: "http://ayslenon.pythonanywhere.com/api/",
	timeout: 5000,
});
