import api from '../utils/api';

const DashboardService = {
  getVolumnComunity: (communityId) =>
    api.get(`/Dashboard/GetErrorComunity`, {
      idCommunity: communityId,
    }),

  getTreatmentDelay: (communityId) =>
    api.get(`/Dashboard/GetTreatmentDelayComunity`, {
      idCommunity: communityId,
    }),

  getErrorComunity: (communityId) =>
    api.get(`/Dashboard/GetErrorComunity`, {
      idCommunity: communityId,
    }),

  getConsommation: () => api.get('/Dashboard/GetConsommation'),

  getError: () => api.get('/Dashboard/GetError'),
};

export default DashboardService;
