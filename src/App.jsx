import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./Components/DataTab";
import { addTime, startTimer } from "./services/timerSlice";

function App() {
  const dispatch = useDispatch();
  const timers = useSelector((state) => state.timers);
  const [timer, setTimer] = useState();

  useEffect(() => {
    setInterval(() => {
      dispatch(startTimer());
    }, 10);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addTime(timer));
    setTimer("");
  };

  return (
    <div>
      <h1 className="my-5 text-4xl font-bold text-center capitalize">
        Timer Application
      </h1>
      <div className="grid gap-8 mt-4 lg:grid-cols-2 lg:gap-20">
        <div className="h-full px-4 py-4 max-lg:order-last">
          <div className="mt-5 ">
            <DataTable info={timers} />
          </div>
        </div>
        <div className="px-4 py-4 ">
          <form className="grid gap-4 mt-5 min-h-1/2 md:grid-cols-2">
            <input
              className="px-3 py-2 border border-gray-500 rounded"
              type="number"
              value={timer}
              min={0}
              placeholder="Please enter time in Secoinds"
              onChange={(e) => setTimer(e.target.value)}
            />
            <div className="lg:w-1/2 max-lg:h-10">
              <button
                type="submit"
                className="flex items-center justify-center w-full h-full text-lg font-bold text-white bg-orange-300 rounded"
                onClick={handleOnSubmit}
              >
                Add Time
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
