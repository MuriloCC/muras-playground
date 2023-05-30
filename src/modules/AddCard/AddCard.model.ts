export type AddCardFormData = {
  cardNumber: string;
  ownerName: string;
  validThru: string;
  cvv: number
}

export type AddCardPostData = AddCardFormData & {
  ownerId: string
}