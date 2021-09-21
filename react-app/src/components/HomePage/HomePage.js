import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./HomePage.css";
import fillForm from "../../assets/images/fill-in-form.png";
import dinoForm from "../../assets/images/wufoo-online-form-builder.png";
import NavBar from "../NavBar/NavBar";

export default function HomePage() {
	const user = useSelector(state => state.session.user);

	if(user) {
		return (
			<Redirect to="/forms"/>
		);
	}
	
	return (
		<>
			<NavBar />
			<div className="homepage-container">
				<div className="homepage-content">
					<div className="homepage-banner">
						<div className="homepage-banner-text">
							<div className="homepage-banner-header">
								Easy-to-Use Online Form Builder For Every
								Organization
							</div>
							<div className="homepage-banner-subtext">
								Cloud-based form builder that makes it easy to
								create registration forms, application forms,
								surveys, contact forms, payment forms and more.
							</div>
							<div className="homepage-banner-footer">
								Forme is and always will be FREE! No considering
								different plans depending on your needs, the
								free plan supports all functionality.
							</div>
						</div>
						<div className="homepage-banner-image">
							<img
								className="fill-form-image"
								src={fillForm}
								alt="\A"
							/>
						</div>
					</div>
					<div className="homepage-dino">
						<img
							className="homepage-dino-image"
							src={dinoForm}
							alt="\A"
						/>
						<div className="homepage-dino-text">
							<div className="homepage-dino-header">
								Build powerful online forms and customize them
								to your heart's delight.
							</div>
							<div className="homepage-dino-footer">
								Our form builder gives you an award-winning
								interface, easy customization, galleries,
								templates and reporting. Check out some of our
								popular features.
							</div>
						</div>
					</div>
					<div className="homepage-scene">
						<div className="homepage-scene-text">
							<div className="homepage-scene-header">
								Ready to Get Started?
							</div>
							<div className="homepage-scene-subtext">
								Sign up for a FREE account and start building
								forms now.
							</div>
							<div className="homepage-scene-signup">
								<NavLink
									to="/signup"
									className="homepage-scene-signup-button">
									<span className="homepage-scene-signup-text">
										Sign Up Now
									</span>
								</NavLink>
							</div>
						</div>
						<img
							className="homepage-scene-raptor"
							src="https://www.wufoo.com/wp-content/themes/wufoo-site/img/dino6.svg"
							alt="\A"
						/>
						<img
							className="homepage-scene-cloud1"
							src="https://www.wufoo.com/wp-content/themes/wufoo-site/img/cloud-10.svg"
							alt="\A"
						/>
						<img
							className="homepage-scene-cloud2"
							src="https://www.wufoo.com/wp-content/themes/wufoo-site/img/cloud-08.svg"
							alt="\A"
						/>
						<img
							className="homepage-scene-dino"
							src="https://www.wufoo.com/wp-content/themes/wufoo-site/img/dino8.svg"
							alt="\A"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
