const axios = require('axios')

const makeGetRequest = async () => {

        const reqObj = {
            method: 'get',
            url:'http://webcode.me',
            headers: {
                'User-Agent' : 'Axios app'
            }
        }

    let res = await axios(reqObj)
    let data = res.data

    console.log('---------- >>>> ', res);
}

makeGetRequest();