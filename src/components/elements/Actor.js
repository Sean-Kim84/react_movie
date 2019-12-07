import React from 'react';
import {StyledActor} from '../styles/StyledActor';
import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

const Actor = ({actor }) => {
  return (
    <StyledActor>
      <img 
        src={
          actor.profile_path 
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage } 
        alt="actorThumbs"
      />
      <span className="action-name">{actor.name}</span>
      <span className="action-character">{actor.character}</span>
    </StyledActor>
  );
}

export default Actor;
