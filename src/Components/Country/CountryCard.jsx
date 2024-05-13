const CountryCard = ({ name}) => {
    return (
        <div>
            <h1>Country Card</h1>
            <div>
                <div>{name.common}</div>
            </div>
        </div>
    );
};
export default CountryCard;
