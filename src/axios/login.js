/*
 * @Author: 前端劝退师-李逍遥
 * @Date: 2020-08-18 11:00:25
 * @LastEditors: 前端劝退师-李逍遥
 * @LastEditTime: 2020-08-18 11:01:38
 * @FilePath: \react-admin\src\axios\login.js
 */
import request from '../utils/request'

export async function login(params){
    let res = await request ({
        method:'post',
        url: "api/admin/Login",
        data:params
    })
    return res
}