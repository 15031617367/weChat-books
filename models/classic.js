import {HTTP} from "../util/http.js"


class ClassicModel extends HTTP{
    getLatestc(sCallback){
        this.request({
            url: "classic/latest",
            success: (response) => {
                console.log(response);
                sCallback(response)
            }
        })
    }
}