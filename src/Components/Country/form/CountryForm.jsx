import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountryForm = () => {
    const initialValues = {
        name: "",
        //more fields
    };

    const [data, setData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {

    };

    return (
        <div className="flex justify-center h-screen items-center mb-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
          leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            required
                            value={data.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Create Country
                </button>
            </form>
        </div>
    );
};

export default CountryForm;
