/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-08-18 10:58:19
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-08-18 15:22:55
 * @FilePath: \react-admin\src\utils\request.js
 */
import axios from 'axios'


const request = axios.create({
    baseURL: "", // url 
    timeout: 15000 // request timeout
  })


  
export default request