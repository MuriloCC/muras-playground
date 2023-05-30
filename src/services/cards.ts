import { CardModel } from "../common/model/CardModel";
import { api } from "./api";

export const cards = {
  getAllUserCardsByOwnerId: async (ownerId: string) => {
    const response = await api.get<CardModel[]>(`/cards?ownerId=${ownerId}`)
    return response.data;
  },
  postCard: async (card: CardModel) => {
    const response = await api.post<CardModel>(`/cards`);
    return response.data
  }
}