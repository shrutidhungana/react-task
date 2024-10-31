import Banner from "../../components/Banner";
import BannerImage from "../../assets/banner.jpeg";
import { useGet } from "../../hooks";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader";

const Home = () => {
  const { data, loading } = useGet("product/latest");

  return (
    <>
      <Banner
        imageUrl={BannerImage}
        slogan="Welcome to TrendHive"
        message="Here you will get different Accessories and all things you need!"
        buttonLabel="Explore Now"
        buttonLink="/products"
        extraMessage="Go To product page to explore all products"
      />
      {loading ? ( // Use a ternary expression to show the loader
        <Loader loading={loading} message="Loading products!!! Please Wait..." />
      ) : (
        <div className="flex flex-wrap justify-center">
          {data?.data?.docs?.slice(0, 3)?.map((item) => (
            <Card
              key={item?._id}
              title={item?.title}
              price={item.price}
              image={item.images[0]} // Assuming the first image is used
              brand={item.brand?.name} // Adjust if necessary based on your data structure
              ratings={item.ratings}
              totalRatings={item.totalRatings}
              primaryButtonText="Add To Cart"
              onPrimaryButtonClick={() => console.log(`Buying ${item.title}`)}
              secondaryButtonText="View Details"
              onSecondaryButtonClick={() =>
                console.log(`Viewing ${item.title}`)
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
