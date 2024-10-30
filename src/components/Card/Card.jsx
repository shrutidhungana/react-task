import PropTypes from "prop-types";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

const Card = ({
  title,
  price,
  image,
  brand,
  ratings,
  totalRatings,
  onPrimaryButtonClick,
  primaryButtonText,
  onSecondaryButtonClick,
  secondaryButtonText,
}) => {
  return (
    <div className="border border-gray-300 rounded-xl p-3 min-w-[300px] max-w-xs mx-auto my-4 text-left transition-transform transform hover:scale-105">
      <div className="flex justify-center items-center h-48 overflow-hidden ProductCard-image">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300"
        />
      </div>
      <div className="py-2">
        <p className="ProductCard-category text-green-600 font-bold">{brand}</p>
        <h2 className="ProductCard-title text-lg font-bold text-[#000800] overflow-hidden whitespace-nowrap text-ellipsis w-[95%]">
          {title}
        </h2>
        <div className="flex justify-between items-center mb-2">
          <span className="ProductCard-price text-2xl text-orange-500">
            ${price}
          </span>
          <span className="ProductCard-rating text-gray-600">
            {ratings} <span className="text-sm">({totalRatings} Ratings)</span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {primaryButtonText && onPrimaryButtonClick && (
            <PrimaryButton
              onClick={onPrimaryButtonClick}
              className="ProductCard-button"
            >
              {primaryButtonText}
            </PrimaryButton>
          )}
          {secondaryButtonText && onSecondaryButtonClick && (
            <SecondaryButton onClick={onSecondaryButtonClick}>
              {secondaryButtonText}
            </SecondaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired,
  onPrimaryButtonClick: PropTypes.func, 
  primaryButtonText: PropTypes.string, 
  onSecondaryButtonClick: PropTypes.func, 
  secondaryButtonText: PropTypes.string, 
};

export default Card;
