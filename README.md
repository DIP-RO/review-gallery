*live site: https://dipro-teach.web.app


*Technology uses of this site:
React
React Router Dom
Tailwind
React-daisyUi
Firebase Authentication & Deploy
React-hook-form
React-Toastify
react-fontawesome
*Features of this site:
The homepage will have a Navbar, a slider/banner/ a meaningful section. Under the navbar, display a list of services. There will be at least 6 services in the database, but here, you will limit the number to only 3 i.e. on the home page, you will show maximum of 3 services (this should be done in the backend). Also, add a meaningful footer.

There will be a " see all" button/icon under the 3 services. When clicking the button/icon, take the user to the /services route and show all the services on that page.

Add two extra sections on the home page. Make sure it is unique and relevant to your website.

The services of the home page and the services of the services page will have the name of the service, image, rating(optional), price, a short description(maximum 100 characters), and a view details button with each service card.

When clicking on the image of the service, the picture will be viewed on full screen. Explore the package react-photo-view for that.

On clicking the view details button, the user will be taken to the service details page: /services/:id route

The service details route will have two sections.

7.1. Service section:- show all the details of that Service with full description.

7.2. Review section:- there will be a review section where a user can see others' reviews of that service. A review should contain a text, name, and image of the reviewer, rating(optional). The user can also add his/her own review for that service. But he needs to log in first. If the user is not logged in(use conditional rendering), show a text like: Please login to add a review. After clicking the login button/link, take him to the login page. Otherwise, show a form with a text area and a button to add his review(rating is optional). Please store the user info (email, etc.) and service info (service id, etc.) with each review to display the reviews correctly with the relevant service.

Implement email/password-based authentication and at least one social login(google, Facebook, GitHub, etc.) authentication. Please skip the email verification part here, because it will create some inconvenience for the examiner. It is important for the examiner to be able to check your authentication without any hassle. If you want, you can add email verification after getting the assignment result.

Once a user is logged in, he/she will see more options like My reviews, Add service, and the logout button in the navbar.

The "My reviews" page will be a private route and show only the reviews that the current user added either in a table or in cards with relevant information like - service name, review etc. There will be two buttons/icons - edit review(details in the bonus part) and delete review with each review. On clicking the delete button/icon, you have to delete the review, and it won't show up on that service page anymore. When the delete is successful, a toast/modal with a message will pop up to inform the user. If the user doesn't add any review, the page will show 'No reviews were added' at the middle of the page

On the "Add service" page(also a private route), you can add a service and that service will be shown on the home page. When the service is added successfully, a toast/modal with a message will pop up to inform the user.

No Fake data (data must be hosted on the database). The database could be MongoDB or any other NoSQL database.