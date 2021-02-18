import { useEffect, useState } from "react"
import '../styles/DisplayReviews.css'
import { Rate, Alert } from 'antd';
import {getReviewsByProductId, deleteReviewById} from '../apies/ReviewsApi'
import LoadingIcon from "./LoadingIcon";
import { DeleteOutlined} from '@ant-design/icons'
const DisplayReviews = ({productId, isAuthenticated, token}) => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [msgStyle, setMsgStyle] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        getReviewsByProductId(setReviews, setIsLoading, productId)
    }, [reviews])

    const handleMessage = (msg, MsgStyle) => {
        setMessage(msg)
        setMsgStyle(MsgStyle)
    }
    const handleDeleteReview = id => {
        if(window.confirm("You are about removing a review! Are you sure?")){
            deleteReviewById(id, token, handleMessage)
        }
        
    }
    return(
        <div className="display-reviews-body">
            {message && msgStyle ? <Alert className="message" message={message} type={msgStyle} showIcon /> : null}
            {reviews ? reviews.map(review => {
                return(
                <div className="reviews-wrapper" key={review.id}>
                    {isAuthenticated ? <DeleteOutlined onClick={() => {handleDeleteReview(review.id)}} className="delete-review-icon" /> : null }
                    <div className="name-rate-wrapper">
                        <div className="reviews-name">{review.name}</div>
                        <div className="display-rates"><Rate disabled style={{color: '#c63736'}} value={review.rate} disabled /></div>
                    </div>
                    <div className="reviews-comment">{review.comment}</div>
                    <div className="reviews-date">{new Date(review.timeStamp).toLocaleString()}</div>
                </div>
                )
            }) : 
                <LoadingIcon />
            }

        </div>
    )
}
export default DisplayReviews