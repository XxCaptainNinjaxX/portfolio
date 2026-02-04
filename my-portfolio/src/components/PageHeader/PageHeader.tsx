import "./PageHeader.css";

interface HeaderProp {
  title: string;
}
export default function PageHeader(props: HeaderProp) {
  return (
    <div>
      <main className="main-content">
        <h2> {props.title}</h2>
      </main>
    </div>
  );
}
