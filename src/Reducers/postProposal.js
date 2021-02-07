export function postProposalReducer (state = {}, action) {
    switch (action.type) {
      case "POST_PROPOSAL": {
        return {...state, postProposal: action.payload}
      }
      default: return state;
    }
  }