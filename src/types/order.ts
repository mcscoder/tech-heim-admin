export interface Order {
  id: string;
  createAt: string;
  paymentMethod: string;
  customerName: string;
  status: boolean;
  amount: number;
}
