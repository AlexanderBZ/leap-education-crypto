import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import classes from "./SubtopicContainer.module.css";

export default function SubtopicContainer({ toggleSubtopicOpen, subtopic }) {
  return (
    <div className={classes.container}>
      <section className={classes.header}>
        <ChevronLeftIcon onClick={toggleSubtopicOpen} />
        <h2>{subtopic.title}</h2>
      </section>
      <section className={classes.links}>
        {subtopic.links.map((link) => (
          <a href={link.href} key={link.id} target="_blank" rel="noreferrer">
            <li>
              <span className={classes.title}>{link.title}</span>
            </li>
          </a>
        ))}
      </section>
    </div>
  );
}
