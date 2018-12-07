import React from 'react';
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'

const KestrelPage = () => {
    let title = "The Kestrel Co";

    return (
        <Layout>
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                    {title}
                                </h2>
                                <div className="content">
                                    <h2>You dream. We develop.</h2>
                                    <p>We believe in the power of focus. We believe in knowing what you’re good at and doing what you love.</p>
                                    <p>What we love is helping our partners make their dreams a reality. You have a story to tell. You have products to sell. You deliver unparalleled service. And the world needs to know it. Your new website or app can help you share your passion with the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};
export default KestrelPage;