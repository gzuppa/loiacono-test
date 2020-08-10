import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from 'semantic-ui-react'
import MissionCard from '../components/MissionCard'
import { FETCH_MISSIONS } from '../util/graphql'

function Home() {
    const {
      loading,
      data: { getMissions: missions }
    } = useQuery(FETCH_MISSIONS);
  
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

export default Home