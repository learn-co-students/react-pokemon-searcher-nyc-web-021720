import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    side: "front"
  }
  onClick = () => {
    if (this.state.side === "front") {
      this.setState({ side: "back" })
    } else {
      this.setState({ side: "front" })
    }
  }


  render() {
    return (
      <Card>
        <div onClick={this.onClick}>
          <div className="image">
            <img src={this.props.images[this.state.side]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
