export type ToastType = {
  visibility: boolean,
  message: string,
  type: null | 'error' | 'info'
}

type InitialStateType = {
  loaderScreen: boolean,
  amountVisibility: boolean,
}
export const globalInitialState: InitialStateType = {
  loaderScreen: false,
  amountVisibility: false
}

