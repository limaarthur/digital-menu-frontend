import { Card } from "./components/Card";
import { useFoodData } from "./hooks/useFoodData";
import './app.css'
import { useState } from "react";
import { CreateModal } from "./components/CreateModal";

export function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsMoalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsMoalOpen(prev => !prev)
  }

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
      {isModalOpen && <CreateModal/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}
