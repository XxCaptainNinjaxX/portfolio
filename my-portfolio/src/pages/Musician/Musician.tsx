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
          Nothing has shaped me more than band, and especially marching band and
          drum corps. It has been a rollercoaster since the beginning; there has
          been the joy of playing my instrument, the hatred of the activity at
          certain moments under a 90 degree sun on a sixteen hour day, lastly,
          performing under the lights of MetLife and Lucas Oil for thousands of
          people. Through all of it I learned that real leadership is about
          patience, accountability, and most importantly, sacrifice.
        </p>
        <p>
          It also has taught me one of my best skills, planning. The goal was
          always a perfect show by a specific date, and the only way to reach it
          was breaking that date down into what had to be done by the month, the
          week, the rehearsal, the individual moment, then the second. Learning
          to work backward from an outcome that far out, and holding every small
          piece accountable to it, is where my planning actually stemmed from.
        </p>
        <p>That is the same determination behind my work ethic today.</p>
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
