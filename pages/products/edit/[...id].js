import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function editProductPage() {
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) {
            return;
        } else {
            axios.get('/api/products?id=' + id).then(response => {
                setProductInfo(response.data);
            });
        }
    }, [id]);

        console.log("ore ore"+ productInfo)
    return (
        <Layout>
            <h1 className="text-black mb-3">
                PRODUCT DETAILS EDIT FORM
            </h1>
            {productInfo && (
                <ProductForm {...productInfo} />
            )}
        </Layout>
    )
}