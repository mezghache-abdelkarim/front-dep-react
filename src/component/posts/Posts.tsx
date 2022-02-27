import React,{useState,useEffect} from 'react'
import { HashRouter as Router,Link} from 'react-router-dom'
import axios from 'axios';
import Post from "./Post"
import '../css.component/Posts.css'
import {Container,Row,Col,Form,Stack,Card,FloatingLabel } from 'react-bootstrap'
import Pagination  from './Pagination';

interface Props {
    
}
type post_type = {
    userId: number,
    id:number,
    title: String,
    body: String
};
const Posts: React.FC<Props> = () => {
    const [PostsItem,setPostsItem] = useState<any>([])
    const [currentPosts,setcurrentPosts] = useState<any>([])
    const [limitposts,setlimitposts] = useState<number>(12)
    const [CountPagination,setCountPagination] = useState<any>()
    const [Page,setPage]=useState<number>(1);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPostsItem(res.data);
            setCountPagination(Math.ceil(res.data.length / limitposts))
            setcurrentPosts(res.data.slice(0,limitposts));
        };
        fetchPosts()

    }, [])
    const handleChange = ( value: number) => {
        //setPage(value);
        const indexOfLastPost = value * limitposts;
        const indexOfFirstPost = indexOfLastPost - limitposts;
        setcurrentPosts(PostsItem.slice(indexOfFirstPost, indexOfLastPost));
    };
    return ( 
        <>
        <Container className='AffichageTable' >
            <Stack className='pt-5' direction="horizontal" gap={2}>
                <div className="TA text-start"> tableau <div> d'<span>AFFICHAGE </span></div>
                <img src="/images/black-lines.png" alt="" />  </div>
                <div className="ms-auto">
                        <Form.Select aria-label="Floating label select example">
                            <option value={1}>Votre année d'etude (ALL) </option>
                            <optgroup label="Licence 2">
                                <option value={1}>Licence 2 informatique </option>
                            </optgroup>
                            <optgroup label="Licence 3">
                                <option value={1}>Licence 3 ISIL</option>
                                <option value={2}>Licence 3 SI</option>
                            </optgroup>
                            <optgroup label="Master 1">
                                <option value={1}>Master 1 SI</option>
                                <option value={2}>Master 1 RSD</option>
                                <option value={2}>Master 1 GLA</option>
                                <option value={2}>Master 1 SIAA</option>
                            </optgroup>
                            <optgroup label="Master 2">
                                <option value={1}>Master 2 SI</option>
                                <option value={2}>Master 2 RSD</option>
                                <option value={2}>Master 2 GLA</option>
                                <option value={2}>Master 2 SIAA</option>
                            </optgroup>
                        </Form.Select>
                </div>
            </Stack>
            <Row className="py-5">
                { currentPosts.map((item:post_type)=>(
                <Post key={item.id} Item={item} ></Post>
                ))
            }
            </Row>
            {/* <Pagination className="d-flex justify-content-center" color="primary" 
            count={CountPagination} 
            page={Page}
            onChange={handleChange} /> */}
            <Pagination
                pagesCount ={CountPagination}
                currentPage ={Page}
                setCurrentPage ={setPage}
                alwaysShown ={false}
                onChange={handleChange}
                />
        </Container>
        </>
    )
}
export default Posts ;