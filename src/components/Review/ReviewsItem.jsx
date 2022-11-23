import { PropTypes } from 'prop-types';


export const ReviewsItem = ({ reviews }) => {
    const { author_details: { name }, content } = reviews;


    return (
        <>
            <h3>Author: {name ? name : 'anonymus'}</h3>
            <p style={{ backgroundColor: '#d5e6eb', padding: '10px' }}>
                {content}
            </p>
            <hr />
        </>
    );
};

ReviewsItem.propTypes = {
    reviews: PropTypes.shape({
        avatar_path: PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar_path: PropTypes.string.isRequired,
        }),
        content: PropTypes.string.isRequired,
    }),
};