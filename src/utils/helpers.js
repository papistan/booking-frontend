export const mapBookingsToBikes = bookings => {
  let bikesBookings = {};
  bookings.data.forEach(booking => {
    if (bikesBookings[booking.truck]) {
      bikesBookings[booking.truck].push(booking);
    } else {
      bikesBookings[booking.truck] = [booking];
    }
  });
  return bikesBookings;
};

export const mapTrucks = trucks => {
  let truckIdToName = {};
  trucks.data.forEach(truck => {
    truckIdToName[truck._id] = truck.name;
  });
  return truckIdToName;
};

export const timeOptions = {
  '7am': 7,
  '8am': 8,
  '9am': 9,
  '10am': 10,
  '11am': 11,
  '12pm': 12,
  '1pm': 13,
  '2pm': 14,
  '3pm': 15,
  '4pm': 16,
  '5pm': 17,
  '6pm': 18,
  '7pm': 19,
  '8pm': 20
};
