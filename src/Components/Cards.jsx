const Cards = (props) => {
    return (
        <div className="cards">
            <img src="{props.img}" alt="" />
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
            <p>{props.date}</p>
        </div>
    )
};
export default Cards;