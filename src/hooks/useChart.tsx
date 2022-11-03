import { useContext } from "react";
import { chartContext } from "../contexts/chartProvider";

export const useChart = () => {
	return useContext(chartContext);
};
