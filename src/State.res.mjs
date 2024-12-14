// Generated by ReScript, PLEASE EDIT WITH CARE


function make(name, iterations) {
  return {
          iterations: iterations,
          name: name
        };
}

var State = {
  make: make
};

function ofType(actionType) {
  return {
          kind: actionType
        };
}

var Action = {
  ofType: ofType
};

var initialState = {
  iterations: 0,
  name: "world"
};

var mutatedState = {
  contents: initialState
};

function updateState(previous, action) {
  mutatedState.contents = {
    iterations: previous.iterations + 1 | 0,
    name: "updated 世界"
  };
  return mutatedState.contents;
}

export {
  State ,
  Action ,
  initialState ,
  mutatedState ,
  updateState ,
}
/* No side effect */
