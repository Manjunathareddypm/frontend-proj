
import { Typography, Box, styled } from "@mui/material";
import { AccountCircle, Delete } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { deleteComment } from "../Services/blogs.service";
import DateDisplay from "../Utils/DateDisplay";
const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
    
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
    
   
    
`;

const Name = styled(Typography)`
    font-weight: 700,
    font-size: 20px;
    margin-right: 20px;
`;

const StyledDate = styled(Box)`
    font-size: 14px;
    color: #878787;
    
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {

    const authorName = useSelector((c)=>{
        return c.allBlogReducer.authorName
    })

   
    
    const removeComment = async () => {
       await deleteComment(comment._id);
       setToggle(prev => !prev);
    }
    

    return (
        <Component width={'984px'} marginLeft={'19px'}>
           <Container >
                <AccountCircle/><Name style={{fontWeight:'bold'}}>{comment.Author}</Name>
               
                { comment.Author === authorName && <DeleteIcon onClick={() => removeComment()} /> }
            </Container>
            <Typography>{comment.Comment}</Typography>
            <StyledDate style={{marginLeft:'380px'}} ><DateDisplay date={comment.createdAt} /></StyledDate>
        </Component>
    )
}

export default Comment;