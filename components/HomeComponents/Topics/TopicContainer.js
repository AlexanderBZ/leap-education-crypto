import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks";
import SubtopicContainer from "./SubtopicContainer";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./TopicContainer.module.css";

export default function TopicContainer({ toggleOpen, topic }) {
  const [showSubTopic, setShowSubTopic] = useState(false);
  const [selectedSubTopic, setSelectedSubTopic] = useState({});

  async function selectAndShow(subtopic) {
    await setSelectedSubTopic(subtopic);
    await setShowSubTopic(!showSubTopic);
  }

  const toggleSubtopicOpen = () => {
    setShowSubTopic(!showSubTopic);
  };

  const ref = useRef();
  useOnClickOutside(ref, toggleOpen);

  return (
    <div className={classes.overlay}>
      <div ref={ref} className={classes.container}>
        <section className={classes.header}>
          <CloseIcon onClick={toggleOpen} />
          <h2>{topic.title}</h2>
        </section>
        <section className={classes.subtopics}>
          {showSubTopic && (
            <SubtopicContainer
              toggleSubtopicOpen={toggleSubtopicOpen}
              subtopic={selectedSubTopic}
            />
          )}
          {topic.subtopics.map((subtopic) => (
            <div key={subtopic.id}>
              <li>
                <span
                  className={classes.title}
                  onClick={() => selectAndShow(subtopic)}
                >
                  {subtopic.title}
                </span>
              </li>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
