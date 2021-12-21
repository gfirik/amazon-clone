import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Head from "next/head";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import Currency from 'react-currency-formatter'
import { useSession } from "next-auth/react";

function Checkout() {

    const items = useSelector(selectItems)
    const {data: session} = useSession();
    const total = useSelector(selectTotal)

    return (
        <div className="bg-gray-100">
        <Head>
            <link rel="icon" href="/logo.png"></link>
            <title>Checkout - Amazon Clone</title>
        </Head>
        
        <Header />
        
        <main className="mx-auto lg:flex max-w-screen-2xl">
            <div className="flex-grow m-5 shadow-sm">
                <Image 
                    src="/images/ad.jpg"
                    width={1020}
                    height={250}
                    ohjectFit="contain"
                />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="pb-4 text-3xl border-b">
                        {items.length===0 ? "Your cart is empty" : "Your cart"}
                    </h1>

                    {items.map((item, i) => (
                        <CheckoutProduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            description={item.description}
                            hasPrime={item.hasPrime}
                            category={item.category}
                        />   
                    ))}
                </div>
            </div>

            <div className="flex flex-col p-10 bg-white shadow-md">
                {items.length > 0 && (
                    <>
                        <h2 className="whitespace-nowrap">Subtotal {items.length} items: 
                            <span className="font-bold">
                                <Currency quantity={total} currency="GBP"/>
                            </span>
                        </h2>
                        <button 
                            disabled={!session}
                            className={`button mt-2 ${
                                !session && 'from-gray-300 to-gray-500 border-gray-300 cursor-not-allowed'
                            }`} 
                        >
                            {!session ? "Sign in to checkout" : "Checkout"}
                        </button>
                    </>
                ) }
            </div>
        </main>

        </div>
    )
}

export default Checkout
