import React, { useEffect, useState } from 'react';

import Breadcrumb from '../../components/Breadcrumb';
import ButtonOutline from '../../components/Buttons/ButtonOutline';
import * as Icons from '../../components/Icons';
import { useAuthState } from '../../providers/authProvider';
import { RequestService } from '../../services/mock';
import TaskList from './components/TaskItem';
import DetailProof from './DetailProof';

const SummaryItem = ({ title, content }) => (
  <div className="mb-2.5">
    <div className="text-muted text-xs leading-[14px] ">{title}</div>
    <div className="leading-4 text-xs">{content}</div>
  </div>
);

export default function () {
  const { me } = useAuthState();
  const [children, setChildren] = useState([]);
  const [summary, setSummary] = useState({});
  const [contribution, setContribution] = useState({});
  const [finalAnsers, setFinalAnswers] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [stateLogs, setStateLogs] = useState([]);

  useEffect(() => {
    RequestService.getRequestDetail().then((payload) => {
      setDocuments(payload.documents);
      setSummary({
        uid: payload.UidRequest,
        clientName: payload.ClientNom,
        birthday: payload.ClientDateDeNaissance,
        community: payload.Communaute,
        type: payload.Type,
        createdAt: payload.CreationDate,
        membership: payload.IdAdhesion,
      });
      setChildren(payload.Enfants);
      setContribution({
        taskId: payload.IdFouleFactoryTaskLine,
        tasks: [
          {
            title: 'Le document est il suffisament lisible ?',
            isTrue: true,
          },
          {
            title: 'Pensez-vous que c’est un faux document ?',
            isTrue: false,
          },
          {
            title: 'La date de naissance correspond elle ?',
            isTrue: true,
          },
        ],
      });
    });

    setFinalAnswers([
      {
        id: 1,
        errorCode: 1100,
        pattern: 'Inconnu Tessa',
        child:
          'Le nom et/ou le prénom sur Le livret de famille ou l’acte/extrait de naissance ne correspondent pas aux données saisies',
      },
      {
        id: 1,
        errorCode: 1100,
        pattern: 'Inconnu Tessa',
        child:
          'Le nom et/ou le prénom sur Le livret de famille ou l’acte/extrait de naissance ne correspondent pas aux données saisies',
      },
      {
        id: 1,
        errorCode: 1100,
        pattern: 'Inconnu Tessa',
        child:
          'Le nom et/ou le prénom sur Le livret de famille ou l’acte/extrait de naissance ne correspondent pas aux données saisies',
      },
    ]);

    setStateLogs([
      {
        id: 890,
        createdAt: '28/06/2022 07:21:43',
        status: 'UploadFinished',
      },
      {
        id: 890,
        createdAt: '28/06/2022 07:21:43',
        status: 'UploadFinished',
      },
      {
        id: 890,
        createdAt: '28/06/2022 07:21:43',
        status: 'UploadFinished',
      },
      {
        id: 890,
        createdAt: '28/06/2022 07:21:43',
        status: 'UploadFinished',
      },
      {
        id: 890,
        createdAt: '28/06/2022 07:21:43',
        status: 'UploadFinished',
      },
    ]);
  }, []);

  return (
    <>
      <Breadcrumb pathnames={['Demandes', `#${summary.uid}`]} />

      <div className="page-title flex mb-1 gap-3">
        <h1 className="flex justify-between items-center">
          <Icons.IconDocument width="20" height="18" /> Demande #{summary.uid}
        </h1>

        <button className="bg-success-light px-2 text-sm text-success p-1 rounded">
          Terminée
        </button>

        <button className="bg-danger-light px-2 text-sm text-danger p-1 rounded">
          Refusé
        </button>

        <ButtonOutline className="font-[10px] leading-[12px] ml-auto">
          Télecharger le JSON
        </ButtonOutline>
      </div>

      <div className="page-content flex flex-col gap-y-2.5">
        <div className="grid grid-cols-2 gap-4">
          <div className="card">
            <div className="card-title flex">
              <Icons.IconMale width="17" height="17" className="mr-1" />
              Informations
            </div>
            <div className="grid grid-cols-2 grid-rows-3">
              <SummaryItem title="Client" content={summary.clientName} />
              <SummaryItem
                title="Date de naissance"
                content={summary.birthday}
              />
              <SummaryItem title="Communauté" content={summary.community} />
              <SummaryItem title="Type" content={summary.type} />
              <SummaryItem title="Adhesion" content={summary.membership} />
              <SummaryItem
                title="Date de création"
                content={summary.createdAt}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-title flex gap-1">
              <Icons.IconUsers width="19" height="16" />
              Enfants
              <span className="text-muted text-xxs leading-4">
                {children.length}
              </span>
            </div>
            <div className="pt-0">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Date de naissance</th>
                  </tr>
                </thead>
                <tbody>
                  {children.map((child, i) => (
                    <tr key={`tr_${i}`}>
                      <td>{++i}</td>
                      <td>{child.id}</td>
                      <td>{child.name}</td>
                      <td>{child.birthday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2.5">
          <div className="grid grid-cols-2 gap-x-2.5 mt-4">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex text-sm w-full">
                <span className="font-semibold">Contribution Wirk</span>
                <span className="text-muted ml-2 font-medium">
                  Task #{contribution.taskId}
                </span>
                <button className="text-xxs leading-3 px-2 border-primary-light flex hover:text-primary ml-auto gap-1">
                  <Icons.IconCloudDownload />
                  <span className="font-semibold">Télecharger le JSON</span>
                </button>
              </div>

              <TaskList list={contribution.tasks} />

              <div className="card mt-2.5 border bg-white">
                <div className="flex text-sm gap-1 items-center">
                  <span className="font-semibold">Réponse finale</span>
                  <button className="bg-danger-light text-danger p-1 rounded">
                    Refusé
                  </button>

                  <button className="text-xxs leading-3 px-2 border-primary-light flex hover:text-primary ml-auto gap-1">
                    <Icons.IconCloudDownload />
                    <span className="font-semibold">Télecharger le JSON</span>
                  </button>
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Code erreur</th>
                      <th>Motif</th>
                      <th>Enfant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finalAnsers.map((item, i) => (
                      <tr key={`fa#${i}`}>
                        <td>{item.id}</td>
                        <td>{item.errorCode}</td>
                        <td>{item.pattern}</td>
                        <td>{item.child}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <DetailProof documents={documents} />
          </div>
        </div>

        {me.role === 10 && (
          <div>
            <div className="flex gap-1 text-[14px] leading-4 pl-2">
              <Icons.IconTimeCountDown width="16" height="16" /> Journalisation
              de l’état
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th width="80">Identifiant</th>
                    <th>Code erreur</th>
                    <th>Motif</th>
                  </tr>
                </thead>
                <tbody>
                  {stateLogs.map((item, i) => (
                    <tr key={`sl#${i}`}>
                      <td>{item.id}</td>
                      <td>{item.createdAt}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
