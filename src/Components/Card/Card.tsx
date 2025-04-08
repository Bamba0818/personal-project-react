import { useState } from 'react';
import './Card.css';

interface CardProps {
    theme: string;
    imgSrc: string;
}

function Card({ theme, imgSrc }: CardProps) {
    const [likes, setLikes] = useState(0);

    const incrementLike = () => {
        setLikes(likes + 1);
    };

    const decrementLike = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    };

    return (
        <section>
            <figure>
                <img src={imgSrc} alt={theme} />
                <figcaption>{theme}</figcaption>
            </figure>

            <div className="like-container">
                <img
                    src="src/assets/like-removebg-preview.png"
                    alt="like"
                    className="like-icon"
                    onClick={incrementLike}
                />
                <img
                    src="src/assets/téléchargement.jpg"
                    alt="dislike"
                    className="dislike-icon"
                    onClick={decrementLike}
                />
                <p>{likes} Like{likes !== 1 ? 's' : ''}</p>
            </div>
        </section>
    );
}

export default Card;