'use client';
import Image from 'next/image';
import React, { useState } from 'react';

function Services() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='bg-[url("/bg-3.png")] bg-bg bg-cover bg-center min-h-screen     max-w-full' >
      <div className="  pl-10 pr-10 pb-8">
        <div className="sm:text-6xl pt-6 text-3xl font-bold flex justify-center text-white pb-8">Our Services</div>
        <div className="grid sm:grid-cols-3 mt-4 max-w-full sm:ml-5 ml-0 mr-0 gap-8">
          {/* First 3 Services */}
          <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
            <figure className="h-1/2">
              <img src="/assigment.jpg" alt="Assignment" className="object-cover w-full h-full rounded-t-md" />
            </figure>
            <div className="card-body p-4 flex-1 flex flex-col justify-between">
              <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Assignment Assistant</h2>
              <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                We provide personalized support for all types of assignments, from simple essays to complex projects. Our team ensures your work is thoroughly researched, well-written, and meets academic standards.
              </p>
              <div className="card-actions flex justify-end">
                <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
            <figure className="h-1/2">
              <img src="/essay.jpg" alt="Essay Writing" className="object-cover w-full h-full rounded-t-md" />
            </figure>
            <div className="card-body p-4 flex-1 flex flex-col justify-between">
              <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Essay Writing</h2>
              <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                Need a standout essay? Our experienced writers craft engaging, structured essays tailored to your specific topic and requirements, helping you make a strong impression.
              </p>
              <div className="card-actions flex justify-end">
                <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
            <figure className="h-1/2">
              <img src="/research.jpg" alt="Research Papers" className="object-cover w-full h-full rounded-t-md" />
            </figure>
            <div className="card-body p-4 flex-1 flex flex-col justify-between">
              <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Research Papers</h2>
              <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                Get comprehensive support for your research papers, including topic selection, data analysis, and writing. We ensure your research is thorough, original, and professionally presented.
              </p>
              <div className="card-actions flex justify-end">
                <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Additional Services - Toggled */}
          {nav && (
            <>
              <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
                <figure className="h-1/2">
                  <img src="/proposal.jpg" alt="Research Proposals" className="object-cover w-full h-full rounded-t-md" />
                </figure>
                <div className="card-body p-4 flex-1 flex flex-col justify-between">
                  <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Research Proposals</h2>
                  <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                    Craft a compelling research proposal with our help. We assist in developing a clear, well-structured proposal that outlines your research objectives, methodology, and significance.
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
                <figure className="h-1/2">
                  <img src="/thesis.jpg" alt="Thesis Writing" className="object-cover w-full h-full rounded-t-md" />
                </figure>
                <div className="card-body p-4 flex-1 flex flex-col justify-between">
                  <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Thesis Writing</h2>
                  <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                    Navigating thesis writing can be complex. We offer end-to-end support, from topic selection and research to writing and revisions, ensuring your thesis is detailed and academically sound.
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
                <figure className="h-1/2">
                  <img src="/Dissertations.jpg" alt="Dissertations" className="object-cover w-full h-full rounded-t-md" />
                </figure>
                <div className="card-body p-4 flex-1 flex flex-col justify-between">
                  <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Dissertations</h2>
                  <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                    Receive complete dissertation services, including planning, research, writing, and editing. We help you produce a detailed, well-organized dissertation that meets all academic requirements.
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
                <figure className="h-1/2">
                  <img src="/case.jpg" alt="Case Studies" className="object-cover w-full h-full rounded-t-md" />
                </figure>
                <div className="card-body p-4 flex-1 flex flex-col justify-between">
                  <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Case Studies</h2>
                  <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                    Create insightful case studies with our assistance. We handle case selection, data analysis, and writing, ensuring your case study is thorough and well-documented.
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
                <figure className="h-1/2">
                  <img src="/reports.jpg" alt="Reports" className="object-cover w-full h-full rounded-t-md" />
                </figure>
                <div className="card-body p-4 flex-1 flex flex-col justify-between">
                  <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Reports</h2>
                  <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                    We help you craft clear, concise reports for academic or professional purposes. Our team ensures your reports are well-structured and effectively communicate your findings.
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card bg-white w-full sm:w-96 shadow-xl h-96 rounded-md mx-auto flex flex-col">
                <figure className="h-1/2">
                  <img src="/presentation.jpg" alt="Presentations" className="object-cover w-full h-full rounded-t-md" />
                </figure>
                <div className="card-body p-4 flex-1 flex flex-col justify-between">
                  <h2 className="card-title text-center sm:text-2xl text-xl font-medium">Presentations</h2>
                  <p className="text-sm sm:text-base leading-5 sm:leading-6 flex-grow overflow-hidden">
                    Deliver impactful presentations with our help. We assist with creating visually appealing slides and clear, engaging content that effectively conveys your message.
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn mt-4 bg-bg text-white btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex mt-4 justify-center items-center">
          <button className="bg-white text-bg text-2xl p-2 rounded-md mb-10" onClick={handleClick}>
            {nav ? 'View Less Services' : 'View All Services'}
          </button>
        </div>
      </div></div>
    
  );
}

export default Services;
