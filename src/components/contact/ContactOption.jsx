import React from "react";

function ContactOption(props) {
  return (
    <article className="contact__option">
      {props.icon}
      <h4>{props.method}</h4>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.message}
      </a>
    </article>
  );
}

export default ContactOption;
