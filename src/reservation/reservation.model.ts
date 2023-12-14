export interface Reservation {
  id: string;
  room_type: string;
  // customer_id: number;
  hourly_rate: number;
  status: ReservationStatus;
  expected_checkin_time: string;
  expected_checkout_time: string;
  wallet: number;
  reservation_status: boolean;
  reservation_checkedout: string;
}

export enum RoomType {
  DELUXE = 'DELUXE',
  REGULAR = 'REGULAR',
  PALATIAL = 'PALATIAL',
}

export enum ReservationStatus {
  PAID = 'PAID',
  NOTPAID = 'NOT PAID',
}
