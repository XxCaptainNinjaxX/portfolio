import "../SubPage.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

import { currentEnsembles, pastEnsembles } from "../../components/Data/data";

export default function Musician() {
  return (
    <div className="musician-page">
      <h1>Musician</h1>

      <div className="page-intro">
        <p>
          Nothing has shaped me more than my time in competitive marching band
          and drum corps. It has been a complete rollercoaster of frustration,
          discovery, and joy. Enduring the ruthless expectations of that
          environment taught me that talent means nothing without grit. From
          running laps under the harsh sun to performing under the bright lights
          of MetLife Stadium, I learned that true leadership is about patience,
          accountability, and being the person your team can lean on when things
          get tough. That same determination is the foundation of my work ethic
          today.
        </p>
        {""}
        <a
          href="https://www.instagram.com/trump3t_guy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      <PageHeader title="Current Ensembles " />

      <div className="currentGrid">
        {currentEnsembles.map((Ensemble, index) => (
          <Card
            key={index}
            desc={Ensemble.title}
            alt={Ensemble.title}
            image={Ensemble.image}
            popupTitle={Ensemble.title}
            popupDesc={Ensemble.desc}
            imageLink={Ensemble.imageLink}
          />
        ))}
      </div>

      <PageHeader title="Past Ensembles" />

      <div className="pastGrid">
        {pastEnsembles.map((Ensemble, index) => (
          <Card
            key={index}
            desc={Ensemble.title}
            alt={Ensemble.title}
            image={Ensemble.image}
            popupTitle={`${Ensemble.title}`}
            popupDesc={Ensemble.desc}
            imageLink={Ensemble.imageLink}
            popupImage={Ensemble.popupImage}
          />
        ))}
      </div>
    </div>
  );
}
