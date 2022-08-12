import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import cx from 'classnames';

import { RequestService } from '../../services/mock';
import ButtonOutline from '../../components/Buttons/ButtonOutline';
import TextInput from '../../components/Form/TextInput';
import Select from '../../components/Form/Select';
import Tag from '../../components/Tag';
import * as Icons from '../../components/Icons';

import '../../css/pagination.less';

export default function () {
  const [current, setCurrent] = useState(1);
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState('');
  const [state, setState] = useState('');
  const [status, setStatus] = useState('');
  const [community, setCommunity] = useState('');

  useEffect(() => {
    RequestService.getRequests({
      index: current,
      idCommunity: community,
      idState: state,
      idStatus: status,
    }).then(setRequests);
  }, [current, search, state, status, community]);

  const onChange = useCallback((page) => {
    setCurrent(page);
  });

  return (
    <>
      <div className="page-title flex justify-between mb-1">
        <h1 className="flex justify-between items-center">
          <Icons.IconDocument width="20" height="18" /> Demandes
        </h1>

        <ButtonOutline className="font-[10px] leading-[12px]">
          Télecharger le JSON
        </ButtonOutline>
      </div>

      <div className="page-content">
        <div className="flex gap-4">
          <TextInput
            type="text"
            className="h-[32px] text-[12px] grow bg-info-light border-light"
            placeholder="Rechercher"
            style={{
              backgroundImage: 'url(/src/images/ic_search.svg)',
              backgroundPosition: 'calc(100% - 12px) 50%',
              backgroundRepeat: 'no-repeat',
            }}
            onChange={(e) => setSearch(e.target.value)}
          ></TextInput>
          <Select
            className="text-[12px] h-[32px]"
            onChange={(e) => setState(e.target.value)}
          >
            <option>Statut de la demande</option>
            <option>Statut de la demande</option>
            <option>Statut de la demande</option>
          </Select>
          <Select
            className="text-[12px] h-[32px]"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Etat de la demande</option>
            <option>Etat de la demande</option>
            <option>Etat de la demande</option>
          </Select>
          <Select
            className="text-[12px] h-[32px]"
            onChange={(e) => setCommunity(e.target.value)}
          >
            <option>Communauté</option>
            <option>Communauté</option>
            <option>Communauté</option>
          </Select>
        </div>

        <div>
          <table className="table my-2">
            <thead>
              <tr>
                <th>Identifiant</th>
                <th>Adhesion</th>
                <th>Communauté</th>
                <th>Type</th>
                <th>Retour</th>
                <th>Etat</th>
                <th>Date de création</th>
                <th>Date de fin</th>
                <th>Durée</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests
                .slice((current - 1) * 10, current * 10)
                .map((item, no) => {
                  const isStatusOK = item.Status === 'OK';
                  return (
                    <tr key={`r_${no}`}>
                      <td width="54">{item.IdRequest}</td>
                      <td>187882</td>
                      <td className="flex" style={{ paddingTop: '15px' }}>
                        <Icons.IconUsers
                          height="13"
                          className="inline-block"
                          fill="#7982FF"
                        />
                        <span>Familles</span>
                      </td>
                      <td>{item.Type}</td>
                      <td></td>
                      <td>
                        <Tag
                          className={cx({
                            'bg-success-light': isStatusOK,
                            'bg-primary-light': !isStatusOK,
                          })}
                        >
                          {isStatusOK ? 'UploadFinished' : 'UploadFailed'}
                        </Tag>
                      </td>
                      <td width="120">{item.CreationDate}</td>
                      <td width="120">{item.EndDate}</td>
                      <td width="120">{item.Duration}</td>
                      <td className="text-right p-0">
                        <Link
                          className="btn btn-outline rounded text-[10px] leading-[12px]"
                          to={`/requests/${item.IdRequest}`}
                        >
                          Voir
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <Pagination
            pageSize="10"
            onChange={onChange}
            current={current}
            total={requests.length}
            prevIcon="Prev"
            nextIcon="Next"
            showTitle={false}
          />
        </div>
      </div>
    </>
  );
}
