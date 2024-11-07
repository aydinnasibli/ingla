import React from 'react';

const Faq = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        How do you make holy water?
                    </h2>
                    <p className="text-gray-600">
                        You boil the hell out of it. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        What's the best thing about Switzerland?
                    </h2>
                    <p className="text-gray-600">
                        I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        What do you call someone with no body and no nose?
                    </h2>
                    <p className="text-gray-600">
                        Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quas cupiditate laboriosam fugiat.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">
                        Why do you never see elephants hiding in trees?
                    </h2>
                    <p className="text-gray-600">
                        Because they're so good at it. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
