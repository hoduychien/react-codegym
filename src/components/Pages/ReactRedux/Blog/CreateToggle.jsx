import React from 'react';
import './creareToggle.scss';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

const CreateToggle = () => {
    return (
        <div>
            <div className="toggle">
                <div className="toggle-header">
                    <div className="toggle-image">
                        <img
                            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/96239825_1358829270974877_8318696841638051840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x9z0LubjmocAX8gqv48&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC8SMGhTxRM3ik3eU1Nu60xYxJmNzX1ah88KDxZ8AE8eA&oe=643DFF21"
                            alt="avatar"
                        />
                    </div>
                    <div className="toggle-input">
                        <input type="text" placeholder="Enter post content ..." />
                    </div>
                </div>

                <div className="toggle-footer">
                    <div className="toggle-footer-item">
                        <CameraAltOutlinedIcon className="toggle-footer-item-icon" />
                        <span>Live streaming</span>
                    </div>
                    <div className="toggle-footer-item">
                        <InsertPhotoOutlinedIcon className="toggle-footer-item-icon" />
                        <span>Photo/Video</span>
                    </div>
                    <div className="toggle-footer-item">
                        <SentimentSatisfiedOutlinedIcon className="toggle-footer-item-icon" />
                        <span>Emoji</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateToggle;
