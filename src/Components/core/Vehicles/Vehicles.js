import React from 'react';

import './Vehicles.css';

const Vehicles = () => {

    return (
        <main className="main">
            <h1 className="title">
                Ford Pro Vehicles
            </h1>
            <p className="description">
                We will be offering a full suite of world-class electric, hybrid and internal combustion vehicles built for business and designed to integrate with our comprehensive solutions suite of physical and digital services, tailored to fit your unique needs so you can get the job done.
            </p>

            <div className="card">
                <a href="https://www.google.com">Commercial Vehicles</a>
                <p>Ford Pro offers market-leading work-ready commercial vehicles to suit every business need. Ford offers the broadest lineup of commercial vehicles in the U.S. market*, including the iconic F-Series pickups. In Europe, Ford has been the market-leading brand for six years, with a full range of Transit vans and Ranger pickup trucks helping customers' businesses thrive.

                    *Commercial vehicles defined as class 1c-7
                </p>
            </div>

            <div className="card">
                <a href="https://www.target.com">Electric Truck and Van</a>
                <p>We're leading the charge with electrified versions of our best-selling commercial vehicles, 2022 E-Transit* and 2022 F-150 Lightning Pro,** designed to seamlessly plug into your existing fleet.

                    *Available late 2021.
                    **Available starting spring 2022.
                </p>
            </div>

            <div className="card">
                <a href="https://www.cnn.com">Upfitting</a>
                <p>
                    Our commercial electric vehicles will feature the same connection points as internal combustion vehicles, for maximum compatibility with our vast network of nearly 500 Ford-qualified upfit partners in North America and Europe.
                </p>
            </div>
        </main>
    )
};

export default Vehicles;
