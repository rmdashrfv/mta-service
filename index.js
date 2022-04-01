let div = document.getElementById('container')

const getAllStations = async () => {
  let req = await fetch('https://mtaapi.herokuapp.com/stations')
  let res = await req.json()
  res.result.forEach((element) => {
    // console.log('Station', element)
    let h2 = document.createElement('h2')
    h2.innerText = element.name 
    h2.dataset.stationId = element.id
    h2.addEventListener('click', () => {
       getArrivalTimes(h2.dataset.stationId) 
    })
    div.append(h2)
  })
}

const getArrivalTimes = async (stationId) => {
  let req = await fetch(`https://mtaapi.herokuapp.com/api?id=${stationId}`)
  let res = await req.json()
  console.log('Arrival times', res.result.arrivals)
}

getAllStations()
