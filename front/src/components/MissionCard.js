import React from 'react'
import { Card, Icon, Label, Image } from 'semantic-ui-react'
import moment from 'moment'

function MissionCard({ mission:{ missionName, resultSuccess, id, image, date, wiki, about, createdAt }}){
    
    return(
        <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={image}
        />
        <Card.Header>{missionName}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>
          {resultSuccess}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <h1>{wiki}</h1>
      </Card.Content>
    </Card>
    )
}

export default MissionCard