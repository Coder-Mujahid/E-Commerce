
const Footer = () => {
  return (
    <div className="bg-sky-100">
      <div className="max-w-2xl mx-auto text-black py-10">
        <div className="text-center h-72 md:h-auto">
          <h3 className="text-3xl mb-3">Download our Amazon app</h3>
          <p>Your trusted e-commerce platform</p>
          <div className="md:flex justify-center my-5 h-16 py-2">
            <div className="flex items-center bg-slate-50 mb-5 h-full border border-black w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-900">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border bg-slate-50 h-full border-black w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-900">Download on</p>
                <p className="text-sm md:text-base">Apple  Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-900">
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy;  2023 Coder- Mujahid. All Rights Reserved.</p>
          <div className="order-1 md:order-2">
            <span className="px-2 hover:font-semibold">About us |</span>
            <span className="px-2 hover:font-semibold border-l">Contact us |</span>
            <span className="px-2 hover:font-semibold border-l">Privacy Policy </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
