import LinkTree from "~/components/LinkTree";

const linkTree = {
  icon: "some-icon-class", // This can be a class name for styling
  routes: {
    facebook: {
      route: "https://facebook.com/yourprofile",
      label: "Facebook",
    },
    instagram: {
      route: "https://instagram.com/yourprofile",
      label: "Instagram",
    },
    // You can add more routes as needed
  },
};

const Linktr = () => {
  return <LinkTree config={linkTree} />;
};

export default Linktr;
