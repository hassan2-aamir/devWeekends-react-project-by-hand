
function Counter({
    count = 0,
    add = () => {},
    subtract = () => {},
}){
    return (
      <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-center">
        <div className="text-2xl font-semibold text-gray-800 mb-4">
          Count = { count }
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={add}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            Add
          </button>
          <button
            onClick={subtract}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            Subtract
          </button>
        </div>
      </div>
    )
}

export default Counter
