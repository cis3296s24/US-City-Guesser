import Cities from "./city_data.json"

function CreateTable(){
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>city</th>
            <th>state</th>
            <th>latitude</th>
            <th>longitude</th>
            <th>population</th>
          </tr>
        </thead>
        <tbody>
          {
          Cities.map((city) => 
          <tr key = {city.id}>
            <td>{city.id}</td>
            <td>{city.city}</td>
            <td>{city.state_id}</td>
            <td>{city.lat}</td>
            <td>{city.lng}</td>
            <td>{city.population}</td>
          </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
}

export default CreateTable