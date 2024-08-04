"use client";
import { useState } from "react";
import BannerImageComp from "../components/BannerImageComp";
import EditBannerTemplateBs from "../components/EditBannerTemplateBs";

const sampleBanners = [
  {
    title: "Summer Sale",
    description: "Up to 50% off on all items!",
    cta: "Read More",
    image:
      "https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?b=1&s=170667a&w=0&k=20&c=-fis9M9x6CXFBpdkZo_5cG2VvI0qS8_l2qbE-tEX4YQ=",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
  {
    title: "New Arrival",
    description: "Check out the latest trends.",
    cta: "Read More",
    image:
      "https://media.istockphoto.com/id/682897825/photo/confident-businesswoman-over-gray-background.jpg?s=612x612&w=0&k=20&c=6uF-aYj0erHJsIw4P54HsNh6S3TZiFH2T3mwwWHtbvk=",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
  {
    title: "Winter Collection",
    description: "Warm up with our new winter collection.",
    cta: "Shop Now",
    image:
      "https://media.istockphoto.com/id/1542566108/photo/young-businessman-smiling-at-camera.jpg?s=2048x2048&w=is&k=20&c=fhjNCzVb8pijG09XiptTOKwucLpyD6jVy0VzsZW2FaY=",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
  {
    title: "Black Friday Deals",
    description: "Exclusive discounts just for you!",
    cta: "Grab Now",
    image:
      "https://media.istockphoto.com/id/1205252676/photo/enthusiastic-young-casual-man-crossing-arms-and-smiling.jpg?s=2048x2048&w=is&k=20&c=XVhqR7eKC0S47xgrn4Pxh1x8QI7z1MwXSL752SiUpAA=",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
  {
    title: "Holiday Specials",
    description: "Celebrate the season with our special offers.",
    cta: "Explore Now",
    image:
      "https://media.istockphoto.com/id/1500573206/photo/portrait-of-confident-young-man.jpg?s=2048x2048&w=is&k=20&c=YoLSEU55iS9wll_rm9dTLY6L7xbIOS4BZWYuto482hA=",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
  {
    title: "Back to School",
    description: "Get ready for the new school year with our special offers.",
    cta: "Shop Now",
    image:
      "https://media.istockphoto.com/id/486903042/photo/portrait-of-smiling-teenage-boy-aganist-gray-background.jpg?s=2048x2048&w=is&k=20&c=N9rzFMJyQjPIujkgWtvE0OFIXAB-sy8JObwU0tKlaqw=",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
  {
    title: "Fitness Essentials",
    description: "Achieve your fitness goals with our top picks.",
    cta: "Get Fit",
    image:
      "https://media.istockphoto.com/id/1992147310/photo/handsome-young-man-in-denim-shirt-crossing-arms-and-laughing.jpg?s=2048x2048&w=is&k=20&c=JmgGN2BeLEsz0vSooYv6XCqxku8vtBYnHieE0H04VFw=",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
];
const Home = () => {
  const [banners, setBanners] = useState(sampleBanners);
  const [selectedBanner, setSelectedBanner] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (banner: any) => {
    setSelectedBanner(banner);
    setIsEditing(true);
  };
  
  const handleSave = (editedBanner: any) => {
    setBanners(
      banners.map((banner) =>
        banner.title === selectedBanner.title ? editedBanner : banner
      )
    );
    setSelectedBanner(null);
    setIsEditing(false);
  };

  return (
    <div className="grid grid-cols-2 px-5">
      {banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEdit(banner)}
        />
      ))}
      {selectedBanner && (
        <EditBannerTemplateBs
          open={isEditing}
          banner={selectedBanner}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Home;
