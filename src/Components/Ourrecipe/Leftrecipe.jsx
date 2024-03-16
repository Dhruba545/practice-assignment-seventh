import "./Leftrecipe.css";

const Leftrecipe = (Fod) => {
    const recipe = Fod.Fod;
    const {name , info , image , ingredient , calories } = recipe;
    console.log(image);
    return (
        <div className="cart">
            <div className="image"><img src="image" alt="Something worng"></img></div>
            <div>{name}</div>
            <div>{info} </div><hr/>
            <div>Ingredinets:{ingredient.length} </div>
            <ol>
                {ingredient.map(ingredien => <li>{ingredien} </li>)}
            </ol> <hr/>
            <div className="flex1"><p>HI My </p> <p>Name is</p> </div>
            <button className="button1">Want to Cook</button>
        </div>
    );
};

export default Leftrecipe;