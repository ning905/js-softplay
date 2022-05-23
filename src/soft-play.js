// do not change these lines

function reset() {
  adults = 0
  children = 0
}


let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
const occupancy = () => {
  return {
    adults: adults,
    children: children
  }
}

const enter = (numAdults, numChildren) => {
  if (numAdults >= numChildren) {
    adults += numAdults
    totalAdultsEntered += numAdults
    children += numChildren
    totalChildrenEntered += numChildren
    return true
  }
  return false
}

const leave = (numAdults, numChildren) => {
  const remainAdults = adults - numAdults
  const remainChildren = children - numChildren
  if (numAdults >= numChildren &&
    numAdults <= adults &&
    numChildren <= children &&
    remainAdults >= remainChildren) {
    adults = remainAdults
    children = remainChildren
    return true
  }
  return false
}

let totalAdultsEntered = 0
let totalChildrenEntered = 0

const total = () => {
  return {
    totalAdultsEntered: totalAdultsEntered,
    totalChildrenEntered: totalChildrenEntered
  }
}

// console.log('enter', enter(5, 5))
// console.log('occupancy', occupancy())
// console.log('total', total())

// console.log('enter', enter(4, 5))
// console.log('occupancy', occupancy())
// console.log('total', total())

// console.log('enter', enter(7, 3))
// console.log('occupancy', occupancy())
// console.log('total', total())

// console.log('enter', enter(5, 2))
// console.log('occupancy', occupancy())
// console.log('total', total())

// console.log('leave', leave(4, 2))
// console.log('occupancy', occupancy())
// console.log('total', total())

// console.log('leave', leave(3, 5))
// console.log('occupancy', occupancy())
// console.log('total', total())

// console.log('leave', leave(6, 5))
// console.log('occupancy', occupancy())
// console.log('total', total())



// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total,
  reset: reset
}