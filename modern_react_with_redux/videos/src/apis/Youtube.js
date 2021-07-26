import axios from 'axios';

const KEY = 'AIzaSyBq7ncjZ-lBiXMyDscl_h3cHNnBNeou8Rc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

