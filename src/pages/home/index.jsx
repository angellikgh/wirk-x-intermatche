import React from 'react';

import ButtonOutline from '../../components/Buttons/ButtonOutline';
import * as Icons from '../../components/Icons';
import FamilyVolumn from './partials/FamilyVolumn';
import FamilyTreatmentDelay from './partials/FamilyTreatmentDelay';
import FamilyError from './partials/FamilyError';
import BudgetVolumn from './partials/BudgetVolumn';
import BudgetTreatmentDelay from './partials/BudgetTreatmentDelay';
import BudgetError from './partials/BudgetError';
import TotalError from './partials/TotalError';
import Consumption from './partials/Consumption';

function Dashboard() {
  return (
    <>
      <div className="page-title">
        <h1 className="flex">
          <Icons.IconChart width="21" height="21" />{' '}
          <span className="font-[600]">Dashboard</span>
        </h1>
      </div>

      <div className="page-content">
        <div className="mb-5">
          <ButtonOutline className="font-[12px] leading-[12px]">
            <Icons.IconCalendar
              fill="#000"
              width="15"
              height="15"
              className="mr-5px"
            />
            Dernier 7 jours
          </ButtonOutline>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <h2 className="flex text-primary leading-[21px]">
              <Icons.IconUsers fill="#7782FF" className="mr-5px" /> Familles
            </h2>

            <div className="grid grid-cols-3 gap-2.5">
              <FamilyVolumn />

              <FamilyTreatmentDelay />

              <FamilyError />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="flex text-red-light leading-[21px]">
              <Icons.IconTag fill="#FF9090" className="mr-5px" /> Budget Serré
            </h2>

            <div className="grid grid-cols-3 gap-2.5">
              <BudgetVolumn />

              <BudgetTreatmentDelay />

              <BudgetError />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Consumption />

            <TotalError />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
