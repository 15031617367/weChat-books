import {HTTP} from "../util/http.js"


class ClassicModel extends HTTP{
    getLatest(sCallback){
        this.request({
            url: "classic/latest",
            success: (response) => {
                // console.log(response);
                sCallback(response)
            }
        })
    }
}

export { ClassicModel}