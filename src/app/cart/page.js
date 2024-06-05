import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h2>CART</h2>
            <Link href="/checkout">
                <button>
                    checkout
                </button>
            </Link>
        </div>
    );
};

export default Page;