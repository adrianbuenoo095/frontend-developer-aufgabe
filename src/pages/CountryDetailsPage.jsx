import {useParams} from "react-router-dom";
import {useFetchData} from "../hooks/useFetchData.js";
import CountryDetailsCard from "../Components/Country/CountryDetailsCard.jsx";
const CountryDetailsPage = () => {
    const {countryId} = useParams();
    const pathRoute= `/countries/:countryId${countryId}`;
    const {data} = useFetchData(`${import.meta.env.VITE_API_URL}${pathRoute}`)

    return (
        <>
            {data && <CountryDetailsCard country={data}/>}
        </>
    );
};

export default CountryDetailsPage;