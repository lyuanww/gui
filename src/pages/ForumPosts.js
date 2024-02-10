import React,{useState} from 'react';
import { Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import logo from '../images/GUI Logo.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const ForumPosts = ({ author, date, content, avatarUrl, imageUrl, image }) => {
    const [isLiked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
  

const handleLike = () => {
    if (isLiked) {
      setLikes((likesCount) => likesCount - 1);
    } else {
      setLikes((likesCount) => likesCount + 1);
    }
    setLiked((likesCount) => !likesCount);
  };

  return (
    <Card style={{ marginBottom: 16, width: 'calc(32% - 16px)', marginRight: 16, marginTop: 25, backgroundColor: '#e4ebed' }}>
        <div style={{ position: 'relative' }}>             
        <div style={{ position: 'absolute', width: '100%', display: 'flex', alignItems: 'center'}}>
        {/* User Avatar */}
        <div style={{ marginRight: 8 }}>
          <Avatar src={avatarUrl} alt={`Avatar`} />
        </div>

        {/* User Name */}
        <div>
          <Typography variant="h6" style={{ color: 'black' }}>
            {author}
          </Typography>
        </div>
      </div>
      <img src={image} alt="postImage" style={{ width: '100%', height: 'auto' }} />
    </div>


      <CardContent>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Typography variant="caption" color="textSecondary">
            {date}
          </Typography>
        </div>

        <Typography variant="body1" style={{ marginTop: 8, maxWidth: 300 }}>
          {content}
        </Typography>
        <div style={{alignItems: 'center', marginTop: 8, marginLeft: 'auto'}}>
          <IconButton onClick={handleLike} color="primary">
             {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography variant="caption" color="textSecondary">
            {likes} Likes
          </Typography>
        </div>
        </div>
      </CardContent>
      
    </Card>
  );
};

export default ForumPosts;
