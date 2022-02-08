import { useState } from 'react'
import { useInterval } from 'usehooks-ts'
import { differenceInDays, format } from 'date-fns'

const DEADLINE = new Date(2023, 8, 18) // 18 sept 2023
const SECOND = 1000

export default function App() {
  const [date, setDate] = useState(new Date())
  let days = differenceInDays(DEADLINE, date)

  useInterval(() => {
    setDate(new Date())
  }, SECOND)

  return (
    <div className="App">
      <p className='Time'>{format(date, "HH:mm")}</p>

      <pre>
        {`{`}
        <br />
        <div style={{ marginLeft: "2rem" }}>
          <span className='text-comment'>
            {`// Days before the $1M deadline`}
          </span>
          <br />
          <span className='text-purple'>let{` `}</span>
          remaining_days{` `}
          <span className='text-purple'>={` `}</span>
          <span className='text-green'>
            {days > 0 ? days : "null"}
          </span>
          {`;`}
          <br />
          <br />
          <span className='text-orange'>lets_fucking_go!()</span>
          {`;`}
        </div>
        {`}`}
      </pre>
    </div>
  );
}
