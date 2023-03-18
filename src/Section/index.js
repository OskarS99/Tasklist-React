import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <header className="section__header--buttons">
      <h2 className="section__title">{title}</h2>
      <div>
        {extraHeaderContent}
      </div>
      </header>
    <div className="section__body">
      {body}
    </div>
  </section>
);

export default Section;