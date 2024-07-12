import React from 'react';
import ContentLoader from 'react-content-loader';

const Shimmer = (props) => (
    <ContentLoader 
        speed={2}
        width={200} // Adjust width to match your card's width
        height={320} // Adjust height to match your card's height
        viewBox="0 0 200 320" // Match this to width and height
        backgroundColor="#d5d8dc"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
    </ContentLoader>
);

export default Shimmer;
