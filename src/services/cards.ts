import { CardModel } from "../common/model/CardModel";
import { AddCardPostData } from "../modules/AddCard/AddCard.model";
import { api } from "./api";

export const cards = {
  getAllUserCardsByOwnerId: async (ownerId: string) => {
    const response = await api.get<CardModel[]>(`/cards?ownerId=${ownerId}`)
    return response.data;
  },
  postCard: async (card: AddCardPostData) => {
    const response = await api.post<CardModel>(`/cards`, card);
    return response.data
  }
}