
import { Box, Typography } from '@mui/material';
import React from 'react';
import Search from '../Search/Search';


const Home = () => {
    return (
        <Box>
            <Typography sx={{ backgroundColor: "lightgrey", padding: "50px 0" }} variant="h2" textAlign={"center"}>
                YOU CAN GET FREE SERVICE BY THIS SITE
            </Typography>
            <Search></Search>
        </Box>
    );
};
export default Home;