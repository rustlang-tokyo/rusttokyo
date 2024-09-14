import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

export type Props = {
  name: string;
  image: string;
  twitter: {
    id: string;
    url: string;
  };
  jobTitle: string;
  text: string;
};

Modal.setAppElement("#__next");

export function Profile(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="profile_box">
        <figure>
          <Image
            src={props.image}
            alt={props.name}
            className="profile_pic"
            onClick={openModal}
            width={200}
            height={200}
          />
        </figure>
        <h3>{props.name}</h3>
        {props.twitter.id !== "" && (
          <p>
            <a
              href={props.twitter.url}
              className="twitter_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon-width" icon={faTwitter} />{" "}
              {props.twitter.id}
            </a>
          </p>
        )}
        <p className="job_title">{props.jobTitle}</p>
      </div>
      <Modal
        isOpen={isOpen}
        aria={{
          labelledby: "avatar",
          describedby: "profile",
        }}
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={closeModal}
      >
        <div className={"profile_modal_close"}>
          <div className={"profile_modal_close_button"}>
            <FontAwesomeIcon
              className="close_btn"
              icon={faTimes}
              onClick={closeModal}
            />
          </div>
        </div>
        <div className={"profile_modal_detail"}>
          <div id="avatar" className="profile_modal_avatar">
            <Image
              src={props.image}
              alt={props.name}
              className="profile_pic"
              width={200}
              height={200}
            />
          </div>
          <div id="profile" className="profile_modal_detail_twitter_text">
            <p
              style={{
                fontSize: "200%",
                fontFamily: "din-2014, sans-serif",
                color: "#2d80e2",
                marginBottom: 0,
              }}
            >
              {props.name}
            </p>
            {props.twitter.id !== "" && (
              <p className="profile_modal_detail_twitter">
                <FontAwesomeIcon className="icon-width" icon={faTwitter} />{" "}
                {props.twitter.id}
              </p>
            )}
            <p className="profile_modal_detail_text">{props.text}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
