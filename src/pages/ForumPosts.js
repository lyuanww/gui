import React,{useState} from 'react';
import { Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import logo from '../images/GUI Logo.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const ForumPosts = ({ author, date, content, avatarUrl, imageUrl }) => {
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
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center', padding: '8px' }}>
        {/* User Avatar */}
        <div style={{ marginRight: 8 }}>
          <Avatar src={avatarUrl} alt={`Avatar`} />
        </div>

        {/* User Name */}
        <div>
          <Typography variant="h6" style={{ color: 'black' }}>{author}</Typography>
        </div>
      </div>
      <img src={logo} alt="GUI Logo" style={{ width: '100%', height: 'auto' }} />
    </div>

      {/* Post Content */}
      <CardContent>
        {/* Post Header */}
        <div style={{ marginLeft: 16 }}>
          <Typography variant="caption" color="textSecondary">
            {date}
          </Typography>
        </div>

        {/* Post Body */}
        <Typography variant="body1" style={{ marginTop: 8, maxWidth: 300 }}>
          {content}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
          <IconButton onClick={handleLike} color="primary">
             {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography variant="caption" color="textSecondary">
            {likes} Likes
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumPosts;
