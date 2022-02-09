import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";

export default function ColorTabs() {
    let navigate = useNavigate();

    const [value, setValue] = React.useState('/');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`${newValue}`)
    };

    return (
        <Box className={'color-tabs-box'}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="/" label="Home" />
                <Tab value="/vehicles" label="Vehicles" />
                <Tab value="/charging" label="Charging" />
            </Tabs>
        </Box>
    );
}