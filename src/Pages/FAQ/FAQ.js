import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div>
                <section className="">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-semibold sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 mb-8 dark:text-gray-400">About React</p>
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                    What is the purpose react router?
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                    The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

                                    Makes JavaScript coding easier.
                                    Extremely competent.
                                    Excellent cross-platform support.
                                    Handles dependencies.
                                    Template designing made easy.
                                    Provides amazing developer tools.
                                    UI focused designs.
                                    Easy to adopt.
                                </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                    React Context API How it works?
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                    Despite React's popularity, one of the biggest obstacles developers face when working with the library is components re-rendering excessively, slowing down performance and harming readability. Component re-rendering is especially damaging when developers need components to communicate with each other in a process known as prop drilling. The new React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. In this tutorial, we'll explore how we can use React Context to avoid prop drilling.
                                </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                    What is use REF IN React?
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                    The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FAQ;