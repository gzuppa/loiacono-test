import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button, Label, Icon } from 'semantic-ui-react';

import MyPopup from '../util/MyPopup';

function LikeButton({ user, mission: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likeMission] = useMutation(LIKE_MISSION_MUTATION, {
    variables: { missionId: id }
  });

  const likeButton = user ? (
    liked ? (
      <Button color="orange">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="orange" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="orange" basic>
      <Icon name="heart" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={likeMission}>
      <MyPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</MyPopup>
      <Label basic color="orange" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}

const LIKE_MISSION_MUTATION = gql`
  mutation likeMission($missionId: ID!) {
    likeMission(missionId: $missionId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export default LikeButton;