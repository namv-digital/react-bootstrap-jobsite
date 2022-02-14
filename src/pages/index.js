import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import JobListing from "../components/JobListing";

import { Select } from "../components/Core";
import Sidebar from "../components/Sidebar";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";

import imgF from "../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../assets/image/svg/icon-suitecase.svg";
import iconC from "../assets/image/svg/icon-clock.svg";


const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];

const defaultJobTypes = [
  { value: "ft", label: "Full Time" },
  { value: "pt", label: "Part Time" },
  { value: "remote", label: "Remote" },
  { value: "contract", label: "Contract" },
];
const defaultSalaryRange = [
  { value: "5k", label: "< 5k" },
  { value: "5k10k", label: "5k - 10k" },
  { value: "10k20k", label: "10k - 20k" },
  { value: "20k", label: "> 20k" },
];
const defaultExpLevels = [
  { value: "entry", label: "Entry" },
  { value: "jn", label: "Junior" },
  { value: "mid", label: "Mid Level" },
  { value: "sr", label: "Sinior" },
];

const defaultPostedTimes = [
  { value: "jan", label: "January" },
  { value: "May", label: "May" },
  { value: "Jul", label: "July" },
  { value: "Oct", label: "October" },
];

export default function SearchListTwo() {

    const [filteredData, setFilteredData] = React.useState([]);
    const [searchData, setSearchData] = React.useState([]);

    React.useEffect(() => {
        const url = "https://api.kuratedao.xyz/overview/1";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setSearchData(data.included);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
      }, []);

//   React.useEffect(() => {
//     const url = "https://api.kuratedao-dev.xyz/overview/1";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setSearchData(data.included);
//         setFilteredData(data.included);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log("filteredData", filteredData);

//   React.useEffect(() => {
//     if (productItems && productItems.length > 0) {
//       const data = JSON.parse(productItems[0].json);
//       setSelectedItem(data);
//     } else {
//       setSelectedItem(null);
//     }
//   }, [productItems]);

  const handleClickItem = (jobData) => {
    router.push(`/job-details/${jobData.id}`);
  };

  return (
    <>
      <PageWrapper>
        <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-5 col-xs-8">
                <Sidebar />
              </div>
              {/* <!-- Main Body --> */}
              <div className="col-12 col-xl-8 col-lg-8">
                {/* <!-- form --> */}
                <form action="/" className="search-form">
                  <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          placeholder="UI Designer"
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div>                      
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                        <Select
                          options={defaultCountries}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-city ends --> */}
                    </div>
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
                <div className="pt-12">
                  <div className="d-flex align-items-center justify-content-between mb-6">
                    <h5 className="font-size-4 font-weight-normal text-gray">
                      <span className="heading-default-color">{searchData.length}</span>
                      {" "}results for{" "}
                      <span className="heading-default-color">UI Designer</span>
                    </h5>
                    {/* <div className="d-flex align-items-center result-view-type">
                      <Link href="/search-list">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active">
                          <i className="fa fa-list-ul"></i>
                        </a>
                      </Link>
                      <Link href="/search-grid">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray">
                          <i className="fa fa-th-large"></i>
                        </a>
                      </Link>
                    </div> */}
                  </div>
                  {searchData && searchData.map((data)=>{
                    return <JobListing joblisting={data} />
                  })}

                  {/* <div className="text-center pt-5 pt-lg-13">
                    <Link href="/#">
                      <a className="text-green font-weight-bold text-uppercase font-size-3">
                        Load More <i className="fas fa-sort-down ml-3"></i>
                      </a>
                    </Link>
                  </div> */}
                </div>

                {/* <!-- form end --> */}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}