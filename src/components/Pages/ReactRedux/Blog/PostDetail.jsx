import React, { useEffect, useState } from 'react';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { useSelector, useDispatch } from 'react-redux';
import { useFormatDate } from '../../hooks';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const PostDetail = () => {
    const [formatTime] = useFormatDate();
    const dispatch = useDispatch();
    let { id } = useParams();

    const postReducer = useSelector((state) => state.postReducer);

    const handleClickEmoji = (post, emoji) => {
        dispatch({ type: 'HANDLE_CHANGE_EMOJI', payload: { post: post.id, emoji: emoji.id } });
    };

    useEffect(() => {
        dispatch({ type: 'HANDLE_OPEN_DETAIL_POST', payload: id });
    }, []);
    return (
        <div>
            <div className="post-detail">
                {postReducer.postDetails && (
                    <div className="posts-item" key={postReducer.postDetails.id}>
                        <div className="posts-item-header">
                            <div className="posts-item-header-left">
                                <img src={postReducer.postDetails.avatar} alt="" />
                                <div className="posts-item-header-info">
                                    <h3>{postReducer.postDetails.author}</h3>
                                    <span>{formatTime(postReducer.postDetails.updatedAt)}</span>
                                </div>
                            </div>
                            <div className="posts-item-header-toggle">
                                <MoreHorizRoundedIcon className="posts-item-header-toggle-icon" />
                            </div>
                        </div>
                        <div className="posts-item-image  posts-item-image-detail">
                            <img src={postReducer.postDetails.img} alt="" />
                        </div>

                        <div className="posts-item-action">
                            <div className="posts-item-action-left">
                                <div className="posts-item-action-button">
                                    <FavoriteBorderRoundedIcon className="posts-item-action-icon" />

                                    <div className="posts-item-action-button-child">
                                        {postReducer.postDetails.emoji &&
                                            postReducer.postDetails.emoji.map((item) => {
                                                return (
                                                    <div
                                                        onClick={() =>
                                                            handleClickEmoji(
                                                                postReducer.postDetails,
                                                                item,
                                                            )
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
                        <div className="posts-item-content-detail">
                            <p>{postReducer.postDetails.content}</p>
                        </div>
                        <Comment />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostDetail;
