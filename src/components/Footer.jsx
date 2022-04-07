import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1 px-0">Marketing</li>
            <li className="py-1 px-0">Analytics</li>
            <li className="py-1 px-0">Commerce</li>
            <li className="py-1 px-0">Data</li>
            <li className="py-1 px-0">Cloud</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1 px-0">Pricing</li>
            <li className="py-1 px-0">Documentation</li>
            <li className="py-1 px-0">Guides</li>
            <li className="py-1 px-0">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1 px-0">About</li>
            <li className="py-1 px-0">Blog</li>
            <li className="py-1 px-0">Jobs</li>
            <li className="py-1 px-0">Press</li>
            <li className="py-1 px-0">Partners</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1 px-0">Claims</li>
            <li className="py-1 px-0">Privacy</li>
            <li className="py-1 px-0">Terms</li>
            <li className="py-1 px-0">Policies</li>
            <li className="py-1 px-0">Conditions</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox.
          </p>
          <form action="POST" className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="sm:flex flex-col max-w-[1240px] px-2 py-4 mx-auto items-center justify-between sm:flex-row text-center text-gray-500">
        <p className="">2022 Workflow, LLC. All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaTwitch className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
