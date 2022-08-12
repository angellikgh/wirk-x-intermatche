import api from '../utils/api';

const RequestService = {
  getRequests: (query) => {
    const queryData = {
      search: '',
      idCommunity: '',
      idState: '',
      idStatus: '',
      index: 0,
      entryPerPage: 20,
      ...query,
    };

    return api.get(`/Request/GetRequest`, queryData);
  },

  getRequestDetail: (id) =>
    api.get('/Request/Detail', {
      idRequest: id,
    }),
};

export default RequestService;
