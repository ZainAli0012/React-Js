
import axios from 'axios'
import { useEffect, useState } from 'react'
import { QUOTES_API } from './utils/apis.js'

const App = () => {
  const [quotes, setQuotes] = useState([])


  return (
    <div>
      
      <h1>All Quotes </h1>

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Auther</td>
            <td>Qoutes</td>
          </tr>
        </thead>
        <tbody>
          {
            quotes.map((q) =>(
              < tr key={q.id }
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

