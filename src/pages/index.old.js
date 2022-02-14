import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

import SearchTab from "../sections/search/SearchTab";
// import Offcanvas from "../components/Offcanvas";

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
  const [searchData, setSearchData] = React.useState([]);
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);
  const [selectedSalary, setSelectedSalary] = React.useState("");

  const handleChangeKeyword = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = () => {
    handleAllFilter(searchKeyword, selectedSalary);
  };

  const handleChangeSalaryRange = (option) => {
    setSelectedSalary(option.value);
    handleAllFilter(searchKeyword, option.value);
  };

  const handleAllFilter = (searchKey, salaryRange) => {
    if (searchKey || salaryRange) {
      console.log("include");
      setFilteredData(
        searchData.filter((item) => {
          const jobData = JSON.parse(item.json);

          const { job_title, job_description, salary_low, salary_high } =
            jobData;

          const lowSalary = parseFloat(salary_low);
          const highSalary = parseFloat(salary_high);

          let searchKeyIncluded = true;
          let inSalaryRange = true;

          if (searchKey) {
            searchKeyIncluded =
              job_title.toLowerCase().includes(searchKey.toLowerCase()) ||
              job_description.toLowerCase().includes(searchKey.toLowerCase());
          }

          if (salaryRange === "5k") {
            inSalaryRange = highSalary < 5000;
          } else if (salaryRange === "5k10k") {
            inSalaryRange =
              (lowSalary >= 5000 && lowSalary <= 10000) ||
              (highSalary <= 10000 && highSalary >= 5000);
          } else if (salaryRange === "10k20k") {
            inSalaryRange =
              (lowSalary >= 10000 && lowSalary <= 20000) ||
              (highSalary <= 20000 && highSalary >= 10000);
            console.log("salaryRange", inSalaryRange);
          } else if (salaryRange === "20k") {
            inSalaryRange = lowSalary >= 20000;
          }

          return searchKeyIncluded && inSalaryRange;
        })
      );
    } else {
      console.log("hey", searchData);
      setFilteredData(searchData);
    }
  };

  React.useEffect(() => {
    const url = "https://api.kuratedao.xyz/overview/1";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchData(data.included);
        setFilteredData(data.included);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  console.log("filteredData", filteredData);

  return (
    <>
      <PageWrapper>
        <div className="bg-black-2 mt-22 mt-lg-22 pt-18 pt-lg-13 pb-13">
          <div className="container">
            <div className="row">
              <div className="col-12">
              </div>
            </div>
          </div>
        </div>

        <div className="bg-default-1 pt-9 pb-13 pb-xl-30 pb-13 position-relative overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-12">
                <form className="mb-8">
                  <div className="search-filter from-group d-flex align-items-center flex-wrap">
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultJobTypes}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultSalaryRange}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                        onChange={handleChangeSalaryRange}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultExpLevels}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                    <div className="mr-5 mb-5">
                      <Select
                        options={defaultPostedTimes}
                        className="font-size-4"
                        // border={false}
                        css={`
                          min-width: 175px;
                        `}
                      />
                    </div>
                  </div>
                </form>
                <div className="d-flex align-items-center justify-content-between mb-6">
                  <h5 className="font-size-4 font-weight-normal text-gray">
                    Showing{' '}
                    <span className="text-black-2">{filteredData.length}</span> web3 jobs
                  </h5>
                </div>
              </div>
            </div>
            <SearchTab productItems={filteredData} />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}


// import React from "react";
// import PageWrapper from "../components/PageWrapper";
// import Hero from "../sections/landing1/Hero";
// import Brands from "../sections/landing1/Brands";
// import Categories from "../sections/landing1/Categories";
// import Content1 from "../sections/landing1/Content1";
// import FeaturedJobs from "../sections/landing1/FeaturedJobs";
// import Content2 from "../sections/landing1/Content2";
// import { useRouter } from "next/router";

// export default function MainPage() {
//   // const router = useRouter();

//   // React.useEffect(() => {
//   //   router.push("/search-list-2");
//   // }, [router]);





//   // return (
//   //   <>
//   //     <PageWrapper
//   //       headerConfig={{
//   //         bgClass: "dynamic-sticky-bg",
//   //       }}
//   //     >
//   //       <Hero />
//   //       <Brands />
//   //       <Categories />
//   //       <Content1 />
//   //       <FeaturedJobs />
//   //       <Content2 />
//   //     </PageWrapper>
//   //   </>
//   // );
// }


