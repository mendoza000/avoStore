import Link from "next/link";
import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const yesornot = () => {
  const [yesOrNot, setYesOrNot] = useState({
    number: 1,
    loading: false,
  });

  const handleClick = () => {
    let number = Math.floor(Math.random() * (3 - 0)) + 0;
    setYesOrNot({
      ...yesOrNot,
      loading: true,
    });

    setTimeout(() => {
      setYesOrNot({
        number,
        loading: false,
      });
    }, 1500);
  };
  return (
    <div className="ui__container yesornot__container animate__animated animate__fadeIn animate__faster">
      <h1
        className={`yesornot__title ${
          yesOrNot.loading ? "yesornot__title-loading" : ""
        }`}
      >
        {yesOrNot.number >= 1 ? "YES" : "NO"}
      </h1>

      <button
        className={`yesornot__button ${
          yesOrNot.loading ? "yesornot__button-loading" : ""
        }`}
        onClick={handleClick}
      >
        {yesOrNot.loading ? (
          <BiLoaderAlt className="yesornot__button-icon" />
        ) : (
          "Intentar de nuevo"
        )}
      </button>
      <Link href={"/"}>
        <a className="yesornot__return">Regresar al inicio</a>
      </Link>
    </div>
  );
};

export default yesornot;
