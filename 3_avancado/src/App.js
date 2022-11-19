import './App.css';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import { useState } from 'react';
import Container from './components/Container';

function App() {
const [userName] = useState('Roberta Miranda');
const cars = [
  {id: 1, marca: 'Ferrari', cor: 'Roxo', newCar: true, km: 0},
  {id: 2, marca: 'Volvo', cor: 'Preto', newCar: false, km: 5000},
  {id: 3, marca: 'Mustang', cor: 'Azul', newCar: true, km: 0},
  {id: 4, marca: 'Lamborghini', cor: 'Preto Perolado', newCar: false, km: 12000}
]

  return (
    <div className="App">
       {/* Children prop */}        
       <Container>
        <p>Vamos usar paragrado dentro do componente</p>
      </Container>
      <header className="App-header">
        <ConditionalRender></ConditionalRender>
        {/* props */}
        <ShowUserName nameUsuario={userName}></ShowUserName>
        {/* destructuring */}
        <CarDetails marca='Ford' km={43.221} cor='Preto Metalico' newCar={false}></CarDetails>
        {/* reaproveitamento de components */}
        <CarDetails marca='Volvo' km={0} cor='Azul Metalico' newCar={true}></CarDetails>
        <CarDetails marca='Mercedes' km={100} cor='Azul Metalico' newCar={false}></CarDetails>
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails marca={car.marca} cor={car.cor} km={car.km} newCar={car.newCar}></CarDetails>
        ))}
        {/* Fragment */}
        <Fragment propFragment='TEsTE'></Fragment>
      </header>
    </div>
  );
}

export default App;
