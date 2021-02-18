import { Rate } from 'antd';
import { useState } from 'react';
import { Alert } from 'antd';
import '../styles/CreateReview.css'
import {addReview} from '../apies/ReviewsApi'
const CreateReview = ({productId, setIsFormHidden}) => {
    const [rate, setRate] = useState(0)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [msgStyle, setMsgStyle] = useState('')
    const [message, setMessage] = useState('')

    const handleMessage = (msg, MsgStyle) => {
        setMessage(msg)
        setMsgStyle(MsgStyle)
    }
    const handleCreateReview = () => {
        if (!name || !comment || !rate) {
            handleMessage('Please fill all fields first!', 'error')
            return
        }
        let data = {'productId': productId , 'name': name, 'comment': comment, 'rate': rate}
        addReview(JSON.stringify(data), handleMessage)
        setIsFormHidden(true)
        setRate(0)
        setName('')
        setComment('')
    }

    return(
        <div className="create-review-body">
            {message && msgStyle ? <Alert className="message" message={message} type={msgStyle} showIcon /> : null}
            <input type="text" placeholder="Name " onChange={event => setName(event.target.value)} />
            <Rate className="rates" onChange={value => setRate(value)} />
            <textarea placeholder="Comment" onChange={event => setComment(event.target.value)} />
            <button onClick={handleCreateReview}>Add</button>
        </div>
    )
}
export default CreateReview