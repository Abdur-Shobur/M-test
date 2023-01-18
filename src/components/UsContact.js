import React, { useEffect, useState } from 'react'

function UsContact() {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(true)
  //   const [data_reverse, set_data_reverse] = useState(data)
  useEffect(() => {
    const fetch_func = async () => {
      const fetch_data = await fetch(
        `https://contact.mediusware.com/api/country-contacts/United%20States/?format=json&page_size=10`,
      )
      const res = await fetch_data.json()
      setData(res.results)
    }
    fetch_func()
  }, [])

  const handel_data_change = (e) => {
    if (e) {
      setToggle(!toggle)
      return data.sort((a, b) => b.id - a.id)
    } else {
      setToggle(!toggle)
      return data.sort((a, b) => a.id - b.id)
    }
  }
  console.log(data)
  console.log(toggle)
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={e.id}>
              <th scope="row">{e.id}</th>
              <td>{e.phone}</td>
              <td>{e.country.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          onChange={() => handel_data_change(toggle)}
        />
        <label class="form-check-label" for="flexCheckChecked">
          Reverse
        </label>
      </div>
    </div>
  )
}

export default UsContact
