import "./Ourrecipe.css";
import Leftrecipe from "./Leftrecipe";
import { useEffect, useState } from "react";
const Ourrecipe = () => {

     const [Food , setFood] = useState([]);



    useEffect(() =>{
        fetch('food.json')
        .then(res => res.json())
        .then(data => setFood(data))
    }, [])

    console.log(Food);
    

    return (
        <div>
            <div>
            <h3 className="ourrecipe">Our Recipes</h3>
            <div className="ourrecipe1">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget<br/> urna volutpat curabitur elementum mauris aenean neque. </div>
            <div className="cart0">
            <div className="cart1">
                {
                    //  Food.map(Fod =><Leftrecipe food="Fod"></Leftrecipe>)
                    Food.map(Fod =><Leftrecipe key={Fod.id} Fod={Fod}  ></Leftrecipe>)
                }
            </div>
            <div className="cart2">
                 HI i am confused
            </div>
            </div>
            </div>
        </div>
        
    );
};

export default Ourrecipe;