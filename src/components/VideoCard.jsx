import { CheckCircle } from "@mui/icons-material";
import { Typography, CardContent, CardMedia, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoThumbnailUrl,
} from "../utils/constants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
          <CardMedia
           image={snippet?.thumbnails?.high?.url}
           alt={snippet?.title}
           sx={{width:358,height:180}}/>
        </Link>
        <CardContent />
    </Card>

  )
 
};

export default VideoCard;
