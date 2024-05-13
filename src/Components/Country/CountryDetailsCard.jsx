
const CountryDetailsCard = ({name}) => {
    return (
        <div >
                <div className="w-1/2">
                    <h1 className="text-3xl font-semibold mb-4">Country Details</h1>
                        <span>{name.common}</span>
                    </div>
        </div>
    );
};

export default CountryDetailsCard;