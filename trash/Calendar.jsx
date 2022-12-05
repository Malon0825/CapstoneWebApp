const [current_month, set_month] = useState(3)

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
const prev_months = find_month.find((new_month) => {
  
  return  new_month.id === current_month
})

month_name = prev_months.name
month_id = prev_months.id

console.log(month_id, month_name)



let final_month = new_search_months.name
let final_id = new_search_months.id
