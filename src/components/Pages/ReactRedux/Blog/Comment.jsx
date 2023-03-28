import React from 'react';
import './comment.scss';
const Comment = () => {
    return (
        <div>
            <div className="comment">
                <div className="comment-input">
                    <input type="text" placeholder="Write a comment..." />
                </div>

                <div className="comment-item">
                    <div className="comment-item-avatar">
                        <img
                            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/96239825_1358829270974877_8318696841638051840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x9z0LubjmocAX8gqv48&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC8SMGhTxRM3ik3eU1Nu60xYxJmNzX1ah88KDxZ8AE8eA&oe=643DFF21"
                            alt="avatar"
                        />
                    </div>
                    <div className="comment-item-text">
                        <h3>Chien Duy</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                            dolore.
                        </p>
                        <div className="comment-item-action">
                            <div className="comment-item-action-button">Like</div>
                            <div className="comment-item-action-button">Repply</div>
                            <p>2023-03-27 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
