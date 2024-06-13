import { Card } from '../Card/Card'
import './CardList.css'
export const CardList = ({ data }) => {
    return (

        <>
            <div className="cardgroup-container">
                <ul className="card-list">
                    {
                        data && data.map(user => (
                            <Card key={user.id}
                                id={user.id}
                                name={user.name}
                                username={user.username}
                                mail={user.email}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}