import { useContext } from "react";
import { ModalContext } from "../modelContext/ModelProvider";

// Custom hook
export const useModal = () => useContext(ModalContext);