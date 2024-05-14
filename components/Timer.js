import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Timer({ press }) {
  let recordedTime;
  const [time, setTime] = useState(0);
  const route = useRouter();

  useEffect(() => {
    let timer;
    if (
      (press && route.asPath.includes("/ProgLabs")) ||
      route.asPath.includes("/learning")
    ) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [press, route.asPath]);

  useEffect(() => {
    if (
      (!press && route.asPath.includes("/ProgLabs")) ||
      route.asPath.includes("/learning")
    ) {
      setTime(0);
    }
  }, [press, route.asPath]);

  function formatTime() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    recordedTime = hours + " " + minutes + " " + seconds;
    console.log(recordedTime);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div>
      <span className="timer shdg p-2 rounded-lg">{formatTime()}</span>
    </div>
  );
}

export default Timer;
