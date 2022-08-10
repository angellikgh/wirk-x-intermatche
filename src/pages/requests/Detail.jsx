import React, { useEffect, useState } from 'react';

import Breadcrumb from '../../components/Breadcrumb';
import ButtonOutline from '../../components/Buttons/ButtonOutline';
import * as Icons from '../../components/Icons';
import TaskList from './components/TaskItem';
import DetailProof from './DetailProof';

const SummaryItem = ({ title, content }) => (
  <div className="mb-2.5">
    <div className="text-muted text-xs leading-[14px] ">{title}</div>
    <div className="leading-4 text-xs">{content}</div>
  </div>
);

export default function () {
  const [children, setChildren] = useState([]);
  const [summary, seSummary] = useState({});
  const [contribution, setContribution] = useState({});
  const [finalAnsers, setFinalAnswers] = useState([]);
  const [proofs, setProofs] = useState([]);
  const [stateLogs, setStateLogs] = useState([]);

  useEffect(() => {
    setChildren([
      {
        id: 12,
        name: 'Child #1',
        birthday: '8/9/2002',
      },
      {
        id: 13,
        name: 'Child #2',
        birthday: '8/9/2008',
      },
      {
        id: 21,
        name: 'Child #3',
        birthday: '8/9/2011',
      },
    ]);

    seSummary({
      client: 'Pierre Dupont',
      birthday: '22/01/1980',
      community: 'Famille',
      type: 'INSC',
      createdAt: '28/06/2022 07:21:43',
      membership: 187882,
    });

    setContribution({
      taskId: 367722,
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

    setProofs([
      {
        id: 2787,
        reference: 456,
        filename: 'WIRK_A_RECETTE_187879_attestation-hebergement-scan.pdf',
        filepath:
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        id: 2799,
        reference: 1680,
        filename: 'WIRK_A_RECETTE_187879_attestation-hebergement-scan.pdf',
        filepath:
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        id: 2808,
        reference: 1987,
        filename: 'WIRK_A_RECETTE_187879_attestation-hebergement-scan.pdf',
        filepath:
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
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
      <Breadcrumb pathnames={['Demandes', '#315']} />

      <div className="page-title flex justify-between mb-1">
        <h1 className="flex justify-between items-center">
          <Icons.IconDocument width="20" height="18" /> Demande #315
        </h1>

        <ButtonOutline className="font-[10px] leading-[12px]">
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
            <div className="card-body grid grid-cols-2 grid-rows-3">
              <SummaryItem title="Client" content={summary.client} />
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
            <div className="card-body pt-0">
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
          <div className="flex mt-4 gap-1">
            <Icons.IconFile />
            <span className="leading-[17px]">Documents justificatifs</span>
          </div>

          <div className="grid grid-cols-2 gap-x-2.5">
            <div className="flex flex-col gap-y-2.5">
              <div className="flex text-sm w-full">
                <span>Contribution Wirk</span>
                <span className="text-muted ml-2">
                  Task #{contribution.taskId}
                </span>
                <button className="text-xs leading-3 px-2 border-primary-light flex hover:text-primary ml-auto gap-1">
                  <Icons.IconCloudDownload />
                  Télecharger le JSON
                </button>
              </div>

              <TaskList list={contribution.tasks} />

              <div className="card mt-2.5 border bg-white">
                <div className="flex text-sm">
                  <span>Réponse finale</span>
                  <button className="bg-danger-light p-1 bg-danger-light">
                    Refusé
                  </button>

                  <button className="text-xs leading-3 px-2 border-primary-light flex hover:text-primary ml-auto gap-1">
                    <Icons.IconCloudDownload />
                    Télecharger le JSON
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

            <DetailProof proofs={proofs} />
          </div>
        </div>

        <div>
          <div className="flex gap-1 text-[14px] leading-4 pl-2">
            <Icons.IconTimeCountDown width="16" height="16" /> Journalisation de
            l’état
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
      </div>
    </>
  );
}
