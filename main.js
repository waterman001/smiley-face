let face = document.getElementById('face');

const happy = emoji => {
    return {
      type: 'happy',
      face: emoji
    }
  }
  
  const sad = emoji => {
   return {
    type: "sad",
    face: emoji
   };
  };
  
  const angry = emoji => {
   return {
    type: "angry",
    face: emoji
   };
  };
  
  const confused = emoji => {
   return {
    type: "confused",
    face: emoji
   };
  };

const initialState = {
    face: ''
}

const facialExpression = (state = initialState, action) => {
    switch(action.type) {
        case 'happy': 
            return "٩(^‿^)۶"
        case 'sad': 
            return 'ε(´סּ︵סּ`)з'
        case 'angry':
            return '•`_´•'
        case 'confused':
            return '( ͡° ͜ʖ ͡°)'
        default: 
            return state
    }
};

const store = Redux.createStore(facialExpression);

document.addEventListener("click" , function(e) {
    if(e.target.id === "happy") store.dispatch({type: "happy"})
    if(e.target.id === "sad") store.dispatch({type: "sad"})
    if(e.target.id === "angry") store.dispatch({type: "angry"})
    if(e.target.id === "confused") store.dispatch({type: "confused"})
})

store.subscribe(() => (
    face.innerHTML =store.getState().toString()
));
