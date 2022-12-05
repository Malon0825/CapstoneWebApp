import React from 'react'
import { useState } from 'react'


// Months Array
const find_month = [

  {name: 'January',    id: 1},
  {name: 'Febuary',    id: 2},
  {name: 'March',      id: 3},
  {name: 'April',      id: 4},
  {name: 'May',        id: 5},
  {name: 'June',       id: 6},
  {name: 'July',       id: 7},
  {name: 'August',     id: 8},
  {name: 'September',  id: 9},
  {name: 'October',    id: 10},
  {name: 'November',   id: 11},
  {name: 'December',   id: 12},

]

// Main Function
const New = () => {
  
  const [current_month, set_month] = useState ("October")


// Set Previos Month
  let set_prev_month = () => {

    const prev_months = find_month.find((new_month) => {  
        return  new_month.name === current_month
    })

    let month_id = prev_months.id
    let new_id = month_id - 1

    const search_id = find_month.find((monthID) => {  
       return monthID.id === new_id
    })

    let month_name = search_id.name
    set_month(month_name)
  }


// Set Next Month
  let set_next_month = () => {

    const prev_months = find_month.find((new_month) => {
        return  new_month.name === current_month
    })

    let month_id = prev_months.id
    let new_id = month_id + 1

    const search_id = find_month.find((monthID) => {
        return monthID.id === new_id
    })

    let month_name = search_id.name
    set_month(month_name)
  }
 
// Main Return Element
  return (
    <div className="relative w-screen h-screen">

      <div className="flex flex-col items-center gap-20 m-20">

              <div className="text-fontColor text-2xl">
                {current_month} 2022
              </div>
              <button className="bg-slate-500" 
                      onClick={set_prev_month}
              >Previos</button>

              <button className="bg-orange-400"
                      onClick={set_next_month}
              >Next</button>
      </div>

      <ul>

                    <li className="calendar-num-style-weekend">{sun_1}</li>
                    <li className="calendar-num-style-weekend">{mon_1}</li>
                    <li className="calendar-num-style-weekend">{tue_1}</li>
                    <li className="calendar-num-style-weekend">{wed_1}</li>
                    <li className="calendar-num-style-weekend">{thu_1}</li>
                    <li className="calendar-num-style-weekend">{fri_1}</li>
                    <li className="calendar-num-style-weekend">{sat_1}</li>
                    <li className="calendar-num-style-weekend">{sun_2}</li>
                    <li className="calendar-num-style-weekend">{mon_2}</li>
                    <li className="calendar-num-style-weekend">{tue_2}</li>
                    <li className="calendar-num-style-weekend">{wed_2}</li>
                    <li className="calendar-num-style-weekend">{thu_2}</li>
                    <li className="calendar-num-style-weekend">{fri_2}</li>
                    <li className="calendar-num-style-weekend">{sat_2}</li>
                    <li className="calendar-num-style-weekend">{sun_3}</li>
                    <li className="calendar-num-style-weekend">{mon_3}</li>
                    <li className="calendar-num-style-weekend">{tue_3}</li>
                    <li className="calendar-num-style-weekend">{wed_3}</li>
                    <li className="calendar-num-style-weekend">{thu_3}</li>
                    <li className="calendar-num-style-weekend">{fri_3}</li>
                    <li className="calendar-num-style-weekend">{sat_3}</li>
                    <li className="calendar-num-style-weekend">{sun_4}</li>
                    <li className="calendar-num-style-weekend">{mon_4}</li>
                    <li className="calendar-num-style-weekend">{tue_4}</li>
                    <li className="calendar-num-style-weekend">{wed_4}</li>
                    <li className="calendar-num-style-weekend">{thu_4}</li>
                    <li className="calendar-num-style-weekend">{fri_4}</li>
                    <li className="calendar-num-style-weekend">{sat_4}</li>
                    <li className="calendar-num-style-weekend">{sun_5}</li>
                    <li className="calendar-num-style-weekend">{mon_5}</li>
                    <li className="calendar-num-style-weekend">{tue_5}</li>
                    <li className="calendar-num-style-weekend">{wed_5}</li>
                    <li className="calendar-num-style-weekend">{thu_5}</li>
                    <li className="calendar-num-style-weekend">{fri_5}</li>
                    <li className="calendar-num-style-weekend">{sat_5}</li>
                    <li className="calendar-num-style-weekend">{sun_6}</li>
                    <li className="calendar-num-style-weekend">{mon_6}</li>
                    <li className="calendar-num-style-weekend">{tue_6}</li>
                    <li className="calendar-num-style-weekend">{wed_6}</li>
                    <li className="calendar-num-style-weekend">{thu_6}</li>
                    <li className="calendar-num-style-weekend">{fri_6}</li>
                    <li className="calendar-num-style-weekend">{sat_6}</li>
      </ul>

    </div>
  )
}
export default New