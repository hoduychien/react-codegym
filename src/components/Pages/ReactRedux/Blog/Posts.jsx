import React from 'react';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import './posts.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormatDate } from '../../hooks';
import CreateToggle from './CreateToggle';

const Posts = () => {
    const postReducer = useSelector((state) => state.postReducer);
    const [formatTime] = useFormatDate();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickEmoji = (post, emoji) => {
        dispatch({ type: 'HANDLE_CHANGE_EMOJI', payload: { post: post.id, emoji: emoji.id } });
    };

    const handleClickOpenDetailPost = (post) => {
        navigate(`/redux-blog/post/${post.id}`);
    };
    return (
        <div className="posts">
            <CreateToggle />
            <div className="posts-list">
                {postReducer.posts.map((post) => {
                    return (
                        <div className="posts-item" key={post.id}>
                            <div className="posts-item-header">
                                <div className="posts-item-header-left">
                                    <img src={post.avatar} alt="" />
                                    <div className="posts-item-header-info">
                                        <h3>{post.author}</h3>
                                        <span>{formatTime(post.updatedAt)}</span>
                                    </div>
                                </div>
                                <div className="posts-item-header-toggle">
                                    <MoreHorizRoundedIcon className="posts-item-header-toggle-icon" />
                                </div>
                            </div>
                            <div className="posts-item-image">
                                <img src={post.img} alt="" />
                            </div>

                            <div className="posts-item-action">
                                <div className="posts-item-action-left">
                                    <div className="posts-item-action-button">
                                        <FavoriteBorderRoundedIcon className="posts-item-action-icon" />

                                        <div className="posts-item-action-button-child">
                                            {post.emoji &&
                                                post.emoji.map((item) => {
                                                    return (
                                                        <div
                                                            onClick={() =>
                                                                handleClickEmoji(post, item)
                                                            }
                                                            className="posts-item-action-button-child-item"
                                                            key={item.id}
                                                        >
                                                            <img src={item.type} alt="" />
                                                            <span>{item.quantity}</span>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                    <div className="posts-item-action-button">
                                        <ChatBubbleOutlineRoundedIcon className="posts-item-action-icon" />
                                    </div>
                                    <div className="posts-item-action-button">
                                        <ShareOutlinedIcon className="posts-item-action-icon" />
                                    </div>
                                </div>
                                <div className="posts-item-action-button">
                                    <BookmarkBorderRoundedIcon className="posts-item-action-icon" />
                                </div>
                            </div>
                            <div className="posts-item-content">
                                <p>{post.content}</p>
                                <span onClick={() => handleClickOpenDetailPost(post)}>
                                    Xem thêm
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Posts;
