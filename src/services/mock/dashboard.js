import api from '../../utils/api';

const DashboardService = {
  getVolumnComunity: (communityId) =>
    new Promise((res) =>
      res({
        volumn: 2612,
        dataset: {
          labels: [
            '01/09',
            '02/09',
            '03/09',
            '04/09',
            '05/09',
            '06/09',
            '07/09',
          ],
          data: [40, 88, 60, 79, 70, 93, 8],
        },
      })
    ),

  getTreatmentDelay: (communityId) =>
    new Promise((res) =>
      res({
        averageTime: '1,3 j',
        percentageOnTime: 95.7,
        dataset: {
          labels: ['<1h', '<6h', '<12h', '<1j', '<2j', '<5j', '>5j'],
          data: [90, 88, 60, 79, 70, 93, 8],
        },
      })
    ),

  getErrorComunity: (communityId) =>
    new Promise((res) =>
      res({
        datasets: [
          [{ labels: ['1002'], data: [1, 0, 0] }],
          [{ labels: ['1003'], data: [1, 0, 0] }],
          [{ labels: ['1004'], data: [1, 0, 0] }],
          [{ labels: ['1012'], data: [10, 2, 4] }],
          [{ labels: ['1016'], data: [1, 0, 20] }],
          [{ labels: ['1100'], data: [12, 3, 5] }],
          [{ labels: ['1103'], data: [1, 0, 0] }],
          [{ labels: ['1104'], data: [1, 0, 0] }],
          [{ labels: ['1105'], data: [1, 0, 0] }],
          [{ labels: ['1112'], data: [1, 0, 0] }],
        ],
        percentageKO: 30,
      })
    ),

  getConsommation: () =>
    new Promise((res) =>
      res({
        pendingRequest: 365,
        datasets: {
          labels: ['Mois en cours', 'Restants', 'Consommé'],
          data: [33.33, 33.33, 33.33],
        },
      })
    ),

  getError: () =>
    new Promise((res) =>
      res({
        percentageKO: 30,
        datasets: [
          [{ labels: ['1002'], data: [1, 0, 0] }],
          [{ labels: ['1003'], data: [1, 0, 0] }],
          [{ labels: ['1004'], data: [1, 0, 0] }],
          [{ labels: ['1012'], data: [10, 0, 0] }],
          [{ labels: ['1016'], data: [1, 1, 20] }],
          [{ labels: ['1100'], data: [12, 3, 5] }],
          [{ labels: ['1103'], data: [1, 1, 2] }],
          [{ labels: ['1104'], data: [1, 0, 0] }],
          [{ labels: ['1105'], data: [1, 0, 0] }],
          [{ labels: ['1112'], data: [1, 0, 0] }],
        ],
      })
    ),
};

export default DashboardService;
