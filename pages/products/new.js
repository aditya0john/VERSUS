import Layout from '@/components/Layout'
import ProductForm from '@/components/ProductForm'
import { React, useState } from 'react'


function New() {
    return (
        <Layout>
            <h1 className='mb-3 text-black'>
                New Product Form
            </h1>
            <ProductForm />
        </Layout>
    )
}

export default New