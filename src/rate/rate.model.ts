export interface Rate {
  room_type: string;
  expected_checkin_time: Date;
  expected_checkout_time: Date;
  charge: number;
}
