"use client"

import React from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date("2023-08-10");

const OfferTime = () => {
    return (
        <Countdown className="text-yellow-500 font-bold text-3xl md:text-5xl" date={endingDate} />
    );
}

export default OfferTime;
