
import { useState } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  fullName: "",
  fatherName: "",
  dateOfBirth: "",
  gender: "",
  cnic: "",
  nationality: "",
  profilePicture: "",
  email: "",
  phone: "",
  country: "",
  province: "",
  city: "",
  address: "",
  postalCode: "",
  qualification: "",
  degree: "",
  institute: "",
  board: "",
  passingYear: "",
  obtainedMarks: "",
  cgpa: "",
  jobTitle: "",
  companyName: "",
  experience: "",
  employmentStatus: "",
  resume: "",
  linkedin: "",
  github: "",
  portfolio: ""
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );

    if (!loggedInUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const allForms = JSON.parse(
      localStorage.getItem("submittedForms") || "[]"
    );

    const newForm = {
      ...formData,
      accountEmail: loggedInUser.email,
      submittedAt: new Date().toISOString()
    };

    localStorage.setItem(
      "submittedForms",
      JSON.stringify([...allForms, newForm])
    );

    alert("Form submitted successfully!");

    setFormData({
      fullName: "",
      fatherName: "",
      dateOfBirth: "",
      gender: "",
      cnic: "",
      nationality: "",
      profilePicture: "",
      email: "",
      phone: "",
      country: "",
      province: "",
      city: "",
      address: "",
      postalCode: "",
      qualification: "",
      degree: "",
      institute: "",
      board: "",
      passingYear: "",
      obtainedMarks: "",
      totalMarks: "",
      cgpa: "",
      currentlyStudying: "",
      jobTitle: "",
      companyName: "",
      experience: "",
      employmentStatus: "",
      expectedSalary: "",
      resume: "",
      linkedin: "",
      github: "",
      portfolio: ""
    });
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelClass = "mb-2 block font-medium text-slate-700";

  const sectionClass =
    "rounded-2xl bg-white p-6 shadow-sm sm:p-8";

  const fields = [
    {
      title: "Personal Information",
      items: [
        ["fullName", "Full Name", "text", true],
        ["fatherName", "Father Name", "text", true],
        ["dateOfBirth", "Date of Birth", "date", true],
        ["gender", "Gender", "select", true, ["Male", "Female", "Other"]],
        ["cnic", "CNIC Number", "text", false],
        ["nationality", "Nationality", "text", true],
       
      ]
    },
    {
      title: "Contact Information",
      items: [
        ["email", "Contact Email", "email", true],
        ["phone", "Mobile Number", "tel", true],
        ["country", "Country", "text", true],
        ["province", "Province / State", "text", true],
        ["city", "City", "text", true],
        ["address", "Complete Address", "textarea", true],
        ["postalCode", "Postal Code", "text", false]
      ]
    },
    {
      title: "Education Details",
      items: [
        ["qualification", "Qualification", "select", true, ["Matric", "Intermediate",  "Bachelor's", "Master's"]],
        ["degree", "Degree / Certificate", "text", true],
        ["institute", "Institute / University", "text", true],
        ["board", "Board Name", "text", false],
        ["passingYear", "Passing Year", "number", true],
        ["obtainedMarks", "Obtained Marks", "number", false],
        ["cgpa", "Percentage / CGPA", "text", false],
  
      ]
    },
    {
      title: "Professional Details",
      items: [
        ["jobTitle", "Job Title", "text", false],
        ["companyName", "Company Name", "text", false],
        ["experience", "Experience", "number", false],
        ["employmentStatus", "Employment Status", "select", false, ["Student", "Employed"]],
        ["linkedin", "LinkedIn Profile", "url", false],
        ["github", "GitHub Profile", "url", false],
        ["portfolio", "Portfolio Website", "url", false]
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            Complete Information Form
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((section, index) => (
            <section key={section.title} className={sectionClass}>
              <h2 className="mb-6 border-b border-slate-200 pb-4 text-xl font-bold text-slate-800">
                {index + 1}. {section.title}
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {section.items.map(([name, label, type, required, options]) => (
                  <div
                    key={name}
                    className={type === "textarea" ? "sm:col-span-2" : ""}
                  >
                    <label className={labelClass} htmlFor={name}>
                      {label}
                      {required && <span className="text-red-500"> *</span>}
                    </label>

                    {type === "select" ? (
                      <select
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className={inputClass}
                        required={required}
                      >
                        <option value="">Select {label}</option>
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : type === "textarea" ? (
                      <textarea
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={`Enter ${label.toLowerCase()}`}
                        className={inputClass}
                        rows={3}
                        required={required}
                      />
                    ) : (
                      <input
                        id={name}
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={
                          type === "date"
                            ? undefined
                            : `Enter ${label.toLowerCase()}`
                        }
                        className={inputClass}
                        required={required}
                        min={type === "number" ? "0" : undefined}
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className={sectionClass}>
            <h2 className="mb-4 text-xl font-bold text-slate-800">
              Profile Picture & Resume
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="profilePicture">
                  Profile Picture
                </label>
                <input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profilePicture: e.target.files[0]?.name || ""
                    })
                  }
                  className={inputClass}
                />
                <p className="mt-2 text-sm text-slate-500">
                
                </p>
              </div>

              <div>
                <label className={labelClass} htmlFor="resume">
                  Resume / CV
                </label>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      resume: e.target.files[0]?.name || ""
                    })
                  }
                  className={inputClass}
                />
                <p className="mt-2 text-sm text-slate-500">
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() =>
                setFormData(
                  Object.fromEntries(
                    Object.keys(formData).map((key) => [
                      key,
                      key === "country" ? "Pakistan" : ""
                    ])
                  )
                )
              }
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Reset Form
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
