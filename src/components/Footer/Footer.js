import React, { useContext } from "react";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";
import imgM from "../../assets/image/l1/png/message.png";

const Footer = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <footer className="footer bg-ebony-clay dark-mode-texts">
        <div className="container  pt-12 pt-lg-19 pb-10 pb-lg-19">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-lg-0 mb-9">
              {/* <!-- footer logo start --> */}
              <Logo white className="footer-logo mb-14" />
              {/* <!-- footer logo End --> */}
              {/* <!-- media start --> */}
              <div className="media mb-11">
                <img src={imgM.src} className="align-self-center mr-3" alt="" />
                <div className="media-body pl-5">
                  <p className="mb-0 font-size-4 text-white">Contact us at</p>
                  <Link href="/#">
                    <a className="mb-0 font-size-4 font-weight-bold">
                      support@daovelopers.xyz
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- media start --> */}
              {/* <!-- widget social icon start --> */}
              <div className="social-icons">
                <ul className="pl-0 list-unstyled d-flex align-items-end ">
                  <li className="d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color">
                    Follow us on:
                  </li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3">
                    <Link href="https://twitter.com/daovelopers">
                      <a className="hover-color-primary heading-default-color">
                        <i className="fab fa-twitter font-size-3 pt-2"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3">
                    <Link href="https://instagram.com/kurate_dao">
                      <a className="hover-color-primary heading-default-color">
                        <i className="fab fa-instagram font-size-3 pt-2"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- widget social icon end --> */}
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget2 mb-md-0 mb-13">
                    {/* <!-- footer widget title start --> */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                      About
                    </p>
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6">
                        <Link href="http://kuratedao.xyz/database/12">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Stake on a job
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="http://kuratedao.xyz/">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Built using KurateDAO
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="http://docs.kuratedao.xyz/">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            KurateDAO White Paper
                          </a>
                        </Link>
                      </li>
                    </ul>
                    {/* <!-- widget social menu end --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
