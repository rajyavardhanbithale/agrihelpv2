import React from "react";

import './main.css'
import './topIcon.css'


import ThunderCloud from "../icons/ThunderCloud";
import RainCloud from "../icons/RainCloud";

import SnowCloud from "../icons/SnowCloud";
import SunCloud from "../icons/SunCloud";
import SunShine from "../icons/SunShine";
import Wind from "../icons/Wind";
import RainDrizzle from "../icons/RainDrizzle";

function Bottom(props) {
    const { forecast } = props;

    const IconComponent = ({ icon, className }) => {
        let DynamicComponent;

        switch (icon) {
            case "ThunderCloud":
                DynamicComponent = ThunderCloud;
                break;
            case "RainDrizzle":
                DynamicComponent = RainDrizzle;
                break;
            case "RainCloud":
                DynamicComponent = RainCloud;
                break;
            case "SnowCloud":
                DynamicComponent = SnowCloud;
                break;
            case "Wind":
                DynamicComponent = Wind;
                break;
            case "SunCloud":
                DynamicComponent = SunCloud;
                break;
            case "SunShine":
                DynamicComponent = SunShine;
                break;
            default:
                DynamicComponent = Wind;
        }
        return (
            <React.Suspense fallback={<div>Loading.......</div>}>
                <DynamicComponent className={className} />
            </React.Suspense>
        );
    };
   
    return (
        <>
            <main className="main-container1">
            <div className="next-5-days">
                <h2 className="next-5-days__heading">Next 5 days</h2>

                {forecast.map((data, index) => (
                    <div className="next-5-days__container" key={index}>
                        <div className="next-5-days__row">
                            <div className="next-5-days__date">
                                {data && data.day && data.day.slice(0, 3)}
                                <div className="next-5-days__label">
                                    {data && data.dayMonth}
                                </div>
                            </div>

                            <div className="next-5-days__low">
                                {data && data.tempMin}&deg;
                                <div className="next-5-days__label">Low</div>
                            </div>

                            <div className="next-5-days__high">
                                {data && data.tempMax}&deg;
                                <div className="next-5-days__label">High</div>
                            </div>

                            <div className="next-5-days__icon" id="divg1">
                                <IconComponent className={data && data.icon} />
                            </div>

                            <div className="next-5-days__rain">
                                {data && data.rain}
                                <div className="next-5-days__label">Rain</div>
                            </div>

                            <div className="next-5-days__wind">
                                {data && data.wind}mph
                                <div className="next-5-days__label">Wind</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </main>
        </>
    );
}

export default Bottom;
