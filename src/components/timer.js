import { useState, useEffect } from "react"

export default function Timer() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);

    const [value, setValue] = useState(false);

    const handleTime = () =>{
        setSec(0);
        setMin(0);
        setHour(0);
    }

    useEffect(() => {

        let interval = null;
        if (value) {
            interval = setInterval(() => {
                if(sec < 60){
                    
                        setSec(sec + 1)
                    
                }else if((sec % 60 === 0) && min < 60){
                    setMin(min+1);
                    setSec(0);
                    
                }else {
                    setHour(hour+1)
                    setMin(0)
                }
            }, 1000)
        }

        return () => clearInterval(interval)



    }, [value, hour, min, sec])





    return (
        <div className="container text-center w-25">
            <h1 className="">Timer</h1>
            <h3 className="">{hour} : {min} : {sec}</h3>
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={() => setValue(!value)}>{value ? "Stop" : "Start"}</button>
                <button className="btn btn-primary" onClick={handleTime}>Refresh</button>
            </div>
        </div>
    )
}