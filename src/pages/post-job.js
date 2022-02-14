import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import PageWrapper from "../components/PageWrapper";
import Select from "../components/Core/Select";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });

  const router = useRouter();

  const defaultJobTypes = [
    { name: '2', value: "10-50", label: "10-50" },
    { name: '1', value: "50-100", label: "50-100" },
    { name: '3', value: "100-500", label: "100-500" },
    { name: '14', value: "500-2000", label: "500-2000" },
  ];
  
  const onSubmit = async (data) => {
    try {
      const result = await axios.post(
        "https://api.kuratedao.xyz/mintRow/1",
        {
          ...data,
        }
      );
      router.push("/");
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  
  return (
    <>
      <PageWrapper>
        <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center mt-14">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <h2 className="font-size-9 text-center mb-11">Post a job</h2>
                <div className="bg-white px-9 pt-9 pb-7 shadow-8 rounded-4">
                  <form
                    name="job"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="job" />
                    <div className="row">
                      <div className="col-12 mb-7">
                        <label
                          htmlFor="job_title"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Job Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Senior Designer"
                          {...register("job_title")}
                          required
                        />
                      </div>
                      {/*  */}
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="job_type"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Job Type
                        </label>
                        <select 
                          className="form-control"
                          {...register("job_type")}
                        >
                          <option value="">Select...</option>
                          <option value="tech">Tech</option>
                          <option value="marketing">Marketing</option>
                          <option value="design">Design</option>
                          <option value="bizdev">Bizdev</option>
                          <option value="sales">Sales</option>
                          <option value="community">Community</option>
                          <option value="legal">Legal</option>
                          <option value="analyst">Analyst</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {/*  */}
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="job_location"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Job Location
                        </label>
                        <select 
                          className="form-control"
                          {...register("job_location")}
                        >
                          <option value="remote">Remote</option>
                          <option value="miami">Miami</option>
                          <option value="austin">Austin</option>
                          <option value="san_francisco">San Francisco</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {/*  */}

                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="salary_low"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Salary Low (k USD)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="100"
                          {...register("salary_low")}
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="salary_high"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Salary High (k USD)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="200"
                          {...register("salary_high")}
                          required
                        />
                      </div>

                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="company_name"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ACME Crypto"
                          {...register("company_name")}
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="company_url"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Company URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="https://acme.xyz"
                          {...register("company_url")}
                        />
                      </div>
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="company_icon_url"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                        Company Icon URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="https://acme.xyz/icon.png"
                          {...register("company_icon_url")}
                        />
                      </div>

                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="apply_url"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Apply URL
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="https://acme.xyz/job/1"
                          {...register("apply_url")}
                        />
                      </div>



                      <div className="col-lg-12 mb-7">
                        <label
                          htmlFor="job_description"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Job description
                        </label>
                        <textarea
                          placeholder="Type job description"
                          className="form-control h-px-144"
                          {...register("job_description")}
                          required
                        ></textarea>
                      </div>

                      <div className="col-lg-12 pt-4">
                        <button
                          type="submit"
                          className="btn btn-primary text-uppercase w-100 h-px-48"
                        >
                          Post Job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
