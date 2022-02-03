import { React, useState, useRef } from "react";
import styles from "./factorportfolio.module.css";
import data from "./factport_response.json";
import { RiCloseLine } from "react-icons/ri";
import { DatePicker } from "react-rainbow-components";

const containerStyles = {
  maxWidth: 400,
  marginBottom: "10px"
};

function FactorPortfolio() {
  const [portfolioDate, setPortfolioDate] = useState({ date: new Date() });

  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const scroll2 = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const indices = ["NIFTY 200", "NIFTY 500", "BSE 100", "BSE 200", "BSE 500"];
  const [factorsBool, setfactorsBool] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // console.log(factorsBool);
  const [factors, setfactors] = useState([
    "Momentum",
    "Liquidity",
    "Size",
    "Value",
    "Volatilty",
    "Quality",
    "Growth",
  ]);
  const factors2 = [
    "momentum",
    "liquidity",
    "size",
    "value",
    "volatilty",
    "quality",
    "growth",
  ];
  //Liquidity  Value  Volatilty  Quality
  const factorArr = [
    {
      firm: "HDFC",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "BOB",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
  ];
  const nseArr = [
    {
      firm: "HDFC",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "BOB",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
    {
      firm: "ICICI",
      mom: 999999.0,
      liq: 967999.0,
      val: 967999.0,
      av: 967999.0,
    },
  ];
  const toggleModal = (x) => {
    setShowModal(x);
  };
  const selectAll = (e) => {
    let y = e.target.parentNode;
    y = y.getElementsByTagName("input");
    y = Array.prototype.slice.call(y);
    y.map((x, id) => {
      if (!factorsBool[id]) x.click();
      setfactorsBool([true, true, true, true, true, true, true]);
    });
  };
  const indexOfFactor = (x) => {
    return x === "Momentum"
      ? 0
      : x === "Liquidity"
        ? 1
        : x === "Size"
          ? 2
          : x === "Value"
            ? 3
            : x === "Volatilty"
              ? 4
              : x === "Quality"
                ? 5
                : x === "Growth"
                  ? 6
                  : -1;
  };
  const table1keys = Object.keys(data)
  // console.log(table1keys)
  return (
    <div className={styles.outermost}>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalinner}>
            <h4 className={styles.modalstepsheader}>
              4 easy steps to calculate your portfolio
            </h4>
            <div className={styles.steps} style={{ marginLeft: "2vw" }}>
              <div className={styles.step}>
                <div className={styles.leftmenu}>
                  <div className={styles.bullet}>
                    <div className={styles.num}>1</div>
                  </div>
                </div>
                <div className={styles.modalcontent}>
                  <div className={styles.modalheadrow}>
                    <div className={styles.modalstepheading}>Header </div>
                  </div>
                  <div className={styles.modaldesc}>
                    Subtitle here explaining
                  </div>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.leftmenu}>
                  <div className={styles.bullet}>
                    <div className={styles.num}>2</div>
                  </div>
                </div>
                <div className={styles.modalcontent}>
                  <div className={styles.modalheadrow}>
                    <div className={styles.modalstepheading}>Header </div>
                  </div>
                  <div className={styles.modaldesc}>
                    Subtitle here explaining
                  </div>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.leftmenu}>
                  <div className={styles.bullet}>
                    <div className={styles.num}>3</div>
                  </div>
                </div>
                <div className={styles.modalcontent}>
                  <div className={styles.modalheadrow}>
                    <div className={styles.modalstepheading}>Header </div>
                  </div>
                  <div className={styles.modaldesc}>
                    Subtitle here explaining
                  </div>
                </div>
              </div>
              <div className={styles.step}>
                <div
                  className={styles.leftmenu}
                  style={{ backgroundColor: "white" }}
                >
                  <div className={styles.bullet}>
                    <div className={styles.num}>4</div>
                  </div>
                </div>
                <div className={styles.modalcontent}>
                  <div className={styles.modalheadrow}>
                    <div className={styles.modalstepheading}>Header </div>
                  </div>
                  <div className={styles.modaldesc}>
                    Subtitle here explaining
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.closemodalbtn}
            onClick={() => setShowModal(false)}
          >
            <RiCloseLine style={{ transform: "scale(2)" }} />
          </div>
        </div>
      )}
      <div
        className={styles.outer}
        style={showModal ? { filter: "blur(1.5px)" } : null}
      >
        <h6 className={styles.navheading}>Features &gt; Factor Portfolio</h6>
        <h1 className={styles.heading}>Factor Portfolio</h1>
        <h5 className={styles.subheading}>
          Startup Framework gives you complete freedom over your creative
          process
        </h5>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus leo
          orci integer sollicitudin suscipit nunc, arcu pellentesque orci. Elit
          augue magna sed vitae, amet eros. Faucibus nibh velit bibendum lectus
          nisi, amet aliquet.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus leo
          orci integer sollicitudin suscipit nunc, arcu pellentesque orci. Elit
          a
        </p>
        <h4 className={styles.stepsheader}>
          4 easy steps to calculate your portfolio
          <section
            className={styles.info}
            onClick={() => {
              setShowModal(true);
            }}
          >
            i
          </section>
        </h4>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.leftmenu}>
              <div className={styles.bullet}>
                <div className={styles.num}>1</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.headrow}>
                <div className={styles.stepheading}>Select Date </div>

                <div
                  className="rainbow-align-content_center rainbow-m-vertical_small rainbow-p-horizontal_small rainbow-m_auto"
                  style={containerStyles}
                >
                  <DatePicker
                    // required
                    // error="Select a date is Required"
                    placeholder="Select a date"
                    value={portfolioDate.date}
                    // label="DatePicker Label"
                    onChange={(value) => setPortfolioDate({ date: value })}
                    style={{ color: "purple" }}
                    className={styles.datepicker}
                  />
                </div>

                {/* 
                <input
                  type="date"
                  id="seldate"
                  name="seldate"
                  className={styles.datepicker}
                /> */}
                {/* <DatePicker
                                    views={['day', 'month', 'year']}
                                    label="Invert the order of views"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                /> */}
              </div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.leftmenu}>
              <div className={styles.bullet}>
                <div className={styles.num}>2</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.headrow}>
                <div className={styles.stepheading}>Universe</div>
                <div className={styles.bracketed}>&nbsp;&nbsp;(any one)</div>
                {indices.map((x, id) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="index"
                        id={id}
                        style={{ display: "none" }}
                      />
                      <label
                        for={id}
                        className={styles.index}
                        style={
                          activeIndex === id ? { background: "#D9DDFF" } : null
                        }
                        onClick={() => setactiveIndex(id)}
                      >
                        {x}
                      </label>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.leftmenu}>
              <div className={styles.bullet}>
                <div className={styles.num}>3</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.headrow}>
                <div className={styles.stepheading}>Factor</div>
                <div className={styles.bracketed}>
                  &nbsp;&nbsp;(can be more than one)
                </div>
              </div>
              <div className={styles.factors}>
                <div className={styles.inputboxes}>
                  {factors.map((x, id) => {
                    return (
                      <>
                        <div className={styles.factor}>
                          <input
                            className={styles.factorinput}
                            type="checkbox"
                            name="momentum"
                            id={id + "factor"}
                            checked={factorsBool[id]}
                            onClick={() => {
                              const arr = [];
                              factors.map((y, id2) => {
                                id2 === id
                                  ? arr.push(!factorsBool[id2])
                                  : arr.push(factorsBool[id2]);
                              });
                              setfactorsBool(arr);
                            }}
                          />
                          <label for={id + "factor"}>{x}</label>
                        </div>
                        {id === 4 && (
                          <div
                            className={styles.selectallbtn}
                            onClick={selectAll}
                          >
                            Select All
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
              <div className={styles.factortable}>
                <div
                  className={styles.avbtn}
                  onClick={() => {
                    scroll(500);
                  }}
                >
                  Average
                </div>
                <div className={styles.tablediv} ref={ref}>
                  <table className={styles.table}>
                    <thead style={{ display: "block" }}>
                      <tr className={styles.trhead}>
                        <th className={styles.col1head}></th>
                        {factorsBool.map((x, index) => {
                          return (
                            <>
                              {x && <th className={styles.col2head}>{factors[index]}</th>}
                            </>
                          )
                        })}
                        <th className={styles.col3head}>Average</th>
                      </tr>
                    </thead>
                    <tbody className={styles.nonhead}>
                      {
                        table1keys.map((x, index) => {
                          var temp = Object.keys(data[x])
                          return (
                            <tr >
                              <td className={styles.col1head}>{x}</td>
                              {factorsBool[0] && <td className={styles.col2}>{data[x].momentum}</td>}
                              {factorsBool[1] && <td className={styles.col2}>{data[x].liquidity}</td>}
                              {factorsBool[2] && <td className={styles.col2}>{data[x].size}</td>}
                              {factorsBool[3] && <td className={styles.col2}>{data[x].value}</td>}
                              {factorsBool[4] && <td className={styles.col2}>{data[x].volatility}</td>}
                              {factorsBool[5] && <td className={styles.col2}>{data[x].quality}</td>}
                              {factorsBool[6] && <td className={styles.col2}>{data[x].dividend}</td>}
                              <td className={styles.col3}>
                                {data[x].average}
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.step}>
            <div
              className={styles.leftmenu}
              style={{ backgroundColor: "white" }}
            >
              <div className={styles.bullet}>
                <div className={styles.num}>4</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.headrow}>
                <div className={styles.stepheading}>
                  Enter NSE symbols to compare
                </div>
                <div className={styles.bracketed}>
                  &nbsp;&nbsp;(seperated by comma)
                </div>
              </div>
              <input
                className={styles.nseip}
                type="text"
                placeholder="tcs,infy"
              ></input>
              <div className={styles.factortable}>
                <div className={styles.avbtn}>Average</div>
                <div className={styles.tablediv}>
                  <table className={styles.table}>
                    <thead style={{ display: "block" }}>
                      <tr className={styles.trhead}>
                        <th className={styles.col1head}></th>
                        {factorsBool.map((x, index) => {
                          return (
                            <>
                              {x && <th className={styles.col2head}>{factors[index]}</th>}
                            </>
                          )
                        })}
                        <th className={styles.col3head}>Average</th>
                      </tr>
                    </thead>
                    <tbody className={styles.nonhead}>
                      {
                        table1keys.map((x, index) => {
                          var temp = Object.keys(data[x])
                          return (
                            <tr >
                              <td className={styles.col1head}>{x}</td>
                              {factorsBool[0] && <td className={styles.col2}>{data[x].momentum}</td>}
                              {factorsBool[1] && <td className={styles.col2}>{data[x].liquidity}</td>}
                              {factorsBool[2] && <td className={styles.col2}>{data[x].size}</td>}
                              {factorsBool[3] && <td className={styles.col2}>{data[x].value}</td>}
                              {factorsBool[4] && <td className={styles.col2}>{data[x].volatility}</td>}
                              {factorsBool[5] && <td className={styles.col2}>{data[x].quality}</td>}
                              {factorsBool[6] && <td className={styles.col2}>{data[x].dividend}</td>}
                              <td className={styles.col3}>
                                {data[x].average}
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactorPortfolio;