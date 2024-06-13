import './Card.css'
export const Card = ({ id, name, username, mail }) => {
    return (
        <>
            <li className="card">
                <div className="card-container">
                    <figure className="img-container">
                        <img className="card-img" src={`https://picsum.photos/200/300?random=${id}`}></img>
                    </figure>
                    <div className="card-body">
                        <div className='card-details'>
                            <h3 className="name">{name}</h3>
                            <p className="username">{`@${username}`}</p>
                            <p className="mail">{mail}</p>
                        </div>

                    </div>
                </div>
            </li>


        </>
    );
};

// 