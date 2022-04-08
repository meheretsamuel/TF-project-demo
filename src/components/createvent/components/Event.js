import React from "react";

import PckCard from "../../cards/PckCard";

import "./ceComp.css";

import romaSample from "../../../assets/images/clr-circles/roma.jpg";

export const sample = {
    title: "Sample Event",
    desc: "You are cordially invited. You are cordially invited. You are cordially invited. You are cordially invited.",
    ftr: {
        1: "Expecting: 30",
        2: "Date: 5/24/2021",
        3: "Venue: Generic Venue", 
    },
    img: romaSample,
    lecolor: "#02a499",
    button: "Invite",
    where: "/api/sendInvite",
    circled: true,
};

function Event(props) {
    if (props.eventname == "none") return (
        <div>

        </div>
    );
    else
    return (
        <div>
            {" "}
            <PckCard {...props} />
            {console.log(props)}
        </div>
    );
}

export default Event;
