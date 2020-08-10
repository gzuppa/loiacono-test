import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, Confirm, Icon } from 'semantic-ui-react';

import { FETCH_MISSIONS } from '../util/graphql';
import MyPopup from '../util/MyPopup';

function DeleteButton({ missionId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_MISSION_MUTATION;

  const [deleteMissionOrMutation] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if (!commentId) {
        const data = proxy.readQuery({
          query: FETCH_MISSIONS
        });
        data.getMissions = data.getMissions.filter((m) => m.id !== missionId);
        proxy.writeQuery({ query: FETCH_MISSIONS, data });
      }
      if (callback) callback();
    },
    variables: {
      missionId,
      commentId
    }
  });
  return (
    <>
      <MyPopup content={commentId ? 'Delete comment' : 'Delete mission'}>
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={() => setConfirmOpen(true)}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
      </MyPopup>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deleteMissionOrMutation}
      />
    </>
  );
}

const DELETE_MISSION_MUTATION = gql`
  mutation deleteMission($missionId: ID!) {
    deleteMission(missionId: $missionId)
  }
`;

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($missionId: ID!, $commentId: ID!) {
    deleteComment(missionId: $missionId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;

export default DeleteButton;