import axios from 'axios';

const { apiHost = '' } = window.SyncYouConfig || {};
const wootAPI = axios.create({ baseURL: `${apiHost}/` });

export default wootAPI;
