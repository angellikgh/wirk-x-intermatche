const RequestService = {
  getRequests: (query) =>
    new Promise((res) => {
      const requests = Array(100).fill({
        IdRequest: 1234,
        Type: 'INSC',
        Status: 'OK',
        State: 'WatermarkNotification',
        CreationDate: '28/06/2022',
        EndDate: '30/06/2022',
        Duration: '3mn04sec',
      });

      res(requests);
    }),

  getRequestDetail: (id) =>
    new Promise((res) =>
      res({
        UidRequest: 310,
        State: 100,
        CreationDate: '2022-06-27T16:56:06.1733333',
        UpdateDate: '2022-06-27T16:56:06.1733333',
        EndDate: '2022-07-13T10:40:45.9933333',
        IdAdhesion: 67,
        DateTimeDepot: '2022-06-14T11:59:08.0522373',
        DateTimeRetour: null,
        Duration: '15.17:44:39.8200000',
        Communaute: 'BUDG',
        Type: 'INSC',
        ClientNom: 'Dupont',
        ClientPrenom: 'Paul',
        ClientDateDeNaissance: '1981-01-23T00:00:00',
        InputJson:
          '{"json":{"IdAdhesion":187878,"DateTimeDepot":"2022-06-14T11:59:08.0522373+02:00","DateTimeRetour":"2022-06-14T13:11:08.0572368+02:00","Communaute":"BUDG","Type":"INSC","Justificatifs":[{"IdDocument":456,"Nom":"WIRK_A_RECETTE_187878-cni.pdf"},{"IdDocument":789,"Nom":"WIRK_A_RECETTE_187878-caf.pdf"}],"Client":{"IdClient":123,"Nom":"Dupont","Prenom":"Paul","DateDeNaissance":"1981-01-23"}},"pairedItem":{"item":0},"binary":{"310":{"mimeType":"application/json","data":"eyANCiAgICJJZEFkaGVzaW9uIjoxODc4NzgsIA0KICAgIkRhdGVUaW1lRGVwb3QiOiIyMDIyLTA2LTE0VDExOjU5OjA4LjA1MjIzNzMrMDI6MDAiLCANCiAgICJEYXRlVGltZVJldG91ciI6IjIwMjItMDYtMTRUMTM6MTE6MDguMDU3MjM2OCswMjowMCIsIA0KICAgIkNvbW11bmF1dGUiOiJCVURHIiwgDQogICAiVHlwZSI6IklOU0MiLCANCiAgICJKdXN0aWZpY2F0aWZzIjpbIA0KICAgICAgeyANCiAgICAgICAgICJJZERvY3VtZW50Ijo0NTYsIA0KICAgICAgICAgIk5vbSI6IldJUktfQV9SRUNFVFRFXzE4Nzg3OC1jbmkucGRmIiANCiAgICAgIH0sIA0KICAgICAgeyANCiAgICAgICAgICJJZERvY3VtZW50Ijo3ODksIA0KICAgICAgICAgIk5vbSI6IldJUktfQV9SRUNFVFRFXzE4Nzg3OC1jYWYucGRmIiANCiAgICAgIH0gDQogICBdLCANCiAgICJDbGllbnQiOnsgDQogICAgICAiSWRDbGllbnQiOiAxMjMsIA0KICAgICAgIk5vbSI6IkR1cG9udCIsIA0KICAgICAgIlByZW5vbSI6IlBhdWwiLCANCiAgICAgICJEYXRlRGVOYWlzc2FuY2UiOiIxOTgxLTAxLTIzIiANCiAgIH0NCn0NCg0K","fileName":"c3f2ccea-2ca1-7b57-639c-a319f6127b72.json","fileExtension":"json"}}}',
        IdApiMergePdf: 87,
        UrlApiMergePdf:
          'https://ltmstoragedev1024.blob.core.windows.net/merge-pdf/02bcb481-8678-4617-9c3e-f5114bb16288.pdf?sv=2021-06-08&st=2022-06-27T16%3A54%3A57Z&se=2022-06-28T17%3A04%3A57Z&sr=b&sp=r&sig=rAbIsw5E2XhBzfm6iGkrC6X5RM0eJ8afbPLmtW7e2kw%3D',
        IdApiOcr: 1164,
        UrlApiOcr:
          'https://ltmstoragepreprod1023.blob.core.windows.net/data/8a684393-5a5e-44b9-ad40-f4c7894bf4bb.pdf?sv=2020-04-08&se=2022-07-27T17%3A00%3A57Z&sr=b&sp=r&sig=f7ug9LdKi7qL9%2FDI1U2RD30syCb%2FX6kSw0wamSR5AzM%3D',
        IdApiWatermark: 13105,
        UrlApiWatermark:
          'https://ltmstoragepreprod1023.blob.core.windows.net/pdf-watermark/4d3f71e5-0d24-4cef-b073-a1dc5af1e950.pdf?sv=2020-04-08&se=2022-07-27T17%3A01%3A44Z&sr=b&sp=r&sig=JX3DrONug2RbgGnRUNfjqi59XKt8PLXuY5QIy9WOGd0%3D',
        IdFouleFactoryTaskLine: 367719,
        FouleFactoryJson:
          '{\r\n  "fields": [],\r\n  "blocks": [\r\n    {\r\n      "id": "groupe_5_4",\r\n      "rows": [\r\n        {\r\n          "fields": [],\r\n          "blocks": [\r\n            {\r\n              "id": "verification_piece_didentite_0",\r\n              "rows": [\r\n                {\r\n                  "fields": [\r\n                    {\r\n                      "type": "mcq",\r\n                      "id": "estelle_suffisamment_lisible__5",\r\n                      "value": "Oui"\r\n                    }\r\n                  ],\r\n                  "blocks": [\r\n                    {\r\n                      "id": "groupe_3_2",\r\n                      "rows": [\r\n                        {\r\n                          "fields": [\r\n                            {\r\n                              "type": "select",\r\n                              "id": "nature_du_titre_3",\r\n                              "value": "CNI Française"\r\n                            },\r\n                            {\r\n                              "type": "select",\r\n                              "id": "pensez_vous_que_cest_un_faux_document__4",\r\n                              "value": "C\'est un vrai"\r\n                            },\r\n                            {\r\n                              "type": "mcq",\r\n                              "id": "les_nomprenom_indiques_sur_le_justificatif_didentite_correspondil_a_cette_personne_14",\r\n                              "value": "Oui"\r\n                            }\r\n                          ],\r\n                          "blocks": [],\r\n                          "data": []\r\n                        }\r\n                      ]\r\n                    }\r\n                  ],\r\n                  "data": []\r\n                }\r\n              ]\r\n            },\r\n            {\r\n              "id": "verification_attestation_de_revenus_1",\r\n              "rows": [\r\n                {\r\n                  "fields": [\r\n                    {\r\n                      "type": "mcq",\r\n                      "id": "estil_suffisamment_lisible__6",\r\n                      "value": "Oui"\r\n                    }\r\n                  ],\r\n                  "blocks": [\r\n                    {\r\n                      "id": "groupe_4_3",\r\n                      "rows": [\r\n                        {\r\n                          "fields": [\r\n                            {\r\n                              "type": "select",\r\n                              "id": "nature_du_document_8",\r\n                              "value": "Justificatif CAF"\r\n                            },\r\n                            {\r\n                              "type": "datetime",\r\n                              "id": "date_du_docmument_9",\r\n                              "value": "2022-06-01"\r\n                            },\r\n                            {\r\n                              "type": "select",\r\n                              "id": "pensez_vous_que_cest_un_faux_document__7",\r\n                              "value": "C\'est un vrai"\r\n                            },\r\n                            {\r\n                              "type": "mcq",\r\n                              "id": "le_quotient_familial_estil_mentionne__11",\r\n                              "value": "Oui"\r\n                            },\r\n                            {\r\n                              "type": "number",\r\n                              "id": "montant_quotien_familial_10",\r\n                              "value": "500"\r\n                            },\r\n                            {\r\n                              "type": "mcq",\r\n                              "id": "le_justificatif_estil_au_nom_de_cette_personne_12",\r\n                              "value": "Oui"\r\n                            }\r\n                          ],\r\n                          "blocks": [],\r\n                          "data": []\r\n                        }\r\n                      ]\r\n                    }\r\n                  ],\r\n                  "data": []\r\n                }\r\n              ]\r\n            }\r\n          ],\r\n          "data": []\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  "data": []\r\n}',
        AnswerJson: '{"IdAdhesion":67,"Statut":"OK"}',
        Status: 10,
        Answers: [],
        documents: [
          {
            UidDocument: 263,
            InputName: 'WIRK_A_RECETTE_187880-caf.pdf',
            Name: '924580bf-a195-b86f-70e3-1086bcb57edb.pdf',
            Path: 'Requests/187880/924580bf-a195-b86f-70e3-1086bcb57edb.pdf',
            IdJustificatif: null,
            IsMetadata: false,
            SignedUrl:
              'https://ltmstoragepreprod1044.s3.eu-west-3.amazonaws.com/Requests/187880/924580bf-a195-b86f-70e3-1086bcb57edb.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZQUNYUDVVGM2ATXO%2F20220627%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220627T165606Z&X-Amz-Expires=86400&X-Amz-Signature=9d016074e6fccc6c8f3627b53dd064abe3dfde126763897dba236ef0153ce0a1&X-Amz-SignedHeaders=host',
          },
          {
            UidDocument: 264,
            InputName: 'WIRK_A_RECETTE_187880-cni.pdf',
            Name: 'b580fef3-4724-b49c-f248-e801448e35e3.pdf',
            Path: 'Requests/187880/b580fef3-4724-b49c-f248-e801448e35e3.pdf',
            IdJustificatif: null,
            IsMetadata: false,
            SignedUrl:
              'https://ltmstoragepreprod1044.s3.eu-west-3.amazonaws.com/Requests/187880/b580fef3-4724-b49c-f248-e801448e35e3.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZQUNYUDVVGM2ATXO%2F20220627%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220627T165606Z&X-Amz-Expires=86400&X-Amz-Signature=7f63a1168eb2c2b5de2d68c3da58fd17e0ea77a670a8bfc5ee7f5beceb14c025&X-Amz-SignedHeaders=host',
          },
          {
            UidDocument: 265,
            InputName: 'WIRK_A_RECETTE_187880_metadata.json',
            Name: 'c3f2ccea-2ca1-7b57-639c-a319f6127b72.json',
            Path: 'Requests/187880/c3f2ccea-2ca1-7b57-639c-a319f6127b72.json',
            IdJustificatif: null,
            IsMetadata: true,
            SignedUrl: null,
          },
        ],
        Enfants: [],
        RequestStates: [
          {
            IdLogRequestState: 838,
            State: 19,
            CreationDate: '2022-06-27T16:56:06.1733333',
          },
          {
            IdLogRequestState: 839,
            State: 20,
            CreationDate: '2022-06-27T16:56:06.3366667',
          },
          {
            IdLogRequestState: 840,
            State: 29,
            CreationDate: '2022-06-27T16:56:06.5433333',
          },
          {
            IdLogRequestState: 841,
            State: 30,
            CreationDate: '2022-06-27T16:56:06.6333333',
          },
          {
            IdLogRequestState: 842,
            State: 39,
            CreationDate: '2022-06-27T16:56:06.7133333',
          },
          {
            IdLogRequestState: 843,
            State: 39,
            CreationDate: '2022-06-27T16:56:06.75',
          },
          {
            IdLogRequestState: 844,
            State: 40,
            CreationDate: '2022-06-27T16:56:06.8166667',
          },
          {
            IdLogRequestState: 845,
            State: 41,
            CreationDate: '2022-06-27T16:56:07.2366667',
          },
          {
            IdLogRequestState: 846,
            State: 49,
            CreationDate: '2022-06-27T16:59:57.4333333',
          },
          {
            IdLogRequestState: 847,
            State: 50,
            CreationDate: '2022-06-27T16:59:57.49',
          },
          {
            IdLogRequestState: 848,
            State: 51,
            CreationDate: '2022-06-27T17:00:00.89',
          },
          {
            IdLogRequestState: 850,
            State: 59,
            CreationDate: '2022-06-27T17:01:32.1866667',
          },
          {
            IdLogRequestState: 851,
            State: 60,
            CreationDate: '2022-06-27T17:01:32.2466667',
          },
          {
            IdLogRequestState: 852,
            State: 61,
            CreationDate: '2022-06-27T17:01:32.56',
          },
          {
            IdLogRequestState: 853,
            State: 69,
            CreationDate: '2022-06-27T17:02:32.46',
          },
          {
            IdLogRequestState: 854,
            State: 70,
            CreationDate: '2022-06-27T17:02:32.5166667',
          },
          {
            IdLogRequestState: 855,
            State: 71,
            CreationDate: '2022-06-27T17:02:37.6166667',
          },
          {
            IdLogRequestState: 856,
            State: 79,
            CreationDate: '2022-06-27T17:06:01.13',
          },
          {
            IdLogRequestState: 857,
            State: 80,
            CreationDate: '2022-06-27T17:06:01.19',
          },
          {
            IdLogRequestState: 884,
            State: 89,
            CreationDate: '2022-06-28T07:09:02.16',
          },
          {
            IdLogRequestState: 931,
            State: 90,
            CreationDate: '2022-06-30T14:43:01.46',
          },
          {
            IdLogRequestState: 934,
            State: 89,
            CreationDate: '2022-06-30T14:43:19.25',
          },
          {
            IdLogRequestState: 942,
            State: 90,
            CreationDate: '2022-07-01T08:53:41.2033333',
          },
          {
            IdLogRequestState: 956,
            State: 90,
            CreationDate: '2022-07-07T14:00:01.46',
          },
          {
            IdLogRequestState: 958,
            State: 100,
            CreationDate: '2022-07-07T14:00:15.1166667',
          },
          {
            IdLogRequestState: 980,
            State: 100,
            CreationDate: '2022-07-07T14:04:10.44',
          },
          {
            IdLogRequestState: 985,
            State: 100,
            CreationDate: '2022-07-07T14:04:15.9033333',
          },
          {
            IdLogRequestState: 990,
            State: 90,
            CreationDate: '2022-07-07T14:04:22.4566667',
          },
          {
            IdLogRequestState: 995,
            State: 90,
            CreationDate: '2022-07-12T12:59:50.9766667',
          },
          {
            IdLogRequestState: 996,
            State: 90,
            CreationDate: '2022-07-12T13:01:11.3133333',
          },
          {
            IdLogRequestState: 997,
            State: 90,
            CreationDate: '2022-07-12T13:02:24.6833333',
          },
          {
            IdLogRequestState: 999,
            State: 90,
            CreationDate: '2022-07-13T06:50:16.68',
          },
          {
            IdLogRequestState: 1003,
            State: 90,
            CreationDate: '2022-07-13T06:52:08.35',
          },
          {
            IdLogRequestState: 1004,
            State: 90,
            CreationDate: '2022-07-13T07:04:48.9533333',
          },
          {
            IdLogRequestState: 1005,
            State: 90,
            CreationDate: '2022-07-13T07:05:52.2466667',
          },
          {
            IdLogRequestState: 1006,
            State: 100,
            CreationDate: '2022-07-13T07:05:52.6533333',
          },
          {
            IdLogRequestState: 1007,
            State: 90,
            CreationDate: '2022-07-13T07:21:35.8566667',
          },
          {
            IdLogRequestState: 1008,
            State: 90,
            CreationDate: '2022-07-13T07:21:42.2066667',
          },
          {
            IdLogRequestState: 1009,
            State: 100,
            CreationDate: '2022-07-13T07:21:42.5366667',
          },
          {
            IdLogRequestState: 1010,
            State: 90,
            CreationDate: '2022-07-13T07:52:14.24',
          },
          {
            IdLogRequestState: 1011,
            State: 90,
            CreationDate: '2022-07-13T07:52:29.3',
          },
          {
            IdLogRequestState: 1012,
            State: 90,
            CreationDate: '2022-07-13T07:52:36.21',
          },
          {
            IdLogRequestState: 1013,
            State: 90,
            CreationDate: '2022-07-13T07:53:43.65',
          },
          {
            IdLogRequestState: 1014,
            State: 100,
            CreationDate: '2022-07-13T08:38:36.0566667',
          },
          {
            IdLogRequestState: 1015,
            State: 100,
            CreationDate: '2022-07-13T08:39:50.5333333',
          },
          {
            IdLogRequestState: 1016,
            State: 90,
            CreationDate: '2022-07-13T08:39:55.7266667',
          },
          {
            IdLogRequestState: 1017,
            State: 100,
            CreationDate: '2022-07-13T08:40:09.55',
          },
          {
            IdLogRequestState: 1018,
            State: 100,
            CreationDate: '2022-07-13T08:40:34.8133333',
          },
          {
            IdLogRequestState: 1019,
            State: 90,
            CreationDate: '2022-07-13T08:40:39.76',
          },
          {
            IdLogRequestState: 1020,
            State: 100,
            CreationDate: '2022-07-13T08:40:45.99',
          },
        ],
      })
    ),
};

export default RequestService;
