import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../partials/Header";

function Contact() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function submitForm() {
    setLoading(true);

    try {
      const response = await fetch(
        `https://us-central1-bitbybite-dotxyz.cloudfunctions.net/sendContactEmail?company=${company}&name=${name}&email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);
      if (response.ok) {
        console.log("Email sent");
        navigate("/");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Contact us</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitForm();
                  }}
                >
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Company <span className="text-black-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your company name"
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Name <span className="text-black-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-black-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        style={{
                          backgroundColor:
                            "rgba(37, 99, 235, var(--tw-bg-opacity))",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.25rem",
                          width: "100%",
                          opacity: isLoading ? 0.5 : 1,
                          cursor: isLoading ? "not-allowed" : "pointer",
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span
                              style={{
                                display: "inline-block",
                                width: "1rem",
                                height: "1rem",
                                marginRight: "0.5rem",
                                borderTop: "2px solid white",
                                borderRadius: "50%",
                                animation: "spin 1s linear infinite",
                              }}
                            ></span>
                            Loading...
                          </>
                        ) : (
                          "Get in touch"
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    Our typical response time is 24-48 hours
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
