import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";

export default function RoadMap() {
	return (
		<ProgressBar percent={25}>
			<Step>
				{({accomplished, index}) => (
					<div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
						{index + 1}
					</div>
				)}
			</Step>
			<Step>
				{({accomplished, index}) => (
					<div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
						{index + 1}
					</div>
				)}
			</Step>
			<Step>
				{({accomplished, index}) => (
					<div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
						{index + 1}
					</div>
				)}
			</Step>
		</ProgressBar>
	)
}