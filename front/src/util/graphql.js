import gql from 'graphql-tag';

export const FETCH_MISSIONS = gql`
  {
    getMissions{
        missionName 
        resultSuccess
        id
        image
        date
        wiki
        about
        }
  }
`;