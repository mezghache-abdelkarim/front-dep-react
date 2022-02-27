import React from 'react';
import HomePageHeader from '../component/Home/HomePageHeader';
import Posts from '../component/posts/Posts';
import DocumentsRequests from '../component/DocumentsRequest/DocumentsRequests';

function HomeScreen() {
    return ( 
        <>
        <HomePageHeader/>
        <Posts/>
        <DocumentsRequests/>
        </>
     );
}

export default HomeScreen;