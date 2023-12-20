

const Index = () => {
    return (
        <>
            <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="h-12 bg-white rounded shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] "></div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    https://manuarora.in/boxshadows
                </div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                    https://design2tailwind.com/blog/tailwindcss-box-shadows-how-to/
                </div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                    https://runebook.dev/es/docs/tailwindcss/box-shadow
                </div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                    https://runebook.dev/es/docs/tailwindcss/-index-
                </div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] "></div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] "></div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] "></div>
                <div className="h-12 bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] "></div>
            </div>
            <div className="mx-auto p-2 grid grid-cols-12 gap-2 ">
                <div className="col-span-12 rounded-lg border border-gray-300 bg-gray-600 py-8">
                    header que ocupa todo el espacio disponible "col-span-12"
                </div>
                <div className=" rounded-lg border border-gray-500 bg-gray-200 h-24  col-span-12 md:col-span-8">
                    ocupa un espacio de "col-span-12 md:col-span-8"
                </div>
                <div className=" rounded-lg border border-gray-400 bg-gray-200 h-24 col-span-12 sm:col-span-4">
                    ocupa un espacio de "col-span-12 sm:col-span-4"
                </div>
                <div className="col-span-12 rounded-lg border border-gray-800 bg-gray-700 p-6">
                    footer que ocupa todo el espacio disponible "col-span-12"
                </div>
            </div>
        </>
    )
}

export default Index