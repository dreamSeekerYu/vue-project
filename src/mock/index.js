import Mock from "mockjs";
import login from "./login.js";
const responseData = {
  login
};
Mock.setup({
  timeout: 300
});
// Mock.mock( url, post/get , 返回的数据)
Mock.mock("/api/login", /get|post/i, responseData.login.success);
// Mock.mock("/api/login", /get|post/i, responseData.login.failed);
