import React from "react";
import { Tab, Nav } from "react-bootstrap";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive'
import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgF2 from "../../assets/image/l2/png/featured-job-logo-2.png";
import imgF3 from "../../assets/image/l2/png/featured-job-logo-3.png";
import imgF4 from "../../assets/image/l2/png/featured-job-logo-4.png";
import imgF5 from "../../assets/image/l2/png/featured-job-logo-5.png";

import imgF from "../../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../../assets/image/svg/icon-suitecase.svg";
import iconC from "../../assets/image/svg/icon-clock.svg";
import iconL2 from "../../assets/image/svg/icon-location.svg";
import iconD from "../../assets/image/svg/icon-dolor.svg";
import iconB from "../../assets/image/svg/icon-briefcase.svg";
import Offcanvas from "../../components/Offcanvas";
import { useRouter } from "next/router";
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const SearchTab = ({ productItems }) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [showSideJobDetails, setShowSideJobDetails] = React.useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1200px)'
  })

  React.useEffect(() => {
    if (productItems && productItems.length > 0) {
      const data = JSON.parse(productItems[0].json);
      setSelectedItem(data);
    } else {
      setSelectedItem(null);
    }
  }, [productItems]);

  const handleClickItem = (jobData) => {
    if (!isDesktopOrLaptop) {
      router.push(`/job-details/${jobData.id}`);
    } else {
      const data = JSON.parse(jobData.json);
      setSelectedItem(data);
      setShowSideJobDetails(true);
    }
  };

  return (
    <>
      <div className="row justify-content-center position-static">
        <Tab.Container defaultActiveKey="selected">
          <div className="col-12 col-xxl-8 col-xl-7 col-lg-10">
            <div className="Left">
              <Nav
                className="justify-content-center search-nav-tab nav nav-tabs border-bottom-0"
                id="search-nav-tab"
              >
                {productItems.map((item) => {
                  const data = JSON.parse(item.json);

                  const {
                    tag_1,
                    tag_2,
                    tag_3,
                    job_title,
                    company_name,
                    company_url,
                    location,
                    salary_low,
                    salary_high,
                  } = data;

                  const timestamp = item.timestamp


                  return (
                    <div
                      className="mb-8 p-0 w-100"
                      eventKey={
                        selectedItem &&
                        selectedItem.job_title === data.job_title
                          ? "selected"
                          : data.job_title
                      }
                      key={data.job_title}
                      onClick={() => handleClickItem(item)}
                    >
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 hover-border-green">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media align-items-center">
                              <div className="square-72 d-block mr-8">
                                <img src={imgF1.src} alt="" />
                              </div>
                              <div>
                                <h3 className="mb-0 font-size-6 heading-default-color">
                                  {job_title}
                                </h3>
                                <span className="font-size-3 text-default-color line-height-2 d-block">
                                  {company_name}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 text-right pt-7 pt-md-5">
                            <div className="media justify-content-md-end">
                              <div className="image mr-5 mt-2">
                                <img src={imgF.src} alt="" />
                              </div>
                              <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                                <span className="text-black-2">
                                  {salary_low}-{salary_high}
                                </span>{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row pt-8">
                          <div className="col-md-7">
                            <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                              <li>
                                <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">
                                  {tag_1}
                                </span>
                              </li>
                              <li>
                                <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">
                                  {tag_2}
                                </span>
                              </li>
                              <li>
                                <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">
                                  {tag_3}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5">
                            <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                <span
                                  className="mr-4"
                                  css={`
                                    margin-top: -2px;
                                  `}
                                >
                                  <img src={iconL.src} alt="" />
                                </span>
                                <span className="font-weight-semibold">
                                  {location}
                                </span>
                              </li>
                              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                <span
                                  className="mr-4"
                                  css={`
                                    margin-top: -2px;
                                  `}
                                >
                                  <img src={iconC.src} alt="" />
                                </span>
                                <span className="font-weight-semibold">
                                  {dayjs(timestamp).fromNow()}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Nav>
              <div className="text-center pt-5 pt-lg-13">
                <Link href="/#">
                  <a className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center">
                    Load More{" "}
                    <i className="fas fa-sort-down ml-3 mt-n2 font-size-4"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4 col-xl-5 col-lg-10 position-static d-none d-sm-flex">
            <Tab.Content>
              {selectedItem && (
                <Tab.Pane eventKey="selected">
                  <div className="bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 h-1413 overflow-y-scroll mt-9 mt-xl-0">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                      <div className="row">
                        <div className="col-12">
                          {/* <!-- media start --> */}
                          <div className="media align-items-center">
                            {/* <!-- media logo start --> */}
                            <div className="square-72 d-block mr-8">
                              <img src={imgF1.src} alt="" />
                            </div>
                            {/* <!-- media logo end --> */}
                            {/* <!-- media texts start --> */}
                            <div>
                              <h3 className="font-size-6 mb-0">
                                {selectedItem.job_title}
                              </h3>
                              <span className="font-size-3 text-gray line-height-2">
                                {selectedItem.company}
                              </span>
                            </div>
                            {/* <!-- media texts end --> */}
                          </div>
                          {/* <!-- media end --> */}
                        </div>
                      </div>
                      <div className="row pt-9">
                        <div className="col-12">
                          {/* <!-- card-btn-group start --> */}
                          <div className="card-btn-group">
                            <Link target="_blank" href={ selectedItem.company_url } rel="noopener noreferrer">
                              <a className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5">
                                Apply to this job
                              </a>
                            </Link>
                          </div>
                          {/* <!-- card-btn-group end --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                      <div className="row mb-5">
                        <div className="col-md-12">
                          <div className="media justify-content-md-start mb-6">
                            <div className="image mr-5">
                              <img src={iconL2.src} alt="" />
                            </div>
                            <p className="font-size-5 text-gray mb-0">
                              {selectedItem.location}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="media justify-content-md-start mb-6">
                            <div className="image mr-5">
                              <img src={iconD.src} alt="" />
                            </div>
                            <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                              {selectedItem.salary_low}-
                              {selectedItem.salary_high}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="media justify-content-md-start mb-md-0 mb-6">
                            <div className="image mr-5">
                              <img src={iconB.src} alt="" />
                            </div>
                            <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                              {selectedItem.job_type}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts">
                      <div className="row">
                        <div className="col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11">
                          <div className="">
                            <p className="mb-4 font-size-4 text-gray">
                              Job Description
                            </p>
                            <p className="font-size-4 text-black-2 mb-7">
                              {selectedItem.job_description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              )}
            </Tab.Content>
          </div>
        </Tab.Container>
        {selectedItem && (
          <div className="d-flex d-sm-none">
            <Offcanvas
              show={showSideJobDetails}
              onHideOffcanvas={() => setShowSideJobDetails(false)}
            >
              <div className="ml-xl-8 h-1413">
                {/* <!-- Single Featured Job --> */}
                <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                  <div className="row">
                    <div className="col-12">
                      {/* <!-- media start --> */}
                      <div className="media align-items-center">
                        {/* <!-- media logo start --> */}
                        <div className="square-72 d-block mr-8">
                          <img src={imgF1.src} alt="" />
                        </div>
                        {/* <!-- media logo end --> */}
                        {/* <!-- media texts start --> */}
                        <div>
                          <h3 className="font-size-6 mb-0">
                            {selectedItem.job_title}
                          </h3>
                          <span className="font-size-3 text-gray line-height-2">
                            {selectedItem.company}
                          </span>
                        </div>
                        {/* <!-- media texts end --> */}
                      </div>
                      {/* <!-- media end --> */}
                    </div>
                  </div>
                  <div className="row pt-9">
                    <div className="col-12">
                      {/* <!-- card-btn-group start --> */}
                      <div className="card-btn-group">
                        <Link target="_blank" href={ selectedItem.company_url } rel="noopener noreferrer">
                          <a className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5">
                            Apply to this job
                          </a>
                        </Link>
                      </div>
                      {/* <!-- card-btn-group end --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- End Single Featured Job --> */}
                <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                  <div className="row mb-5">
                    <div className="col-md-12">
                      <div className="media justify-content-md-start mb-6">
                        <div className="image mr-5">
                          <img src={iconL2.src} alt="" />
                        </div>
                        <p className="font-size-5 text-gray mb-0">
                          {selectedItem.location}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="media justify-content-md-start mb-6">
                        <div className="image mr-5">
                          <img src={iconD.src} alt="" />
                        </div>
                        <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                          {selectedItem.salary_low}-{selectedItem.salary_high}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="media justify-content-md-start mb-md-0 mb-6">
                        <div className="image mr-5">
                          <img src={iconB.src} alt="" />
                        </div>
                        <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                          {selectedItem.jobtype}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-lg-0 mb-10">
                        <span className="font-size-4 d-block mb-4 text-gray">
                          Type of corporation
                        </span>
                        <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">
                          B2B &amp; B2C
                        </h6>
                      </div>
                      <div className="tags">
                        <p className="font-size-4 text-gray mb-0">Soft Skill</p>
                        <ul className="list-unstyled mr-n3 mb-0">
                          <li className="d-block font-size-4 text-black-2 mt-2">
                            <span className="d-inline-block mr-2">•</span>
                            Slack
                          </li>
                          <li className="d-block font-size-4 text-black-2 mt-2">
                            <span className="d-inline-block mr-2">•</span>
                            Basic English
                          </li>
                          <li className="d-block font-size-4 text-black-2 mt-2">
                            <span className="d-inline-block mr-2">•</span>
                            Well Organized
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mb-lg-0 mb-8">
                      <div className="">
                        <span className="font-size-4 d-block mb-4 text-gray">
                          Career Level
                        </span>
                        <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">
                          Project Manangement
                        </h6>
                      </div>
                      <div className="tags">
                        <p className="font-size-4 text-gray mb-3">
                          Technical Skill
                        </p>
                        <ul className="list-unstyled d-flex align-items-center flex-wrap">
                          {selectedItem.tag_1 && (
                            <li>
                              <a
                                href="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                {selectedItem.tag_1}
                              </a>
                            </li>
                          )}
                          {selectedItem.tag_2 && (
                            <li>
                              <a
                                href="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                {selectedItem.tag_2}
                              </a>
                            </li>
                          )}
                          {selectedItem.tag_3 && (
                            <li>
                              <a
                                href="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                {selectedItem.tag_3}
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <span className="font-size-4 d-block mb-4 text-gray">
                          Company size
                        </span>
                        <h6 className="font-size-5 text-black-2 font-weight-semibold mb-0">
                          11-50 employees
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <span className="font-size-4 d-block mb-4 text-gray">
                          Posted Time
                        </span>
                        <h6 className="font-size-5 text-black-2 font-weight-semibold mb-0">
                          {dayjs(selectedItem.time).format("D MMMM YYYY")}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts">
                  <div className="row">
                    <div className="col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11">
                      <div className="">
                        <p className="mb-4 font-size-4 text-gray">
                          Job Description
                        </p>
                        <p className="font-size-4 text-black-2 mb-7">
                          {selectedItem.job_description}
                        </p>
                      </div>
                      <div className="">
                        <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
                          Your Role:
                        </span>
                        <p className="font-size-4 text-black-2 mb-7">
                          We’re looking for a passionate individual to design
                          beautiful and functional products for our customers at
                          Gubagoo. We move very fast and you will be expected to
                          contribute to a cross-functional product development
                          squad, that includes product managers and developers,
                          to deliver the UX and UI for the team to bring to
                          life.
                        </p>
                        <p className="font-size-4 text-black-2 mb-7">
                          We are serious about remote work. You can work for
                          from anywhere.
                        </p>
                        <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
                          What you will be doing:
                        </span>
                        <ul className="list-unstyled">
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-2">
                            <span className="d-inline-block mr-7">•</span>
                            Contribute new controls or design improvements to
                            our
                          </li>
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                            <span className="d-inline-block mr-7">•</span>
                            Take ownership of the successful delivery of
                            features
                          </li>
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                            <span className="d-inline-block mr-7">•</span>
                            Help set and achieve quarterly goals
                          </li>
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                            <span className="d-inline-block mr-7">•</span>
                            Ship a TON of product improvements and features
                          </li>
                        </ul>
                        <Link target="_blank" href={ selectedItem.company_url } rel="noopener noreferrer">
                          <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6">
                            Apply to this job
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Offcanvas>
          </div>
        )}
      </div>
    </>
  );
};
export default SearchTab;
