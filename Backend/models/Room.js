import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: false,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: [String] }] }],
  },
  { timestamps: true }
);

[
  { number: 101, unavailableDates: [] },
  { number: 102, unavailableDates: [] },
  { number: 103, unavailableDates: [] },
  { number: 104, unavailableDates: [] },
  { number: 105, unavailableDates: [] },
  { number: 106, unavailableDates: [] },
  { number: 107, unavailableDates: [] },
];

export default mongoose.model("Room", RoomSchema);
