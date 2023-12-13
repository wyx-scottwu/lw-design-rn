import { useReducer } from "react"

interface IUseMaskState {
  initialState?: Record<string, unknown>
}

export default function useMaskState(props?: IUseMaskState): {
  state: any;
  dispatch: () => void;
} {
  const initialState = props?.initialState ?? {};
  const [state, dispatch] = useReducer(reducer, null, () => initialState);
  return {
    state,
    dispatch,
  };
}

function reducer() {

}