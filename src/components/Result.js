import React from "react";
import "../css-flies/Results.css";
import { april_may_2018 } from "../subnames/april_may_2018";
import { april_may_2019 } from "../subnames/april_may_2019";
import { march_sem_2021 } from "../subnames/march_sem_2021";
import { may_june_2020 } from "../subnames/may_june_2020";
import { may_june_2021 } from "../subnames/may_june_2021";
import { nov_dec_2017 } from "../subnames/nov_dec_2017";
import { nov_dec_2018 } from "../subnames/nov_dec_2018";
import { nov_dec_2019 } from "../subnames/nov_dec_2019";
import { nov_dec_2020 } from "../subnames/nov_dec_2020";

function Result(props) {
  // console.log(props.location?.state);
  const { name, regno, semester, subData } = props.location?.state;
  let GPA = 0;
  const S = 10,
    A = 9,
    B = 8,
    C = 7,
    D = 6,
    E = 5,
    F = 0;
  let sum = 0;
  let cre = 0;
  subData.forEach((element) => {
    cre += parseFloat(element.credit);

    if (element.grade === "S") {
      sum = sum + S * parseFloat(element.credit);
    } else if (element.grade === "A") {
      sum = sum + A * parseFloat(element.credit);
    } else if (element.grade === "B") {
      sum = sum + B * parseFloat(element.credit);
    } else if (element.grade === "C") {
      sum = sum + C * parseFloat(element.credit);
    } else if (element.grade === "D") {
      sum = sum + D * parseFloat(element.credit);
    } else if (element.grade === "E") {
      sum = sum + E * parseFloat(element.credit);
    } else if (element.grade === "F") {
      sum = sum + F * parseFloat(element.credit);
    }
  });

  GPA = (sum / cre).toFixed(2);

  let subname_array = [];
  if (semester === "May/June 2021") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = may_june_2021.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "March Sem 2021") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = march_sem_2021.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "Nov/Dec 2020") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = nov_dec_2020.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "May/June 2020") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = may_june_2020.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "Nov/Dec 2019") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = nov_dec_2019.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "April/May 2019") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = april_may_2019.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "Nov/Dec 2018") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = nov_dec_2018.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "April/May 2018") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = april_may_2018.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  } else if (semester === "Nov/Dec 2017") {
    subname_array = subData.map((item) => {
      const subcode = item.subcode.split(" ")[0];
      const val = nov_dec_2017.filter((name) => {
        if (name.subcode === subcode) {
          return name;
        }
        return null;
      });
      return val[0];
    });
  }

  return (
    <>
      <div className="main-div">
        <div className="info-div">
          <div className="info-one">
            <p>{name.name}</p>

            <p>{regno}</p>

            <p>{semester}</p>
          </div>
          <div className="info-two">
            GPA: <span>{GPA}</span>{" "}
          </div>
        </div>

        <div className="sub-div">
          {subData.map((item, index) => {
            return (
              <div className="hover-div">
                <div className="cre-div">
                  <span>Credit:{item.credit}</span>
                </div>
                <div key={index} className="each-sub">
                  <p>{item.subcode.split(" ")[0]}</p>
                  {subname_array.map((name, index) => {
                    if (item.subcode.split(" ")[0] === name.subcode) {
                      return <p key={index}>{name.subname}</p>;
                    }
                    return null;
                  })}
                  <p>Int:{item.internal}</p>
                  <p>Ext:{item.external}</p>
                  <p>Total:{item.total}</p>
                  <p>GRADE:{item.grade}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ backgroundColor: "chocolate", padding: "10px" }}>
        <div
          style={{
            color: "white",
            marginTop: "15px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <p>
            NOTE :Developer does not take any responsibility for accuracy of the
            GPA,marks shown on this website.
          </p>
        </div>
      </div>
    </>
  );
}

export default Result;
