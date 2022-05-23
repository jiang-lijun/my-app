import $http from "./index";
export const login = data => $http.post('/login',data)