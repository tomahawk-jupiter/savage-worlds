import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import attributeReducer from "./reducers/attributeReducer";
import skillReducer from "./reducers/skillReducer";
import initialState from "./reducers/initialState";
import {
  equipArmourReducer,
  ownedArmourReducer,
} from "./reducers/armourReducers";
import { ownedWeaponsReducer } from "./reducers/weaponsReducers";
import equipmentReducer from "./reducers/equipmentReducer";
import { edgeReducer, hindranceReducer } from "./reducers/edgeReducers";
import conditionReducer from "./reducers/conditionReducer";
import notesReducer from "./reducers/notesReducer";
import characterInfoReducer from "./reducers/characterInfoReducer";
import backgroundReducer from "./reducers/backgroundReducer";
import App from "./layout/App";

const rootReducer = combineReducers({
  attrState: attributeReducer,
  skillState: skillReducer,
  equippedArmour: equipArmourReducer,
  ownedArmour: ownedArmourReducer,
  carriedWeapons: ownedWeaponsReducer,
  equipment: equipmentReducer,
  edges: edgeReducer,
  hindrances: hindranceReducer,
  condition: conditionReducer,
  notes: notesReducer,
  characterInfo: characterInfoReducer,
  background: backgroundReducer,
});

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
