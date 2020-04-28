import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchName: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(data => this.setState({ pokemons: data.slice(0, 20) }))
  }

  onChange = e => {
    console.log(this.state.searchName)
    this.setState({ searchName: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    let hp = e.target.hp.value
    let name = e.target.name.value
    let images = { "front": e.target.frontUrl.value, "back": e.target.backUrl.value }
    let fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name, hp, images })
    }

    // fetch(`http://localhost:3000/pokemon`, fetchOptions)
    // .then(res => res.json())
    // .then(newPkmn => {
    //   this.setState({ pokemons: [...this.state.pokemons] })
    // })

  }

  render() {
    let displayPokemon = this.state.searchName !== "" ? [...this.state.pokemons].filter(pokemon => pokemon.name === this.state.searchName) : [...this.state.pokemons]
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemons={displayPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
