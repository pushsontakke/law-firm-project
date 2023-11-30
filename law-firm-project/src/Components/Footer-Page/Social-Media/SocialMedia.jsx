import InstaIcon from '../../../assets/InstaIcon.png';
import FaceBookIcon from '../../../assets/FaceBookIcon.png';
import TwitterIcon from '../../../assets/TwitterIcon.png';
import PinterestIcon from '../../../assets/PinterestIcon.png';

const SocialMedia = () => {
    return (
      <div className="flex gap-4">
        <img src={InstaIcon} alt="InstaIcon" className="w-6 h-6" />
        <img src={FaceBookIcon} alt="FaceBookIcon" className="w-6 h-6" />
        <img src={TwitterIcon} alt="TwitterIcon" className="w-6 h-6" />
        <img src={PinterestIcon} alt="PinterestIcon" className="w-6 h-6" />
      </div>
    );
}

export default SocialMedia;