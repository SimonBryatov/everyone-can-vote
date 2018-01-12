let poll = {
    options : [
        {pollName: "c", val: 4}, {pollName: "coke", val: 5}, {pollName: "cok", val: 1}, {pollName: "cke", val: 2}
    ]
}

const defaultState = [poll]


const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
  }
}

export default mainReducer;