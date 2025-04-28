import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from  '../assets/image6.jpg';
import image7 from  '../assets/image7.jpg';
import image8 from  '../assets/image8.jpg';
import image9 from  '../assets/image9.jpg';
import image10 from  '../assets/image10.jpg';
import image11 from  '../assets/image11.jpg';
import image12 from  '../assets/image12.jpg';
import image13 from  '../assets/image13.jpg';
import image14 from  '../assets/image14.jpg';
import image15 from  '../assets/image15.jpg';
import image16 from  '../assets/image16.jpg';
import image17 from  '../assets/image17.jpg';
import image18 from  '../assets/image18.jpg';
import image19 from  '../assets/image19.jpg';
import image20 from  '../assets/image20.jpg';

const listings = [
  {
    id: 1,
    title: "1BHK Apartment",
    price: "Rs. 15,000/month",
    image: image1,
    location: "Kathmandu, Nepal",
    description: "A 1BHK apartment with all basic amenities.",
    features: ["1 Bedroom", "1 Bathroom", "Balcony", "Furnished"],
    type: "apartment",
    disability: ["wheelchair"]
  },
  {
    id: 2,
    title: "Apartment",
    price: "Rs. 25,000/month",
    image: image2,
    location: "Pokhara, Nepal",
    description: "Apartment in Pokhara near lake.",
    features: ["2 Bedrooms", "1 Bathroom", "Kitchen", "Parking Space"],
    type: "apartment",
    disability: ["elevator", "wheelchair"]
  },
  {
    id: 3,
    title: "Single Room",
    price: "Rs. 12,000/month",
    image: image3,
    location: "Lalitpur, Nepal",
    description: "A room for singles or students.",
    features: ["Studio", "High-Speed WiFi"],
    type: "room",
    disability: []
  },
  {
    id: 4,
    title: "Family Home",
    price: "Rs. 30,000/month",
    image: image4,
    location: "Bhaktapur, Nepal",
    description: "A spacious family home with a big garden and parking.",
    features: ["3 Bedrooms", "2 Bathrooms", "Garden", "Garage"],
    type: "house",
    disability: []
  },
  {
    id: 5,
    title: "Budget Room",
    price: "Rs. 8,000/month",
    image: image5,
    location: "Patan, Nepal",
    description: "Affordable room ideal for students or working individuals.",
    features: ["1 Room", "Shared Bathroom", "WiFi"],
    type: "room",
    disability: []
  },
  {
    id: 6,
    title: "Luxury House",
    price: "Rs. 45,000/month",
    image: image6,
    location: "Kathmandu, Nepal",
    description: "Luxurious house with modern design and amenities.",
    features: ["2 Bedrooms", "2 Bathrooms", "Gym Access", "24/7 Security"],
    type: "house",
    disability: ["elevator", "wheelchair", "no_steps"]
  },
  {
    id: 7,
    title: "Apartment",
    price: "Rs. 10,000/month",
    image: image7,
    location: "Chitwan, Nepal",
    description: "Affordable apartment near the city center.",
    features: ["2 Bedrooms", "1 Bathroom", "Parking Space"],
    type: "apartment",
    disability: ["wheelchair"]
  },
  {
    id: 8,
    title: "Penthouse Suite",
    price: "Rs. 50,000/month",
    image: image8,
    location: "Pokhara, Nepal",
    description: "A luxurious penthouse with stunning views of the lake.",
    features: ["3 Bedrooms", "3 Bathrooms", "Balcony", "Elevator"],
    type: "apartment",
    disability: ["elevator", "wheelchair"]
  },
  {
    id: 9,
    title: "Modern Room",
    price: "Rs. 13,000/month",
    image: image9,
    location: "Lalitpur, Nepal",
    description: "Modern room with all amenities.",
    features: ["1 Room", "High-Speed WiFi", "Shared Bathroom"],
    type: "room",
    disability: ["elevator"]
  },
  {
    id: 10,
    title: "Cozy Home",
    price: "Rs. 20,000/month",
    image: image10,
    location: "Bhaktapur, Nepal",
    description: "A cozy home with all necessary features.",
    features: ["2 Bedrooms", "1 Bathroom", "Garden", "Parking Space"],
    type: "house",
    disability: []
  },
  {
    id: 11,
    title: "Apartment",
    price: "Rs. 18,000/month",
    image: image11,
    location: "Kathmandu, Nepal",
    description: "Studio apartment ideal for singles or students.",
    features: ["1 Room", "1 Bathroom", "WiFi"],
    type: "apartment",
    disability: ["no_steps"]
  },
  {
    id: 12,
    title: "Apartment",
    price: "Rs. 22,000/month",
    image: image12,
    location: "Pokhara, Nepal",
    description: "Spacious apartment with lake view.",
    features: ["2 Bedrooms", "1 Bathroom", "Balcony", "Elevator"],
    type: "apartment",
    disability: ["elevator", "wheelchair"]
  },
  {
    id: 13,
    title: "Commuter Room",
    price: "Rs. 9,500/month",
    image: image13,
    location: "Patan, Nepal",
    description: "Room with easy access to public transport.",
    features: ["1 Room", "Shared Bathroom", "WiFi"],
    type: "room",
    disability: []
  },
  {
    id: 14,
    title: "Luxury Home",
    price: "Rs. 35,000/month",
    image: image14,
    location: "Bhaktapur, Nepal",
    description: "Spacious family home with modern amenities.",
    features: ["4 Bedrooms", "3 Bathrooms", "Garden", "Garage"],
    type: "house",
    disability: ["wheelchair"]
  },
  {
    id: 15,
    title: "Student Room",
    price: "Rs. 7,500/month",
    image: image15,
    location: "Kathmandu, Nepal",
    description: "Simple and affordable room for students.",
    features: ["1 Room", "Shared Bathroom", "WiFi"],
    type: "room",
    disability: []
  },
  {
    id: 16,
    title: "High-end Room",
    price: "Rs. 40,000/month",
    image: image16,
    location: "Lalitpur, Nepal",
    description: "A luxury apartment in a prime location.",
    features: ["3 Bedrooms", "2 Bathrooms", "Balcony", "Elevator"],
    type: "apartment",
    disability: ["elevator", "wheelchair"]
  },
  {
    id: 17,
    title: "Spacious Room",
    price: "Rs. 12,500/month",
    image: image17,
    location: "Pokhara, Nepal",
    description: "Room with a great view of the mountains.",
    features: ["1 Room", "1 Bathroom", "WiFi"],
    type: "room",
    disability: []
  },
  {
    id: 18,
    title: "Modern Home",
    price: "Rs. 28,000/month",
    image: image18,
    location: "Kathmandu, Nepal",
    description: "Modern home with high-end features and security.",
    features: ["3 Bedrooms", "2 Bathrooms", "Gym", "24/7 Security"],
    type: "house",
    disability: ["elevator", "wheelchair", "no_steps"]
  },
  {
    id: 19,
    title: "Cozy Apartment",
    price: "Rs. 15,500/month",
    image: image19,
    location: "Patan, Nepal",
    description: "Cozy apartment with modern amenities.",
    features: ["2 Bedrooms", "1 Bathroom", "Parking Space"],
    type: "apartment",
    disability: ["elevator"]
  },
  {
    id: 20,
    title: "Luxury Villa",
    price: "Rs. 60,000/month",
    image: image20,
    location: "Kathmandu, Nepal",
    description: "Luxury villa with top-tier features and facilities.",
    features: ["4 Bedrooms", "3 Bathrooms", "Private Garden", "Security System"],
    type: "house",
    disability: ["elevator", "wheelchair"]
  }
];

export default listings;
