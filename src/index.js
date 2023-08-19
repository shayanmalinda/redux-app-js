import * as actions from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();

console.log(store)

store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(actions.bugAdded({ description: "Bug1"}));
store.dispatch(actions.bugAdded({ description: "Bug2" }));

store.dispatch(actions.bugRemoved({ id: 1 }));

store.dispatch(actions.bugResolved({ id: 2 }));