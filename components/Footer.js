import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__list">
        <div className="footer__element">
          <h4>Nosotros</h4>
          <a href="https://mendoza000.vercel.app" target={"_blank"}>
            Conoce más
          </a>
        </div>

        <div className="footer__element">
          <h4>Servicios</h4>
          <Link href={"/"}>
            <a>Todos los productos</a>
          </Link>
        </div>

        <div className="footer__element">
          <h4>Hecho por</h4>
          <p>
            <a href="https://twitter.com/mendoza000x" target={"_blank"}>
              Omar Mendoza
            </a>{" "}
            como tarea del curso de NextJS en{" "}
            <a href="https://platzi.com" target={"_blank"}>
              Platzi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
