import axios from 'axios'

function history(callback) {
    let uid = sessionStorage.getItem('bmr-uid')
    if (!uid) {
        return
    }
    axios.get('/api/reco/history?custId=' + uid).then(res => {
        let resp = res.data
        console.log(resp)
        if (resp.code != 0) {
            alert("请求失败：" + resp.message)
        } else {
            callback(resp.data)
        }
    }).catch(err => {    
        console.log(err);
        alert("请求异常：" + err)
    })
}

function predict(callback) {
    let uid = sessionStorage.getItem('bmr-uid')
    if (!uid) {
        return
    }
    axios.get('/api/reco/predict?custId=' + uid).then(res => {
        let resp = res.data
        console.log(resp)
        if (resp.code != 0) {
            alert("请求失败：" + resp.message)
        } else {
            callback(resp.data)
        }
    }).catch(err => {    
        console.log(err);
        alert("请求异常" + err)
    })
}

export default {
    history: history,
    predict: predict
}