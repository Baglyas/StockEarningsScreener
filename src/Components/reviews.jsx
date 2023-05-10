import React, { useState , Component} from "react";

function Reviews({...props}) {
  const revs = [`May-02-23 04:42PM
    TScan Therapeutics Announces Upcoming Trial in Progress Poster Presentation at the American Society of Gene and Cell Therapy 26th Annual Meeting
    (GlobeNewswire)
    +26.22%`,
    `Apr-10-23 07:00AM	
    TScan Therapeutics Announces Appointment of Barbara Klencke, M.D., to its Board of Directors
    (GlobeNewswire)`,
    `Mar-31-23 08:00AM	
    TScan Therapeutics Announces CEO Transition
    (GlobeNewswire)
    -18.29%`,
    `Mar-14-23 07:00AM	
    TScan Therapeutics Announces First Patient Dosed in Phase 1 Umbrella Clinical Trial Evaluating TSC-100 and TSC-101 for the Treatment of Hematologic Malignancies
    (GlobeNewswire)`,
    `Mar-13-23 04:05PM	
    TScan Therapeutics to Participate in the Barclays Global Healthcare Conference
    (GlobeNewswire)
    -13.31%`,
    `Mar-10-23 05:12AM	
    TScan Therapeutics Full Year 2022 Earnings: Misses Expectations
    (Simply Wall St.)`,
    `Mar-08-23 07:00AM	
    TScan Therapeutics Reports Fourth Quarter and Full Year 2022 Financial Results and Highlights Upcoming Milestones
    (GlobeNewswire)`,
    `Mar-01-23 07:00AM	
    TScan Therapeutics to Participate in the Cowen 43rd Annual Health Care Conference
    (GlobeNewswire)
    +6.78%`,
    `Feb-21-23 07:00AM	
    TScan Therapeutics Announces Presentation at the H.C. Wainwright Cell Therapy Virtual Conference
    (GlobeNewswire)`
    ]
    
  return(
    <>
      {revs.map((rev) => {
      return (
        <div key={crypto.randomUUID()}
        className="col-span-1 px-4 py-2 bg-slate-200 shadow-lg my-2 rounded-xl hover:bg-slate-300 text-left">
          {rev}
        </div>
      )
      })}
    </>
  )
}

export default Reviews;