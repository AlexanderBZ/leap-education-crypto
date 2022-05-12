import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks";
import SubtopicContainer from "./SubtopicContainer";
import classes from "./TopicContainer.module.css";

export default function TopicContainer({ toggleOpen, topic }) {
  const [showSubTopic, setShowSubTopic] = useState(false);
  const toggleSubtopicOpen = () => setShowSubTopic(!showSubTopic);

  const ref = useRef();
  useOnClickOutside(ref, toggleOpen);

  return (
    <div className={classes.overlay}>
      <div ref={ref} className={classes.container}>
        <h2>{topic.name}</h2>
        <section className={classes.subtopics}>
          {topic.subtopics.map((subtopic) => (
            <div key={subtopic.id}>
              {showSubTopic && (
                <SubtopicContainer
                  toggleSubtopicOpen={toggleSubtopicOpen}
                  subtopic={subtopic}
                />
              )}
              <li>
                <span className={classes.title} onClick={toggleSubtopicOpen}>
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
