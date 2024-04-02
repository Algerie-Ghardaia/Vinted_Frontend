import "./header.css";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//---------------LIBRARY MATERIAL UI----------------//
import { IoSearchSharp } from "react-icons/io5";
import Modal from "../components/Modal";
import { SousHeader } from "./SousHeader";
//-------------------------------------------------//

export default function Header({ handlUserToken, token, search, setSearch }) {
  //-------------------STATE--------------------//

  const [showModal, setShowModal] = useState(false);

  //---------------------------------------------//

  //---------Modal---------//
  const handlaShowModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  //----------------------//

  const navigate = useNavigate();
  console.log(navigate);

  handlUserToken(token);
  return (
    <>
      <header>
        <div
          className={token ? "header_cantainer navToken" : "header_cantainer"}
        >
          <div className={token ? "token_sous_header " : "sous_header"}>
            <Link to={"/"}>
              <div
                className="header_logo"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <svg
                  width={130}
                  height={130}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 11 83.03 26.82"
                >
                  <path
                    d="M16.642 11c-.285 0-.631.24-1.563 1.052-.331.12-.692.03-1.113.677-2.375 3.413-4.224 16.176-5.803 19.86-.316-1.594-.977-11.968-1.233-14.809-.03-.526.03-1.188.03-1.578 0-2.616-.57-3.94-3.187-3.94-1.323 0-2.63.482-3.322 1.354-.33.45-.451.782-.451 1.593 0 5.428 1.293 14.327 2.736 20.13.451 1.82 2.075 2.165 3.608 2.165.722 0 1.443-.09 2.466-.601 3.547-1.73 4.495-6.45 5.412-11.035.165-.827.992-4.826 1.383-6.93.526-2.872 1.127-6.119 1.488-7.307.12-.36-.105-.631-.45-.631Zm60.254 12.989c-.48 3.593-2.315 9.742-4.36 9.742-.586 0-.886-.677-.886-1.504 0-2.36 1.593-7.08 5.246-8.238Zm-17.844 4.044c.466-2.105 2.48-5.322 4.284-5.322.33 0 .511.21.466.722-.105 1.593-1.293 4.24-4.75 4.6ZM83 12.623c0-.63-.39-1.187-1.278-1.187-.721 0-1.563.36-2.09.812-.63-.15-1.473.33-1.578.902-.541 2.54-.782 5.186-1.082 7.366-3.638.33-6.405 2.345-7.758 5.638a12.824 12.824 0 0 1-.781 1.578c-1.925 3.278-4.33 5.172-6.69 5.172-1.73 0-2.721-1.218-2.842-2.872.617.15 1.203.226 1.744.226 3.909 0 5.893-3.698 5.893-6.194 0-2.42-1.623-3.653-4.029-3.653-4.39.03-8.043 5.262-8.043 10.042 0 3.398 1.519 6.089 4.977 6.089 2.675 0 6.374-1.473 8.884-5.262-.165 2.691.541 5.322 2.842 5.578 1.293.12 3.638-.692 5.201-3.879.12 2.646.962 3.924 1.639 3.924 1.218 0 1.984-.436 2.931-.481.301-.015.391-.286.391-.526 0-.391-.45-1.835-.45-3.91 0-3.171.63-8.132 1.969-18.25.06-.24.15-.737.15-1.112Zm-60.134 6.48c1.173 0 2.135-.962 2.135-2.014 0-1.383-.421-2.706-1.985-2.706-1.067 0-2.916 1.202-2.916 2.24 0 1.217 1.338 2.48 2.766 2.48Zm31.976-.842c-.676-.135-1.413-.15-2.165-.15.03-.526-.015-1.534 0-2.42 0-.136.06-.376.06-.677 0-.3-.06-.631-.27-.932.075-.21.12-.391.12-.526 0-.722-1.067-.992-2.074-.992-.872 0-1.684.315-1.97 1.262-.466 1.669-.601 2.39-.721 4.134-1.053.06-3.097.076-3.052.722.12 1.669 1.729 2.21 2.886 2.24-.135 4.585-3.969 12.012-5.156 12.012-.226 0-.316-.36-.316-1.128 0-1.503.316-3.518.316-5.652 0-1.323-.136-2.526-.541-3.293-.512-.917-2.195-1.368-3.518-1.368-.512 0-.932.06-1.263.18-2.195.888-4.044 5.879-4.736 6.991.331-3.021.827-5.382.827-6.614 0-.692-.616-1.308-1.308-1.308-.27 0-.51.09-.736.3-.993.361-2.316 0-2.541 1.413-.06.376-.135.827-.165 1.339-.241 3.668-3.91 10.463-5.788 10.463-.466 0-.572-.601-.572-1.368 0-2.556 1.323-7.938 1.353-9.02.076-.166.12-.361.12-.526 0-1.023-1.202-2.015-2.435-2.015-.36 0-.616-.075-.902-.075-.18 0-.376.03-.586.165-1.368.872-2.57 5.863-2.57 8.93 0 3.383 1.969 6.089 5.096 6.089 2.24 0 4.134-2.045 5.742-4.871 0 .436-.09 2.555 0 3.758.06.827.917.466 1.955.887.39.33.751.481 1.067.481.526 0 .932-.466 1.233-1.278 1.233-3.382 4.21-10.974 5.051-10.974.631 0-.015 4.886-.015 7.306 0 1.383.135 2.571.616 3.082.887.932 1.834 1.383 2.827 1.383 2.195 0 4.51-2.345 6.404-6.705-.12 1.864-.135 2.436-.135 3.082 0 1.082.06 2.285.21 3.157.09.421.136.722.511.992.511.286.977.451 1.233.632.586.285.541.436 1.353.436.286 0 .677-.27.737-.917.721-7.141 1.473-15.95 1.473-15.95.481-.016 1.85-.362 3.127-.512.541-.06 1.188-.39 1.188-.782 0-.39-.857-1.142-1.97-1.383Z"
                    fill="#007782"
                    data-darkreader-inline-fill=""
                  />
                </svg>
              </div>
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div className="input-icone">
                <div className="icone_display">
                  <IoSearchSharp className="icon" />
                  <input
                    type="text"
                    placeholder="Recherche des articles"
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </div>
              </div>
              {token ? <SousHeader /> : ""}
              {/*  */}
            </div>
            <div style={{ marginTop: "20px" }}>
              {/* className={token ? " isToken" : ""} */}
              {token ? (
                <>
                  <button
                    className="isToken"
                    onClick={() => {
                      navigate("/");
                      handlUserToken(null);
                    }}
                  >
                    Se déconnecter
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/signup"}>
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      S'inscrire
                    </button>
                  </Link>
                </>
              )}

              <Link to={"/"}>
                <button
                  className={token ? " isNone" : ""}
                  onClick={handlaShowModal}
                >
                  Se connecter
                </button>
              </Link>
              <Link to={"/publish"}>
                <button>Vente tes articles</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {showModal ? (
        <Modal
          handlUserToken={handlUserToken}
          showModal={showModal}
          setShowModal={setShowModal}
          handlaShowModal={handlaShowModal}
        />
      ) : (
        ""
      )}
    </>
  );
}
