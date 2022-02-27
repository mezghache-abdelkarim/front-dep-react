import React, { useState, useEffect } from 'react'
import '../css.component/Posts.css'
import { Container, Row, Col, Form, Stack, Card } from 'react-bootstrap'

type post_type = {
    userId: number,
    id: number,
    title: String,
    body: String
};
interface Props_item {
    Item: post_type;
}

const Post: React.FC<Props_item> = ({ Item }) => {
    useEffect(() => {
        console.log('Posts')
    }, [])
    return (
        <>
            <Col xs={12} sm={6} md={6} lg={6} >
                <Card border="dark" >
                    <Card.Header>{Item.title}</Card.Header>
                    <Card.Body>
                        <Card.Title> <u> {Item.title} </u></Card.Title>
                        <Card.Text className='pb-4'>
                            {Item.body}
                        </Card.Text>
                        <Stack className='' direction="horizontal" gap={2}>
                            <div className='source_date'>
                                <span>user id == {Item.userId}</span>
                                <p>({Item.userId})</p>
                            </div>
                            <div className='ms-auto text-end'>
                                <a className='p-2' href='/'> <i className="fas fa-paperclip" /> Pièce-jointe  </a>
                            </div>
                        </Stack>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
export default Post;