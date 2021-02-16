import '../../styles/admin-style/OrderCard.css'
import {backendPath} from '../../config/Config'
const OrderCard = ({item}) => {
    return(
        <div className="order-card-body">
            <div className="order-card-customer-info">
                <div>Firstname: <span>{item.firstName}</span></div>
                <div>Lastname: <span>{item.lastName}</span></div>
                <div>Email: <span>{item.email}</span></div>
                <div>Address: <span>{item.address}</span></div>
                <div>Zip code: <span>{item.zipCode}</span></div>
                <div>State: <span>{item.state}</span></div>
            </div>
            <div className="order-card-products">
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                
                {item.orderProducts.map(order => {
                    return(
                        <tr key={order.id}>
                            <td><img src={backendPath + "/api/images/" + order.product.imageId} /></td>
                            <td><div>{order.product.productDescription}</div></td>
                            <td><div>{order.product.productPrice}</div></td>
                            <td><div>{order.quantity}</div></td>
                        </tr>
                    )
                })}
                </table>
            </div>
        </div>
    )
}
export default OrderCard