import { Link } from "react-router-dom";
import "./index.css";

export const Header = () => {
	return (
		<div className="div-header">
			<img src="logo.png" alt="" />
			<div className="div-login">
				<Link className="link" to="#">
					Registrar{" "}
				</Link>
				<Link className="link" to="/Login">
					Login{" "}
				</Link>
			</div>
		</div>
	);
};
