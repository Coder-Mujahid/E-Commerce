import { motion } from 'framer-motion';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="min-h-screen flex pt-16 items-center justify-center bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="bg-white p-8 rounded shadow-md max-w-md w-full" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </motion.div>

      <motion.img
        src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp"
        alt="illustration"
        className="hidden md:block h-[500px] ml-8 w-1/2 object-cover"
        variants={itemVariants}
      />
    </motion.div>
  );
};

export default ContactPage;
