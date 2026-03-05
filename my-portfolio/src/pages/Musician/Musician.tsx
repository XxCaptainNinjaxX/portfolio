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
          To be honest, nothing has shaped who I am today more than music. It
          taught me that talent means nothing without the resilience to push
          through the hard times. From the practice room to the field, and
          ruthless competition,{" "}
          <strong>
            I learned that true leadership is about accountability, patience,
            and the grit{" "}
          </strong>{" "}
          to keep going when things get tough. That being said, the
          determination I forged here is the foundation of my work ethic—proving
          that elite results require elite preparation, no matter the field.
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
