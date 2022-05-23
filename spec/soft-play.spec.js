const {
  enter,
  leave,
  occupancy,
  total,
  reset
} = require('../src/soft-play.js')

describe("Soft Play", () => {

  it("Initial state is empty", function () {
    reset()
    expect(occupancy()).toEqual({
      adults: 0,
      children: 0
    })
    expect(total()).toEqual({
      totalAdultsEntered: 0,
      totalChildrenEntered: 0
    })
  })

  it("Single adult and child enter", function () {
    reset()
    expect(enter(1, 1)).toBeTrue()
    expect(occupancy()).toEqual({
      adults: 1,
      children: 1
    })
    expect(total()).toEqual({
      totalAdultsEntered: 1,
      totalChildrenEntered: 1
    })
  })

  it("Single adult with 2 children cannot enter", function () {
    reset()
    expect(enter(1, 2)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 0,
      children: 0
    })
    expect(total()).toEqual({
      totalAdultsEntered: 1,
      totalChildrenEntered: 1
    })
  })

  it("2 adults with 1 child can enter", function () {
    reset()
    expect(enter(2, 1)).toBeTrue()
    expect(occupancy()).toEqual({
      adults: 2,
      children: 1
    })
    expect(total()).toEqual({
      totalAdultsEntered: 3,
      totalChildrenEntered: 2
    })
  })

  it("Adult can leave when adults 2 and children 1", function () {
    reset()
    enter(2, 1)
    expect(leave(1, 0)).toBeTrue()
    expect(occupancy()).toEqual({
      adults: 1,
      children: 1
    })
    expect(total()).toEqual({
      totalAdultsEntered: 5,
      totalChildrenEntered: 3
    })
  })

  it("Adult cannot leave when adults 1 and children 1", function () {
    reset()
    enter(1, 1)
    expect(leave(1, 0)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 1,
      children: 1
    })
    expect(total()).toEqual({
      totalAdultsEntered: 6,
      totalChildrenEntered: 4
    })
  })

  it("Adult cannot leave when adults 2 and children 2", function () {
    reset()
    enter(2, 2)
    expect(leave(1, 0)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 2,
      children: 2
    })
    expect(total()).toEqual({
      totalAdultsEntered: 8,
      totalChildrenEntered: 6
    })
  })

  it("More children cannot leave than are in the soft play center", function () {
    reset()
    expect(enter(1, 1)).toBeTrue()
    expect(leave(1, 2)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 1,
      children: 1
    })
    expect(total()).toEqual({
      totalAdultsEntered: 9,
      totalChildrenEntered: 7
    })
  })

  it("More adults cannot leave than are in the soft play center", function () {
    reset()
    expect(enter(1, 1)).toBeTrue()
    expect(leave(2, 1)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 1,
      children: 1
    })
    expect(total()).toEqual({
      totalAdultsEntered: 10,
      totalChildrenEntered: 8
    })
  })

  it("Child cannot enter on own", function () {
    reset()
    expect(enter(0, 1)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 0,
      children: 0
    })
    expect(total()).toEqual({
      totalAdultsEntered: 10,
      totalChildrenEntered: 8
    })
  })

  it("Child cannot leave on own", function () {
    reset()
    enter(1, 1)
    expect(leave(0, 1)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 1,
      children: 1
    })
    expect(total()).toEqual({
      totalAdultsEntered: 11,
      totalChildrenEntered: 9
    })
  })

  it("Adult cannot leave with multiple children", function () {
    reset()
    enter(2, 2)
    expect(leave(1, 2)).toBeFalse()
    expect(occupancy()).toEqual({
      adults: 2,
      children: 2
    })
    expect(total()).toEqual({
      totalAdultsEntered: 13,
      totalChildrenEntered: 11
    })
  })

  it("Multiple adults can leave with multiple children", function () {
    reset()
    enter(2, 2)
    expect(leave(2, 2)).toBeTrue()
    expect(occupancy()).toEqual({
      adults: 0,
      children: 0
    })
    expect(total()).toEqual({
      totalAdultsEntered: 15,
      totalChildrenEntered: 13
    })
  })
})