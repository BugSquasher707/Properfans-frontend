import { ModalCallInterface } from "libs/interfaces"

export const modalCallTitle = (data: ModalCallInterface) => {
  if (data.active) {
    if (data.group) {
      return "Incoming Group Audio Call"
    } else {
      return "Incoming Audio Call"
    }
  } else {
    return "Missed Audio Call"
  }
}

export const modalCallText = (data: ModalCallInterface) => {
  if (data.active) {
    if (data.group) {
      return "are calling you..."
    } else {
      return "is calling you..."
    }
  } else {
    return "called you..."
  }
}

export const modalCallPeople = (data: ModalCallInterface) => {
  if (data.group) {
    if (data.people.length === 2) {
      return `${data.people[0].name} and ${data.people[1].name}`
    } else {
      return `${data.people[0].name}, ${data.people[1].name} and ${data.people.length - 2} others`
    }
  } else {
    return data.people[0].name
  }
}
