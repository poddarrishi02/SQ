import { React, useState, useRef, useEffect } from "react";
import styles from "./factorportfolio.module.css";
import data from "../../assets/response.json";
// import DatePicker from '@mui/lab/DatePicker';
import { RiCloseLine } from "react-icons/ri";
import { DatePicker } from "react-rainbow-components";
import factorData from './factport_response.json';
const containerStyles = {
  maxWidth: 400,
  marginBottom: "10px"
};

function FactorPortfolio() {
  const [portfolioDate, setPortfolioDate] = useState({ date: new Date() });
  const [data, setData] = useState();

  useEffect(() => {
    fetch()
  }, [])
  function withCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const nm = "Name";
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const scroll2 = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const table1Indices = [0, 1, 2, 3, 4, 5, 10];
  const table2Indices = [0, 2, 5];
  const indices = ["NIFTY 200", "NIFTY 500", "BSE 100", "BSE 200", "BSE 500"];
  const [factorsBool, setfactorsBool] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(factorsBool);
  const factors = Object.keys(factorData.data[0]).map(fac => fac.toLocaleLowerCase);
  // const [factors, setfactors] = useState([
  //   "Momentum",
  //   "Liquidity",
  //   "Size",
  //   "Value",
  //   "Volatilty",
  //   "Quality",
  //   "Growth",
  // ]);
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
                        <th
                          style={{
                            minWidth: "0",
                            width: "5vw",
                            paddingLeft: "2vw",
                          }}
                        >
                          Name
                        </th>
                        {factorsBool[1] && <th>Liquidity</th>}
                        {factorsBool[3] && <th>Value</th>}
                        {factorsBool[4] && <th>Volatility</th>}
                        {factorsBool[5] && <th>Quality</th>}
                        <th style={{ paddingRight: "4vw" }}>Average</th>
                      </tr>
                    </thead>
                    <tbody className={styles.nonhead}>
                      {table1Indices.map((x) => {
                        return (
                          <tr>
                            <td
                              style={{
                                textAlign: "left",
                                width: "5vw",
                                minWidth: "0",
                                paddingLeft: "2vw",
                                background: "inherit",
                              }}
                            >
                              {data.Name[x]}
                            </td>
                            {factorsBool[1] && <td>{data.Liquidity[x]}</td>}
                            {factorsBool[3] && <td>{data.Value[x]}</td>}
                            {factorsBool[4] && <td>{data.Volatility[x]}</td>}
                            {factorsBool[5] && <td>{data.Quality[x]}</td>}
                            <td style={{ paddingRight: "0.5vw" }}>
                              <section style={{ marginRight: "2vw" }}>
                                Dummy Av
                              </section>
                            </td>
                          </tr>
                        );
                      })}
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
                {/* <div className={styles.avbtn} onClick={() => { scroll(500) }}>Average</div>
                                <div className={styles.tablediv} ref={ref}> */}
                <div className={styles.avbtn}>Average</div>
                <div className={styles.tablediv}>
                  <table className={styles.table}>
                    <thead style={{ display: "block" }}>
                      <tr className={styles.trhead}>
                        <th
                          style={{
                            minWidth: "0",
                            width: "5vw",
                            paddingLeft: "2vw",
                          }}
                        >
                          Name
                        </th>
                        {factorsBool[1] && <th>Liquidity</th>}
                        {factorsBool[3] && <th>Value</th>}
                        {factorsBool[4] && <th>Volatility</th>}
                        {factorsBool[5] && <th>Quality</th>}
                        <th style={{ paddingRight: "4vw" }}>Average</th>
                      </tr>
                    </thead>
                    <tbody className={styles.nonhead}>
                      {table2Indices.map((x) => {
                        return (
                          <tr>
                            <td
                              style={{
                                textAlign: "left",
                                width: "5vw",
                                minWidth: "0",
                                paddingLeft: "2vw",
                                background: "inherit",
                              }}
                            >
                              {data.Name[x]}
                            </td>
                            {factorsBool[1] && <td>{data.Liquidity[x]}</td>}
                            {factorsBool[3] && <td>{data.Value[x]}</td>}
                            {factorsBool[4] && <td>{data.Volatility[x]}</td>}
                            {factorsBool[5] && <td>{data.Quality[x]}</td>}
                            <td style={{ paddingRight: "1vw" }}>
                              <section style={{ marginRight: "2vw" }}>
                                Dummy Av
                              </section>
                            </td>
                          </tr>
                        );
                      })}
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
{
  /*                             <div className={styles.inputboxes}>
                                    <div className={styles.line1}>
                                        <div className={styles.factor}>
                                            <input className={styles.factorinput} type="checkbox" name="momentum" id="momentum" />
                                            <label for="momentum" >Momentum</label>
                                        </div>
                                        <div className={styles.factor}>
                                            <input className={styles.factorinput} type="checkbox" name="liquidity" id="liquidity" />
                                            <label for="liquidity" >Liquidity</label>
                                        </div>
                                        <div className={styles.factor}>
                                            <input className={styles.factorinput} type="checkbox" name="size" id="size" />
                                            <label for="size" >Size</label>
                                        </div>
                                    </div>
                                    <div className={styles.line2}>
                                        <div className={styles.factor}>
                                            <input className={styles.factorinput} type="checkbox" name="value" id="value" />
                                            <label for="value" >Value</label>
                                        </div>
                                        <div className={styles.factor}>
                                            <input className={styles.factorinput} type="checkbox" name="volatility" id="volatility" />
                                            <label for="volatility" >Volatility</label>
                                        </div>
                                        <div className={styles.viewallbtn}>Select All</div>
                                    </div>
                                    <div className={styles.line3}>
                                        <div className={styles.factor}>
                                            <input className={styles.factorinput} type="checkbox" name="quality" id="quality" />
                                            <label for="quality" >Quality</label>
                                        </div>
                                        <div className={styles.factor}>
                                            <input className={styles.factorinput} type="checkbox" name="growth" id="growth" />
                                            <label for="growth" >Growth</label>
                                        </div>
                                    </div>
                                </div> */
}
