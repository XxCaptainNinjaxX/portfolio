import "../SubPage.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import Card from "../../components/Card/Card";

import njit from "../../assets/images/NJIT_Wind.png";
import cabs from "../../assets/images/cabs.png";
import jazz from "../../assets/images/jazzEns.jpg";
import orch from "../../assets/images/orch.png";
import trumpet from "../../assets/images/trumpetEns.jpg";
import marchingEns from "../../assets/images/marchingEns.png";
import marchingSolo from "../../assets/images/MarchingSS.png";

const currentEnsambles = [
  {
    title: "NJIT Wind Ensamble",
    desc: "Currently, I operate as a Lead Trumpet and Soloist. However, effective leadership is about more than just volume and playing; it demands precision. That being said, I focus on blending my sound into the ensemble's architecture to ensure we create a remarkable performance rather than just a collection of individuals.",
    image: njit,
    imageLink: "https://theatre.njit.edu/music-ensemble-concerts",
  },
  {
    title: "Hawthorne Caballeros DCI",
    desc: "Joining the 'Major Leagues' of Marching Arts. I am proud to announce I will be marching with the Hawthorne Caballeros for the 2026 season, committing to the extreme discipline and physical excellence required at the world-class level.",
    image: cabs,
    imageLink: "https://hawthornecaballeros.org/",
  },
];

const pastEnsambles = [
  {
    title: "EHS Jazz Ensamble (Soloist) ",
    desc: "A four-year journey of continuous improvement (2021-2025). I started at the very last chair. However, through rigorous daily practice, I worked my way up to the second chair. In the end, this proved to me that consistency is the only true shortcut to master a skill.",
    image: jazz,
    imageLink:
      "https://drive.google.com/drive/folders/1xzQUrANXubfc2mdPc9OuQUM7rsg6rTrC?usp=sharing",
  },
  {
    title: "EHS Orchestra (Soloist+lead) ",
    desc: "Performing high-stakes repertoire. I had the opportunity to perform complex works like the 'Overture from Carmen' and served as a featured soloist for the 'Medley from Chicago.' That being said, the experience taught me to maintain absolute focus and composure under the spotlight.",
    image: orch,
    imageLink: "https://youtu.be/avnEmxiU1Rg?si=18xroo0Zv099HeIO&t=2926",
  },
  {
    title: "EHS Trumpet Ensamble",
    desc: "Small-group precision where there is nowhere to hide. As a soloist, I learned the importance of individual accountability. In the end, knowing that every single note impacted the final product taught me that personal execution is the foundation of team success.",
    image: trumpet,
  },
  {
    title: "EHS Marching Band",
    desc: "The foundation of my character (2021-2025). I began my journey on the 3rd trumpet part. However, through relentless grit, I climbed to the 2nd and eventually the 1st trumpet part. We achieved National Champion status and were Mid-Atlantic Finalists. In the end, this experience taught me that elite results require elite preparation every single day.",
    image: marchingEns,
    popupImage: marchingSolo,
    imageLink: "https://youtu.be/zn2gasWT_nU?si=9VZtbRpCVaShTp3A&t=86",
  },
];

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

      <PageHeader title="Current Ensambles " />

      <div className="currentGrid">
        {currentEnsambles.map((ensamble, index) => (
          <Card
            key={index}
            desc={ensamble.title}
            alt={ensamble.title}
            image={ensamble.image}
            popupTitle={ensamble.title}
            popupDesc={ensamble.desc}
            imageLink={ensamble.imageLink}
          />
        ))}
      </div>

      <PageHeader title="Past Ensambles" />

      <div className="pastGrid">
        {pastEnsambles.map((ensamble, index) => (
          <Card
            key={index}
            desc={ensamble.title}
            alt={ensamble.title}
            image={ensamble.image}
            popupTitle={`${ensamble.title}`}
            popupDesc={ensamble.desc}
            imageLink={ensamble.imageLink}
            popupImage={ensamble.popupImage}
          />
        ))}
      </div>
    </div>
  );
}
