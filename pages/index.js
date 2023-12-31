import Featured from "@/components/Featured"
import Header from "@/components/Header"
import { Product } from "@/models/Product"
import { mongooseConnect } from "@/lib/mongoose"
import NewProducts from "@/components/NewProducts"

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <title>Next Ecommerce Project</title>
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '65190020e79061dc9ffbdd25'
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit:10});
  return {
    props: { 
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}