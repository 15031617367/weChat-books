/*
    微信ajax封装
*/
import {config} from "../config.js"

class HTTP{
    request(params){
        //url、data、method
        if(!params.method){
            params.method = "GET"
        }
        wx.request({
            url: config.api_base_url + params.url,
            method: params.method,
            data: params.data,
            header:{
                "content-type":"application/json",
                "appkey":config.appkey
            },
            success:(response)=>{
                let code = response.statusCode.toString();
                if(code.startsWith("2")){
                    if (params.success){
                        params.success(response.data)
                    }
                }else{
                    wx.showToast({
                        title: '错误' + code,
                        icon:"none",
                        duration:2000
                    })
                }
            },
            fail:(err)=>{
                let code = err.statusCode.toString();
                wx.showToast({
                    title: '错误'+code,
                    icon: "none",
                    duration: 2000
                })
            }
        })
    }
}

export {HTTP}