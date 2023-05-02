import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { postComments } from '../Services/blogs.service';
import { findAllComments } from '../Services/blogs.service';
import { getPostByIdService } from '../Services/blogs.service';
//components
import Comment from './Comment';
import { useSelector } from 'react-redux';
import { sendEmailForComment } from '../Services/blogs.service';
const Container = styled(Box)`
    margin-top: 60px;
    display: flex;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

const StyledTextArea = styled(TextareaAutosize)`
    
    width: 1000px; 
    margin: 0 20px;
`;

const initialValue = {
    Comment: ''

}

const Comments = ({ post, id ,postAuthor }) => {
    
    const authorName = useSelector((c) => {
        return c.allBlogReducer.authorName
    })
    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);



    useEffect(() => {
        const getData = async () => {
            const response = (await findAllComments(id)).data.data.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
              })
            setComments(response);
        }
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            Comment: e.target.value
        });
    }

    const addComment = async () => {
        const commnet = await postComments(id, authorName, comment);
        sendEmailForComment(authorName,comment,postAuthor)
        setComment(initialValue)
        setToggle(prev => !prev);
    }

    return (
        <Box style={{marginLeft:'80px'}}>
            <Container >
               
                <StyledTextArea
                    minRows={3}
                    placeholder="what's on your mind?"

                    onChange={(e) => handleChange(e)}
                    value={comment.Comment}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ height: 40 }}
                    onClick={(e) => addComment(e)}
                >Post</Button>
            </Container>
            <Box>
                {
                    comments && comments.length > 0 && comments.map((comment) => (
                        <Comment  comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments;