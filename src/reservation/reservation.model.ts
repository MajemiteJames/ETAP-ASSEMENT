export interface Reservation {
  id: string;
  room_type: string;
  // customer_id: number;
  status: ReservationStatus;
  expected_checkin_time: Date;
  expected_checkout_time: Date;
  wallet: number;
  reservation_status: boolean;
  reservation_checkedout: Date;
}

// export enum RoomType {
//   DELUXE = 'DELUXE',
//   REGULAR = 'REGULAR',
//   PALATIAL = 'PALATIAL',
// }

export enum ReservationStatus {
  PAID = 'PAID',
  NOTPAID = 'NOT PAID',
}
