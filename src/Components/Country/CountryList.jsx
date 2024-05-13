import {useFetchData} from "../../hooks/useFetchData.js";
import CountryCard from "./CountryCard.jsx";

const CountryList = () => {
        const {data} = useFetchData(`${import.meta.env.VITE_RESTCOUNTRY_API_URL }`);

        return (
            <>
                <div className="flex flex-wrap -m-4 justify-center" >
                    {data && data.map((country) => (
                            <CountryCard  key={country.name.common} {...country} />
                    ))}
                </div>
            </>
        );
    }
;

export default CountryList;
