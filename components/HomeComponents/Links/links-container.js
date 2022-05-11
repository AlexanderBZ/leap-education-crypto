import { useRef } from "react";
import { useOnClickOutside } from "../../../hooks";
import classes from "./links-container.module.css";

export default function LinksContainer({ toggleOpen, links }) {
  const ref = useRef();

  useOnClickOutside(ref, toggleOpen);

  return (
    <div className={classes.overlay}>
      <div ref={ref} className={classes.container}>
        <h2>{links.name}</h2>
        <section className={classes.links}>
          {links.hrefs.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer">
              <li>
                <span className={classes.title}>{link.title}</span>
              </li>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
