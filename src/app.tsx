import { Card } from "./components/Card";
import { useFoodData } from "./hooks/useFoodData";
import './app.css'

export function App() {
  const { data } = useFoodData();

  return (
    <div className="container">
      <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map(foodData => 
            <Card 
              price={foodData.price} 
              title={foodData.title} 
              imgUrl={foodData.imgUrl}
              />
          )}
      </div>
    </div>
  )
}
