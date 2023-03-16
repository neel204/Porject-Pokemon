import { Component } from "react";
import PokemonCard from "../PokemonCard";
import PokemonDetails from '../PokemonDetails'
import { TailSpin } from  'react-loader-spinner'
import './index.css'

class PokemonList extends Component {
  state = { 
    theUrl: "https://pokeapi.co/api/v2/pokemon", 
    next:"", 
    prev: "", 
    detailUrlId: 1, 
    pokemonList: [] , 
    information: {},
    isCardLoading: true,
    isDetailsLoading: true,
    type:""
  };

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList = async () => {
    const { theUrl , detailUrlId } = this.state;

    const url = theUrl;
    const options = { method: "GET" };
    const response = await fetch(url, options);
    const data = await response.json();

    const details = data.results;
    let uniqueArr = [];
    for (let i = 0; i < details.length; i++) {
      if (!uniqueArr.some((obj) => obj.name === details[i].name)) {
        uniqueArr.push(details[i]);
      }
    }

    const url2 = `https://pokeapi.co/api/v2/pokemon/${detailUrlId}/`
    const detailsResponse = await fetch(url2, options)
    const detailsRecive = await detailsResponse.json()
    this.setState({
      pokemonList: uniqueArr,
      next: data.next,
      prev: data.previous,
      information: detailsRecive,
      isCardLoading: false,
      isDetailsLoading: false,
    });
  };
  
  onNext = () => {
    const {next} = this.state
    this.setState({theUrl:next, isCardLoading:true}, () => this.getPokemonList())
  }

  onPrevious = () => {
    const {prev} = this.state
    this.setState({theUrl: prev, isCardLoading:true}, () => this.getPokemonList())
  }

  getDetails = id => {
    console.log(id)
    this.setState({detailUrlId:id, isDetailsLoading:true}, () => {
      this.getPokemonList()
    });
  };
  
  renderCards = () =>{
    const { pokemonList , isCardLoading, information} = this.state
    return(
      <div className="cardContainer">
        {isCardLoading ? (
          <div className="loadingContainer">
          <TailSpin 
          height="80" 
          width="80" 
          color="#4fa94d" 
          ariaLabel="tail-spin-loading" 
          radius="1" 
          wrapperStyle={{}} 
          wrapperClass="" 
          visible={true} 
        />
        </div>
        ) : (
          <ul className="orderCard">
            {pokemonList.map(each => (
              <PokemonCard each={each} key={each.name} getDetails={this.getDetails} information={information}/>
            ))}
          </ul>
        )}
        </div>
    )
  }

  renderDetails = () =>{
    const { information, isDetailsLoading } = this.state
    return(
      <div className="detailsContainer shadow-drop-br card">
        {isDetailsLoading ? (
          <div className="loadingContainer">
            <TailSpin 
            height="80" 
            width="80" 
            color="#4fa94d" 
            ariaLabel="tail-spin-loading" 
            radius="1" 
            wrapperStyle={{}} 
            wrapperClass="" 
            visible={true} 
          />
          </div>
        ) : (<PokemonDetails information={ information}/>)
        }
      </div>
    )
  }

  render() {
    return(
      <>
      <div className="container" id="section1">
        <div className="con1">{this.renderCards()}</div>
        <div className="con2">{this.renderDetails()}</div>
      </div>
      <div className="buttonContainer">
        <button className="button" type="button" onClick={this.onPrevious}>Previous</button>
        <button className="button" type="button" onClick={this.onNext}>Next</button>
      </div>
      </>
    )
  }
}

export default PokemonList
