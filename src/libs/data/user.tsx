import { sampleEgxUser } from "ellingsenx/libs/data/user"
import { UserInterface } from "libs/interfaces"

export const sampleUser: UserInterface = {
  ...sampleEgxUser,
  admin: false,
  avatar: "",
  banner: "",
  biography: "",
  creator: false,
  handle: "",
  verified: false,
  userId: ""
}
