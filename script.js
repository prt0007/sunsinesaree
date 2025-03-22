// Function to load Home content
function loadHome() {
    const content = `
        <section class="bg-black text-white flex items-center justify-center min-h-screen" id="home">
            <div class="text-center">
                <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">sunsine</h1>
                <p class="text-lg text-gray-400 mt-2">WEAR THE SUNSHINE, <span class="text-gray-500">SHINE IN STYLE</span></p>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to load About content
function loadAbout() {
    const content = `
        <section class="py-12 bg-gray-200" id="about">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">About Us</h2>
                <div class="max-w-2xl mx-auto text-center">
                    <p class="text-gray-700 mb-4">Sunsine is a premium fashion brand that brings the warmth and brightness of the sun into your wardrobe. Our mission is to provide stylish and comfortable clothing that makes you feel confident and radiant.</p>
                    <p class="text-gray-700">Founded in 2023, we are committed to using high-quality materials and sustainable practices to create our products. Join us on our journey to shine in style!</p>
                </div>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to load Products content
function loadProducts() {
    const content = `
        <section class="py-12" id="products">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Our Products</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <img alt="Product 1" class="w-full h-48 object-cover mb-4 rounded" src="https://placehold.co/300x200"/>
                        <h3 class="text-xl font-bold mb-2">Product 1</h3>
                        <p class="text-gray-700 mb-4">Description of Product 1.</p>
                        <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300" onclick="location.href='shipping.html?product=Product1'">Order Now</button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <img alt="Product 2" class="w-full h-48 object-cover mb-4 rounded" src="https://placehold.co/300x200"/>
                        <h3 class="text-xl font-bold mb-2">Product 2</h3>
                        <p class="text-gray-700 mb-4">Description of Product 2.</p>
                        <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300" onclick="location.href='shipping.html?product=Product2'">Order Now</button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <img alt="Product 3" class="w-full h-48 object-cover mb-4 rounded" src="https://placehold.co/300x200"/>
                        <h3 class="text-xl font-bold mb-2">Product 3</h3>
                        <p class="text-gray-700 mb-4">Description of Product 3.</p>
                        <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300" onclick="location.href='shipping.html?product=Product3'">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to load Contact content
function loadContact() {
    const content = `
        <section class="py-12" id="contact">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="contact-name">Name</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="contact-name" type="text"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="contact-email">Email</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="contact-email" type="email"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="message">Message</label>
                            <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="message" rows="4"></textarea>
                        </div>
                        <button class="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to load Sign Up content
function loadSignUp() {
    const content = `
        <section class="py-12 bg-gray-200" id="signup">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Sign Up</h2>
                <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="name">Name</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="name" type="text"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="email">Email</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="email" type="email"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="password">Password</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="password" type="password"/>
                        </div>
                        <button class="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to load Payment content
function loadPayment() {
    const content = `
        <section class="py-12" id="payment">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Payment</h2>
                <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="card-name">Cardholder Name</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="card-name" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="card-number">Card Number</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="card-number" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="expiry-date">Expiry Date (MM/YY)</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="expiry-date" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="cvv">CVV</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="cvv" type="text" required/>
                        </div>
                        <button class="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300" type="submit">Pay Now</button>
                    </form>
                </div>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to load Shipping content
function loadShipping() {
    const content = `
        <section class="py-12" id="shipping">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Shipping Address</h2>
                <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form action="payment.html" method="GET">
                        <div class="mb-4">
                            <label class="block text-gray-700" for="full-name">Full Name</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="full-name" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="address">Address</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="address" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="city">City</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="city" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="state">State</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="state" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700" for="zip">Zip Code</label>
                            <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="zip" type="text" required/>
                        </div>
                        <button class="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300" type="submit">Submit Address</button>
                    </form>
                </div>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to load Terms content
function loadTerms() {
    const content = `
        <section class="py-12 bg-gray-200" id="terms">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Terms and Conditions</h2>
                <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-4">1. Introduction</h3>
                    <p class="text-gray-700 mb-4">Welcome to Sunsine (“we,” “our,” or “us”). These Terms and Conditions govern your use of our website and the purchase of products from our platform. By accessing or using our website, you agree to comply with these terms.</p>
                    <h3 class="text-xl font-bold mb-4">2. Products and Pricing</h3>
                    <ul class="list-disc list-inside text-gray-700 mb-4">
                        <li>We sell sarees and other fashion-related items.</li>
                        <li>Prices are subject to change without prior notice.</li>
                        <li>We strive to display product images and descriptions as accurately as possible, but we do not guarantee that colors and details will be exactly as seen on your screen.</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-4">3. Orders and Payment</h3>
                    <ul class="list-disc list-inside text-gray-700 mb-4">
                        <li>By placing an order, you agree to provide accurate and complete information.</li>
                        <li>We accept payments through Cashfree.</li>
                        <li>Orders are confirmed only after successful payment.</li>
                        <li>We reserve the right to cancel or refuse any order at our discretion.</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-4">4. Shipping and Delivery</h3>
                    <ul class="list-disc list-inside text-gray-700 mb-4">
                        <li>We ship products across India. International shipping may be available upon request.</li>
                        <li>Estimated delivery times are provided at checkout but may vary due to unforeseen circumstances.</li>
                        <li>We are not responsible for delays caused by courier services.</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-4">5. Returns and Refunds</h3>
                    <ul class="list-disc list-inside text-gray-700 mb-4">
                        <li>Return requests are accepted within 3 days of delivery, subject to our return policy.</li>
                        <li>The product must be unused and in original condition.</li>
                        <li>Refunds (if applicable) will be processed within 2 days after we receive the returned product.</li>
                        <li>We do not accept returns for customized or discounted products.</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-4">6. Order Cancellation</h3>
                    <p class="text-gray-700 mb-4">Cancellations are only accepted before the product is shipped.</p>
                    <h3 class="text-xl font-bold mb-4">7. Intellectual Property</h3>
                    <p class="text-gray-700 mb-4">All content, including images, logos, and text, is the property of Sunsine and may not be used without permission.</p>
                    <h3 class="text-xl font-bold mb-4">8. User Conduct</h3>
                    <ul class="list-disc list-inside text-gray-700 mb-4">
                        <li>You agree not to use the website for any unlawful purposes.</li>
                        <li>Any fraudulent transactions or abuse of our services may result in a ban from our platform.</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-4">9. Privacy Policy</h3>
                    <p class="text-gray-700 mb-4">Your personal information is collected and used according to our <a href="#" class="text-yellow-500">Privacy Policy</a>.</p>
                    <h3 class="text-xl font-bold mb-4">10. Limitation of Liability</h3>
                    <p class="text-gray-700 mb-4">We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or products.</p>
                    <h3 class="text-xl font-bold mb-4">11. Governing Law</h3>
                    <ul class="list-disc list-inside text-gray-700 mb-4">
                        <li>These terms are governed by the laws of India.</li>
                        <li>Any disputes shall be resolved in the courts of Churu, Rajasthan.</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-4">12. Changes to Terms and Conditions</h3>
                    <p class="text-gray-700 mb-4">We reserve the right to modify these terms at any time. Changes will be updated on this page.</p>
                    <h3 class="text-xl font-bold mb-4">13. Contact Information</h3>
                    <p class="text-gray-700">If you have any questions about these Terms and Conditions, please contact us at takpulkit9@gmail.com.</p>
                </div>
            </div>
        </section>
    `;
    document.getElementById('content').innerHTML = content;
}

// Function to handle navigation
function handleNavigation() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('href').split('.')[0]; // Get the page name without .html
            if (page === 'index') loadHome();
            else if (page === 'about') loadAbout();
            else if (page === 'products') loadProducts();
            else if (page === 'contact') loadContact();
            else if (page === 'signup') loadSignUp();
            else if (page === 'payment') loadPayment();
            else if (page === 'shipping') loadShipping();
            else if (page === 'terms') loadTerms();
        });
    });
}

// Initialize the application
function init() {
    loadHome(); // Load the home page by default
    handleNavigation(); // Set up navigation event listeners
}

// Call the init function when the window loads
window.onload = init;