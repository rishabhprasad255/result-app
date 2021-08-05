import React, { useState, useEffect } from "react";
import "../css-flies/Form.css";
import { Link, useHistory } from "react-router-dom";
import Copywritecom from "./Copywritecom";
import Modal from "../components/Modal";
import { name_2017 } from "../name/_2017";
import { name_2018 } from "../name/_2018";
import { name_2019 } from "../name/_2019";
import { name_2020 } from "../name/_2020";
import { april_may_2018 } from "../marks/april_may_2018";
import { april_may_2019 } from "../marks/april_may_2019";
import { march_2021 } from "../marks/march_2021";
import { may_june_2020_audit } from "../marks/may_june_2020_audit";
import { may_june_2020 } from "../marks/may_june_2020";
import { may_june_2021 } from "../marks/may_june_2021";
import { nov_dec_2017 } from "../marks/nov_dec_2017";
import { nov_dec_2018 } from "../marks/nov_dec_2018";
import { nov_dec_2019 } from "../marks/nov_dec_2019";
import { nov_dec_2020 } from "../marks/nov_dec_2020";

function Form() {
  const [regno, setRegno] = useState("");
  const [selectDisplay, setSelectDisplay] = useState("May/June 2021");
  const [isactive, setIsactive] = useState(false);
  const [isalert, setIsalert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const emptyit = () => {
    setRegno("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regno === "") {
      setIsalert(true);
      return;
    }

    let name = {};
    if (name_2017[regno]) {
      name = name_2017[regno];
    } else if (name_2018[regno]) {
      name = name_2018[regno];
    } else if (name_2019[regno]) {
      name = name_2019[regno];
    } else if (name_2020[regno]) {
      name = name_2020[regno];
    } else {
      name = "NA";
    }

    let val = [];
    if (selectDisplay === "May/June 2021") {
      val = may_june_2021.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    } else if (selectDisplay === "March Sem 2021") {
      val = march_2021.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    } else if (selectDisplay === "Nov/Dec 2020") {
      val = nov_dec_2020.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    } else if (selectDisplay === "May/June 2020") {
      val = may_june_2020.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
      const extraval = may_june_2020_audit.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
      val = [...val, ...extraval];
    } else if (selectDisplay === "Nov/Dec 2019") {
      val = nov_dec_2019.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    } else if (selectDisplay === "April/May 2019") {
      val = april_may_2019.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    } else if (selectDisplay === "Nov/Dec 2018") {
      val = nov_dec_2018.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    } else if (selectDisplay === "April/May 2018") {
      val = april_may_2018.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    } else if (selectDisplay === "Nov/Dec 2017") {
      val = nov_dec_2017.filter((item) => {
        if (item.regno === regno) {
          return item;
        }
        return null;
      });
    }

    if (name.name === "NA" || val.length === 0) {
      setIsModalOpen(true);
      emptyit();
      return;
    }

    history.push({
      pathname: "/result",
      state: {
        regno: regno,
        semester: selectDisplay,
        name: name,
        subData: val,
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsalert(false);
    }, 4000);
  }, [isalert]);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 4000);
  }, [isModalOpen]);

  useEffect(() => {
    document.getElementById("input_field").focus();
  }, []);

  return (
    <div
      className="vmain-div"
      onClick={(e) => {
        if (!e.target.classList.contains("closeSubmenu")) {
          setIsactive(false);
        }
      }}
    >
      {isModalOpen ? <Modal /> : null}

      {isalert ? (
        <p className="alert-msg">Please Enter Your Registration Number</p>
      ) : null}
      <div className="outer-div">
        <div className="inner-div">
          <div className="info">
            <p>
              Check Your Result <span>&#8669;</span>
            </p>
          </div>
          <div className="dev-link">
            <main>SAY HI &#128516;</main>
            <div>
              <Link className="dev-btn" to="/developer">
                Developer
              </Link>
            </div>
          </div>
        </div>
        <div className="form-div">
          <p>Good Luck &#128077;</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="sem">
              ENTER YOUR
              <br /> REGISTRATION NO
            </label>

            <div className="selectme-div">
              <div
                className="selectme closeSubmenu"
                onClick={() => setIsactive(!isactive)}
              >
                {selectDisplay}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  fill="currentColor"
                  className="bi bi-caret-down-fill closeSubmenu"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="closeSubmenu"
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
              <div
                className={`semesters ${isactive ? "semesters-click" : null}`}
              >
                <main
                  onClick={() => {
                    setSelectDisplay("May/June 2021");
                    setIsactive(false);
                  }}
                >
                  May/June 2021
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("March Sem 2021");
                    setIsactive(false);
                  }}
                >
                  March Sem 2021
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("Nov/Dec 2020");
                    setIsactive(false);
                  }}
                >
                  Nov/Dec 2020
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("May/June 2020");
                    setIsactive(false);
                  }}
                >
                  May/June 2020
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("Nov/Dec 2019");
                    setIsactive(false);
                  }}
                >
                  Nov/Dec 2019
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("April/May 2019");
                    setIsactive(false);
                  }}
                >
                  April/May 2019
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("Nov/Dec 2018");
                    setIsactive(false);
                  }}
                >
                  Nov/Dec 2018
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("April/May 2018");
                    setIsactive(false);
                  }}
                >
                  April/May 2018
                </main>
                <main
                  onClick={() => {
                    setSelectDisplay("Nov/Dec 2017");
                    setIsactive(false);
                  }}
                >
                  Nov/Dec 2017
                </main>
              </div>
            </div>

            <div className="form-footer">
              <input
                type="text"
                value={regno}
                onChange={(e) => setRegno(e.target.value)}
                placeholder="REG N0."
                id="input_field"
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Copywritecom />
    </div>
  );
}

export default Form;
