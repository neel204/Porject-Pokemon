import './index.css';

const PokemonDetails = (props) => {
  const { information } = props;
  const id = information.id;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  if (!information) {
    return <div>Loading details...</div>;
  }

  const abilityNames = information.abilities
    ? information.abilities.map((ability) => ability.ability.name)
    : [];

  const statDetails = information.stats
    ? information.stats.map((stat) => ({
        baseStat: stat.base_stat,
        effort: stat.effort,
        name: stat.stat.name,
      }))
    : [];

  const type = information.types[0].type.name;

  return (
    <div className="con3">
      <div className="imgContainer">
        <img
          className="pokemonImage slide-in-top"
          src={imageUrl}
          alt={information.name}
        />
        <h1 className={`${type} slide-in-top`}>{information.name}</h1>
      </div>
      <div className="slide-in-bottom">
        <hr />
        <div className="pokemonInfo">
          <div className="box">
            <p>{information.is_default ? 'yes' : 'no'}</p>
            <h4 className={`${type}`}>Is default</h4>
          </div>
          <div className="box">
            <p>{information.weight}</p>
            <h4 className={`${type}`}>Weight</h4>
          </div>
          <div className="box">
            <p>{information.height}</p>
            <h4 className={`${type}`}>Height</h4>
          </div>
          <div className="box">
            <p>{information.base_experience}</p>
            <h4 className={`${type}`}>Base experience</h4>
          </div>
        </div>
        <hr />
        <div>
          <h1 className={`${type} abilitiesHd`}>Abilities</h1>
          <div className="abilitiesAndStatsContainer">
            {abilityNames.map((each) => (
              <p>{each}</p>
            ))}
          </div>
        </div>
        <hr />
        <div>
          <h1 className={`${type} statsHd`}>Stats</h1>
          <div className="pokemonInfo">
            {statDetails.map((each) => (
              <div className="stats">
                <h3 className={`${type}`}>{each.name}</h3>
                <p>{each.baseStat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
