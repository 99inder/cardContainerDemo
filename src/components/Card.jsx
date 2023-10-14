import errorImage from "../assets/ErrorImage.png"

const Card = ({ item }) => {

    return (
        <div className="flex flex-col items-center bg-orange-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
            <img
                className="object-contain object-center w-full rounded-t-lg h-96 md:h-ato md:w-48 md:rounded-none md:rounded-l-lg mix-blend-multiply"
                src={item.image}
                alt="itemImage.jpg"
                onError={(e) => {
                    e.target.src = errorImage
                }}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description.length > 150 ? item.description.slice(0, 150) + "..." : item.description}
                </p>
            </div>
        </div>
    )
}

export default Card