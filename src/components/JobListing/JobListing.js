import React, { useContext } from "react";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";
import imgM from "../../assets/image/l1/png/message.png";
import imgF from "../../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../../assets/image/svg/icon-suitecase.svg";
import iconC from "../../assets/image/svg/icon-clock.svg";
import iconL2 from "../../assets/image/svg/icon-location.svg";
import iconD from "../../assets/image/svg/icon-dolor.svg";
import iconB from "../../assets/image/svg/icon-briefcase.svg";
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

class JobListing extends React.Component {
    // const gContext = useContext(GlobalContext);

    render() {
        const joblisting = JSON.parse(this.props.joblisting.json)
        const timestamp = this.props.joblisting.timestamp*1000
        return (
            <>
                <div className="mb-8">
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="media align-items-center">
                            <div className="square-72 d-block mr-8">
                                <img src={joblisting.icon} alt="" />
                            </div>
                            <div>
                                <h3 className="mb-0">
                                <Link href={"/job-details/" + this.props.joblisting.id}>
                                    <a className="font-size-6 heading-default-color">
                                    {joblisting.job_title}
                                    </a>
                                </Link>
                                </h3>
                                <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                    {joblisting.company_name}
                                </a>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                            <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                                <img src={imgF.src} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                                <span className="text-black-2">{joblisting.salary_low}-{joblisting.salary_high}K</span> USD
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="row pt-8">
                        <div className="col-md-7">
                            <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                                <li>
                                    <Link href="/#">
                                    <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                        {joblisting.tag_1}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                    <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                        {joblisting.tag_2}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                    <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                        {joblisting.tag_3}
                                    </a>
                                    </Link>
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
                                {joblisting.job_location}
                                </span>
                            </li>
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                <span
                                className="mr-4"
                                css={`
                                    margin-top: -2px;
                                `}
                                >
                                <img src={iconS.src} alt="" />
                                </span>
                                <span className="font-weight-semibold">
                                {joblisting.job_type}
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
            </>
        );
    };
}

export default JobListing;
