function calculateCost() {
        const distance = parseInt(document.getElementById('distance').value)
        const time = document.getElementById('time').value
        const result = calculateTransportCost(distance, time)
        document.getElementById('result').innerHTML = result;
      }
      
function calculateTransportCost(distance, time) {
      let transportType = ''
  let commitmentFee = 0
  let serviceFee = 0
  
  if (distance < 1 || distance > 5000) {
    return "Invalid distance. Distance must be between 1km and 5000km."
  }

  if (time !== 'day' && time !== 'night') {
    return "Invalid time. Time must be either 'day' or 'night'."
  }
  
  if (distance >= 100) {
    transportType = 'train'
    serviceFee = 0.06;
  } else if (distance >= 20) {
    transportType = 'bus'
    serviceFee = 0.09
  } else {
    transportType = 'taxi'
    commitmentFee = 0.70;
    serviceFee = time === 'day' ? 0.79 : 0.90
  }
  
  let totalCost = commitmentFee + (distance * serviceFee)
  return `The cost of travelling ${distance}km by ${transportType} during ${time}time is ${totalCost.toFixed(2)} naira.`

}
