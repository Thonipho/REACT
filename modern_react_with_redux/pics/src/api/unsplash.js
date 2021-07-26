import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID EO9b_K1FSMcJLG460QHVmW9vuI2ZAt3x-ujT5_COgWU'
    }
});

