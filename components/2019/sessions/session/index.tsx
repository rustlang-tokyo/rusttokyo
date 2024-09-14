import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "react-modal";

type Speaker = {
  image: string;
  name: string;
};

export type Props = {
  speakers: Speaker[];
  title: string;
  abstract: string;
  language: string;
  slide?: string;
};

export function Session(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (props.title === "") {
    return <p />;
  }

  if (props.abstract === "") {
    return <p>{props.title}</p>;
  }

  return (
    <>
      {/* biome-ignore lint/a11y/useValidAnchor : 2019 のサイトのため lint ルールの違反を許容する */}
      <a onClick={openModal} href="#">
        {props.title}
      </a>
      {props.language !== "" && (
        <span className="session_list_language">{` (${props.language})`}</span>
      )}
      {props.slide != null && (
        <div className="slide">
          <a href={props.slide} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon-width" icon={faLink} />
            &nbsp; slide&nbsp;link
          </a>
        </div>
      )}
      <Modal
        isOpen={isOpen}
        aria={{
          labelledby: "avatar",
          describedby: "session abstract",
        }}
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={closeModal}
      >
        <div className={"session_modal_close"}>
          <div className={"session_modal_close_button"}>
            <FontAwesomeIcon
              className="close_btn"
              icon={faTimes}
              onClick={closeModal}
            />
          </div>
        </div>
        <div className={"session_modal_detail"}>
          <div id="avatar" className="session_modal_avatar">
            {props.speakers.map((s, i) => (
              <img
                key={`speaker_${s.name}`}
                src={s.image}
                alt={s.name}
                className={`session_pic session_pic_${i}`}
              />
            ))}
          </div>
          <div id="profile" className="session_modal_detail_container">
            <p className="session_modal_detail_title">{props.title}</p>
            {props.speakers.map((s) => (
              <p
                key={`speaker_name_${s.name}`}
                className="session_modal_detail_name"
              >
                {s.name}
              </p>
            ))}
            <p className="session_modal_detail_language">{props.language}</p>
            <p className="session_modal_detail_abstract">
              {props.abstract.split("\n").map((s, index) => (
                <span key={`abstract_row_${index}`}>
                  {s}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
