import './HomePage.css'
import fillForm from '../../assets/images/fill-in-form.png';
import dinoForm from '../../assets/images/wufoo-online-form-builder.png';

export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <div className="homepage-banner">
                    <div className="homepage-banner-text">
                        <div className="homepage-banner-header">
                        Easy-to-Use Online Form Builder For Every Organization
                        </div>
                        <div className="homepage-banner-subtext">
                        Cloud-based form builder that makes it easy to create registration forms, application forms, surveys, contact forms, payment forms and more.
                        </div>
                        <div className="homepage-banner-footer">
                        Forme is and always will be FREE! No considering different plans depending on your needs, the free plan supports all functionality.
                        </div>
                    </div>
                    <div className="homepage-banner-image">
                        <img className="fill-form-image" src={fillForm} alt="\A"/>
                    </div>
                </div>
                <div className="homepage-dino">
                    <img className="homepage-dino-image" src={dinoForm} alt="\A"/>
                    <div className="homepage-dino-text">
                        <div className="homepage-dino-header">
                        Build powerful online forms and customize them to your heart's delight.
                        </div>
                        <div className="homepage-dino-footer">
                        Our form builder gives you an award-winning interface, easy customization, galleries, templates and reporting. Check out some of our popular features.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}