import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Grid } from 'semantic-ui-react'
import MissionCard from '../components/MissionCard'

function Home() {
    const { loading, data: { getMissions: missions } } = useQuery(FETCH_MISSIONS)
  
    return(
        <Grid columns={3}>
        <Grid.Row>
            <h1>Recent Missions</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
              <h1>Missions on loading...</h1> 
          ) : (
              missions && missions.map(mission => (
                  <Grid.Column key={mission.id}>
                      <MissionCard mission={mission} />
                  </Grid.Column>
              ))
          )}
        </Grid.Row>
        </Grid>
    )
}

const FETCH_MISSIONS = gql`
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
`

export default Home