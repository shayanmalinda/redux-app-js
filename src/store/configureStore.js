import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export default function configureAppStore() {
  return configureStore({ reducer });
}
