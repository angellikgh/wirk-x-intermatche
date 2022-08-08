import React from 'react';
import ButtonOutline from '../../components/Buttons/ButtonOutline';
import * as Icons from '../../components/Icons';
import BarChart from '../../components/Charts/BarChart';
import PieChart from '../../components/Charts/PieChart';
import StackedBarChart from '../../components/Charts/StackedBarChart';

function Dashboard() {
  return (
    <>
      <div className="page-title">
        <h1 className="flex">
          <Icons.IconChart width="21" height="21" /> Dashboard
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

        <div className="flex">
          <div className="w-[548px] mr-5">
            <h2 className="flex text-primary mb-5 leading-[21px]">
              <Icons.IconUsers fill="#7782FF" className="mr-5px" /> Familles
            </h2>

            <div className="card mb-5 bg-primary-light">
              <div className="card-title">Volume traité</div>
              <div className="card-body">
                <div className="summary">
                  <h3 className="summary-title">Nombre de dossiers</h3>
                  <div className="summary-content text-primary">2612</div>
                </div>
                <BarChart fill="#5C80FF" />
              </div>
            </div>

            <div className="card mb-5 bg-primary-light">
              <div className="card-title">Délais de traitement</div>
              <div className="card-body">
                <div className="grid grid-cols-2 gap-4">
                  <div className="summary">
                    <h3 className="summary-title">Temps moyen de traitement</h3>
                    <div className="summary-content text-primary">1,3 j</div>
                  </div>
                  <div className="summary">
                    <h3 className="summary-title">% inferieur à 5j</h3>
                    <div className="summary-content text-primary">95,7%</div>
                  </div>
                </div>
                <BarChart fill="#5C80FF" />
              </div>
            </div>

            <div className="card">
              <div className="card-title">Consommation</div>
              <div className="card-body">
                <div className="summary">
                  <h3 className="summary-title">Dossiers restants</h3>
                  <div className="summary-content text-primary">365</div>
                </div>

                <PieChart />
              </div>
            </div>
          </div>
          <div className="w-[548px]">
            <h2 className="flex text-red-light mb-5 leading-[21px]">
              <Icons.IconTag fill="#FF9090" className="mr-5px" /> Budget Serré
            </h2>

            <div className="card mb-5 bg-warning-light">
              <div className="card-title">Volume traité</div>
              <div className="card-body">
                <div className="summary">
                  <h3 className="summary-title">Nombre de dossiers</h3>
                  <div className="summary-content text-primary">2612</div>
                </div>
                <BarChart fill="#FF89BB" />
              </div>
            </div>

            <div className="card mb-5 bg-warning-light">
              <div className="card-title">Délais de traitement</div>
              <div className="card-body">
                <div className="grid grid-cols-2 gap-4">
                  <div className="summary">
                    <h3 className="summary-title">Temps moyen de traitement</h3>
                    <div className="summary-content text-primary">1,3 j</div>
                  </div>
                  <div className="summary">
                    <h3 className="summary-title">% inferieur à 5j</h3>
                    <div className="summary-content text-primary">95,7%</div>
                  </div>
                </div>

                <BarChart fill="#FF89BB" />
              </div>
            </div>

            <div className="card">
              <div className="card-title">Consommation</div>
              <div className="card-body">
                <div className="summary">
                  <h3 className="summary-title">% de KO</h3>
                  <div className="summary-content text-primary">13 %</div>
                </div>

                <StackedBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
