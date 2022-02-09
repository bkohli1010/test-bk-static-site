import React from 'react';

import './Charging.css';

const Charging = () => {

    return (
        <main className="main">
            <h1 className="title">
                Ford Pro Charging
            </h1>
            <p className="description">
                We're making commercial charging easy by providing simple charging solutions for any business to cost-effectively operate an electric fleet with utmost peace of mind.
            </p>

            <div className="card">
                <a href="https://www.ford.com">Depot Charging</a>
                <p>
                    We’re committed to providing our customers a turnkey solution for fleet depot charging. That starts with our acquisition of fleet charging provider, Electriphi, to lower energy and operational costs while offering a one-stop solution and rapid deployment for commercial and government EV customers.

                    Customers in North America can sign up for Electriphi charge management services now at Electriphi.

                    Additional information on Ford’s plans to integrate Electriphi’s charging installation and management capabilities with Ford Pro services is available here.
                </p>
            </div>

            <div className="card">
                <a href="https://www.lincoln.com">Public Charging</a>
                <p>
                    Put our global public charging networks to work for your business. Customers have access to America’s largest public charging network offered by automotive manufacturers with over 63,000 plugs, while European customers have access to over 150,000 charging points and IONITY fast-charging stations.
                </p>
            </div>

            <div className="card">
                <a href="https://www.pro.ford.com">Home Charging</a>
                <p>
                    Employees can power up their vehicles from the comfort of their home with charging hardware and software that makes operations easy for drivers and fleet managers.
                </p>
            </div>
        </main>
    );
};

export default Charging;
